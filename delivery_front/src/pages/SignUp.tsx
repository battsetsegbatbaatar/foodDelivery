import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sign } from "crypto";

const BASE_URL = "http://localhost:8080";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      phoneNumber: "",
      termsAgreed: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "20 тэмдэгтээс бага тэмдэгт оруулана уу !")
        .required("Required"),
      email: Yup.string()
        .email("И-мэйл хаяг буруу байна.")
        .required("Required"),
      phoneNumber: Yup.number()
        .min(60000000, "Утасны дугаар буруу байна.")
        .max(99999999, "Утасны дугаар буруу байна."),
      password: Yup.string()
        .required("Required")
        .min(8, "8 ба түүнээс дээш тэмдэгт байх ёстой !")
        .max(20, "20 тэмдэгт буюу түүнээс бага байх ёстой !")
        .required("Required"),

      repassword: Yup.string()
        .oneOf([Yup.ref("password")], "Нууц үг таарахгүй байна.")
        .required("Required"),
      termsAgreed: Yup.boolean()
        .oneOf([true], "Үйлчилгээний нөхцөл зөвшөөрөнө үү")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setError("");
      try {
        const response = await axios.post(BASE_URL + "/user/signUp", values);
        setVisible(true);
        resetForm();
        router.push("/SignIn");
        console.log(response.data);
      } catch (error) {
        setError("Failed to create user");
        console.error("Error:", error);
      }
    },
  });

  return (
    <>
      <Header />
      {visible && (
        <div className="flex justify-end pt-12 iteams-center">
          <div
            role="alert"
            className="alert alert-success w-[240px] p-2 border border-[#18BA51] rounded-2xl flex items-center gap-2"
          >
            <CheckIcon />
            <span>Амжилттай бүртгэгдлээ.</span>
          </div>
        </div>
      )}
      <main className="w-full grid justify-center px-[150px]  py-[168px]">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
        >
          <h5 className="text-3xl font-bold">Бүртгүүлэх</h5>
          <div className="flex flex-col gap-2 w-[90%] justify-center">
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Нэр </span>
              </div>
              <input
                {...formik.getFieldProps("name")}
                name="name"
                type="text"
                placeholder="Нэрээ оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">И-мэйл </span>
              </div>
              <input
                {...formik.getFieldProps("email")}
                name="email"
                type="text"
                placeholder="Имэйл хаягаа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Утасны дугаар</span>
              </div>
              <input
                {...formik.getFieldProps("phoneNumber")}
                name="phoneNumber"
                type="text"
                placeholder="Та утасны дугаараа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-sm">Нууц үг</span>
              </div>
              <input
                {...formik.getFieldProps("password")}
                name="password"
                type="password"
                placeholder="Нууц үг"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-sm">Нууц үг давтах</span>
              </div>
              <input
                {...formik.getFieldProps("repassword")}
                name="repassword"
                type="password"
                placeholder="Нууц үг"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-500">{formik.errors.name}</p>
          )}
          <div className="flex gap-2 ">
            <input
              type="checkbox"
              {...formik.getFieldProps("termsAgreed")}
              className="checkbox"
            />
            <span className="text-sm items-start">
              Үйлчилгээний нөхцөл зөвшөөрөх
            </span>
          </div>
          {formik.errors.termsAgreed && formik.touched.termsAgreed && (
            <p className="text-red-500">{formik.errors.termsAgreed}</p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="btn py-2 px-4 w-[90%] justify-center text-center rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
          >
            Бүртгүүлэх
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
