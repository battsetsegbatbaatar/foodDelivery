import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const BASE_URL = "http://localhost:8080";

export default function Home() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("И-мэйл хаяг буруу байна.")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "8 ба түүнээс дээш тэмдэгт байх ёстой !")
        .max(20, "20 тэмдэгт буюу түүнээс бага байх ёстой !")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await axios.post(BASE_URL + "/user/signin", values);
        router.push("/");
        alert("Success enter");
        resetForm();
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
        alert({ message: "Not enter" });
        router.push("/#");
      }
      setSubmitting(false);
    },
  });

  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
        >
          <h5 className="text-3xl font-bold">Нэвтрэх</h5>

          <div className="flex flex-col gap-2 w-[90%] justify-center">
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text">Имэйл </span>
              </div>
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
            <button
              type="submit"
              className="btn py-2 px-4 w-[90%] text-center rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
            >
              Нэвтрэх
            </button>
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
