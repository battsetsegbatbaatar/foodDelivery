import { FormEvent, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import SecondStepForm from "./SecondStepForm";

const BASE_URL = "http://localhost:8080/user";

export default function Home() {
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        const email = formik.values.email;
        await axios.post(`${BASE_URL}/forgetpass`, {
          email,
        });
        setStep(2);
      } catch (error) {
        setError("Баталгаажуулах кодыг илгээж чадсангүй.");
      }
    },
  });

  return (
    <>
      <Header loggedIn={null} />
      {step === 1 && (
        <main className="w-full flex justify-center px-[150px]  py-[168px]">
          <form
            onSubmit={formik.handleSubmit}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  placeholder="Имэйл хаягаа оруулна уу"
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
      )}
      {step === 2 && <SecondStepForm email={formik.values.email} />}
      <Footer />
    </>
  );
}
