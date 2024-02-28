import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon } from "@/components/icon/CheckIcon";

const BASE_URL = "http://localhost:8080";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      repassword: "",
      phoneNumber: "",
    });
  };

  const createUser = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      if (formData.password !== formData.repassword) {
        setError("Passwords do not match");
        return;
      }
      const response = await axios.post(BASE_URL + "/signup", formData);
      setVisible(true);
      clearForm();
      router.push("/SignIn");
      console.log(response.data);
    } catch (error) {
      setError("Failed to create user");
      console.error("Error:", error);
    }
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Header />
      {visible === true && (
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
          onSubmit={createUser}
          className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
        >
          <h5 className="text-3xl font-bold">Бүртгүүлэх</h5>
          <div className="flex flex-col gap-2 w-[90%] justify-center">
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Нэр </span>
              </div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Нэрээ оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">И-мэйл </span>
              </div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                placeholder="Имэйл хаягаа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Утасны дугаар</span>
              </div>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                type="text"
                placeholder="Та утасны дугаараа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-sm">Нууц үг</span>
              </div>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
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
                name="repassword"
                value={formData.repassword}
                onChange={handleChange}
                type="password"
                placeholder="Нууц үг"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-start gap-2 ">
            <input type="checkbox" className="checkbox" />
            <a href="" className="text-sm cursor-pointer hover:underline">
              Үйлчилгээний нөхцөл зөвшөөрөх
            </a>
          </div>
          <a
            onClick={handleClick}
            type="submit"
            className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
          >
            Бүртгүүлэх
          </a>
        </form>
      </main>
      <Footer />
    </>
  );
}
