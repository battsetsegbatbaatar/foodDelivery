import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import * as Yup from "yup";
import axios from "axios";

const BASE_URL = "http://localhost:8080/user";

export default function ThirdStepForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      try {
        const password = values.password;
        await axios.post(`${BASE_URL}/update`, {
          password,
        });
        setError("Нууц үг амжилттай шинэчлэгдсэн.");
        router.push("/Profile");
      } catch (error) {
        setError("Нууц үгээ шинэчилж чадсангүй.");
      }
    },
  });
  return (
    <>
      <Header loggedIn={null} />
      <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form
          onSubmit={formik.handleSubmit}
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
                name="newPassword"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            {error && <div className="text-red-500">{error}</div>}
          </div>
          <a
            type="submit"
            className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
          >
            Үргэлжлүүлэх
          </a>
        </form>
      </main>
      <Footer />
    </>
  );
}
