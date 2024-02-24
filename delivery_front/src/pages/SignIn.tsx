import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e:any) => {
    e.preventDefault();

    if (email === "bg@gmail.com" && password === "1234") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("И-мэйл эсвэл нууц үгээ оруулна уу");
    }
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      
      <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form onSubmit={handleSignIn} className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12">
          <h5 className="text-3xl font-bold">Нэвтрэх</h5>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col gap-2 w-[90%] justify-center">
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text">Имэйл </span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Имэйл хаягаа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Нууц үг</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Нууц үг"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
              <div className="label flex justify-end">
                <a href="./ForgotPass" className="label-text-alt">Нууц үг сэргээх</a>
              </div>
            </label>
          </div>
          <div className="flex flex-col w-[340px] items-center justify-center gap-[32px]">
            <a href="./" type="submit" className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]">
              Нэвтрэх
            </a>
            <p>Эсвэл</p>
            <a href="./SignUp" className="btn w-[90%] align-center py-2 px-4  rounded border border-[#18BA51] focus:bg-[#EEEFF2]">
              Бүртгүүлэх
            </a>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
