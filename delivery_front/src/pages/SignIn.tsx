import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  console.log(formData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const SignIn = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post(BASE_URL + "/user/signin", formData);

      router.push("/");
      clearForm();
      alert("Success enter");
    } catch (error) {
      console.log(error);
      alert({ message: "Not enter" });
      router.push("/#");
      setError("И-мэйл эсвэл нууц үгээ оруулна уу");
    }
  };

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form
          onSubmit={handleChange}
          className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
        >
          <h5 className="text-3xl font-bold">Нэвтрэх</h5>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col gap-2 w-[90%] justify-center">
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text">Имэйл </span>
              </div>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Нууц үг"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
              <div className="label flex justify-end">
                <a href="./ForgotPass" className="label-text-alt">
                  Нууц үг сэргээх
                </a>
              </div>
            </label>
          </div>
          <div className="flex flex-col w-[340px] items-center justify-center gap-[32px]">
            <a
              onClick={SignIn}
              type="submit"
              className="btn py-2 px-4 w-[90%] text-center rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
            >
              Нэвтрэх
            </a>
            <p>Эсвэл</p>
            <a
              href="/SignUp"
              className="btn w-[90%] align-center py-2 px-4 text-center  rounded border border-[#18BA51] focus:bg-[#EEEFF2]"
            >
              Бүртгүүлэх
            </a>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
