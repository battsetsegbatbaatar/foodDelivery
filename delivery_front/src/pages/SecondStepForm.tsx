import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as Yup from "yup";

const BASE_URL = "http://localhost:8080/user";

export default function SecondStepForm({ email, step }) {
  const [error, setError] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required("Verification code is required").min(6),
    }),
    onSubmit: async (values) => {
      console.log("first");
      try {
        const code = values.code;
        await axios.post(`${BASE_URL}/verifyCode`, {
          email,
          code,
        });
        router.push("/ThirdStepForm");
      } catch (error) {
        setError("Баталгаажуулах код буруу байна.");
      }
    },
  });
  return (
    <>
      <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
        >
          <h5 className="text-3xl font-bold">Нууц үг сэргээх</h5>
          <div className="text-sm w-[90%] flex justify-self-center text-[#695C08]">
            <span>
              Таны &nbsp;
              <span className="text-[#18BA51]">{email}</span> &nbsp; хаяг руу
              сэргээх код илгээх болно.
            </span>
          </div>

          <div className="flex flex-col gap-2 w-[90%] justify-center">
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Нууц үг сэргээх код </span>
              </div>
              <input
                type="password"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="code"
                placeholder="******"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="submit"
            className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
          >
            Үргэлжлүүлэх
          </button>
        </form>
      </main>
    </>
  );
}
