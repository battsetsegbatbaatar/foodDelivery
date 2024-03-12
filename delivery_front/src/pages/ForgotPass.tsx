import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { Router } from "express";

export default function Home() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      if (step === 1) {
        await sendVerificationCode();
      } else if (step === 2) {
        await verifyCodeAndResetPassword();
      } else if (step === 3) {
        await newPass();
      }
    } catch (error) {
      setError("not");
    }
  };

  const sendVerificationCode = async () => {
    try {
      await axios.post("http://localhost:8080/user/forgetPass", { email });
      setStep(2);
    } catch (error) {
      console.error("Error sending verification code:", error);
      throw error;
    }
  };

  const verifyCodeAndResetPassword = async () => {
    try {
      await axios.post("http://localhost:8080/user/resetPassword", {
        email,
        verificationCode,
      });
      setStep(3);
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  };

  const newPass = async () => {
    try {
      await axios.post("http://localhost:8080/user/newPass", {
        newPassword,
        confirmPassword,
      });
    } catch (error) {
      console.error({ message: "not new pass" });
    }
  };

  return (
    <>
      <Header />
      {error && <p className="text-red-500">{error}</p>}
      {step === 1 && (
        <main className="w-full flex justify-center px-[150px]  py-[168px]">
          <form
            onSubmit={handleSubmit}
            className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
          >
            <h5 className="text-3xl font-bold">Нууц үг сэргээх</h5>
            <div className="flex flex-col gap-2 w-[90%] justify-center">
              <label className="form-control w-full flex flex-col gap-1">
                <div className="label">
                  <span className="label-text text-sm">Имэйл </span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Имэйл хаягаа оруулна уу"
                  className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
            >
              Үргэлжлүүлэх
            </button>
          </form>
        </main>
      )}
      {step === 2 && (
        <main className="w-full flex justify-center px-[150px]  py-[168px]">
          <form
            onSubmit={handleSubmit}
            className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
          >
            <h5 className="text-3xl font-bold">Нууц үг сэргээх</h5>
            <div className="flex text-sm justify-start text-[#695C08]">
              <span>Таны </span>&nbsp;
              <p className="text-[#18BA51]">{email}</p>&nbsp;
              <span> хаяг руу сэргээх код илгээх болно.</span>
            </div>
            <div className="flex flex-col gap-2 w-[90%] justify-center">
              <label className="form-control w-full flex flex-col gap-1">
                <div className="label">
                  <span className="label-text text-sm">
                    Нууц үг сэргээх код{" "}
                  </span>
                </div>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="****"
                  className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
            >
              Үргэлжлүүлэх
            </button>
          </form>
        </main>
      )}
      {step === 3 && (
        <main className="w-full flex justify-center px-[150px]  py-[168px]">
          <form
            onSubmit={handleSubmit}
            className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
          >
            <h5 className="text-3xl font-bold">Шинэ нууц үг зохиох </h5>
            <div className="flex flex-col gap-2 w-[90%] justify-center">
              <label className="form-control w-full flex flex-col gap-1">
                <div className="label">
                  <span className="label-text text-sm">Нууц үг </span>
                </div>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder=""
                  className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
                />
              </label>
              <label className="form-control w-full flex flex-col gap-1">
                <div className="label">
                  <span className="label-text text-sm">Нууц үг давтах </span>
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder=""
                  className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
                />
              </label>
            </div>
            <a
              type="submit"
              className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
            >
              Үргэлжлүүлэх
            </a>
          </form>
        </main>
      )}
      <Footer />
    </>
  );
}
