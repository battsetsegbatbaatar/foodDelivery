import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [visible, setVisible] = useState(1);
  const [mail, setMail] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    verificationCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (visible === 1) {
    } else if (visible === 2) {
    } else if (visible === 3) {
    }
    // Move to the next step
    setVisible((prevVisible) => prevVisible + 1);
  };

  return (
    <>
      <Header />
      {visible === 3 && (
         <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form onSubmit={handleSubmit} className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12">
          <h5 className="text-3xl font-bold">Шинэ нууц үг зохиох </h5>
          <div className="flex flex-col gap-2 w-[90%] justify-center">
            
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Нууц үг  </span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Нууц үг давтах </span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
          </div>
          <a href="./SignIn"
            className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]"
          >
            Үргэлжлүүлэх
          </a>
        </form>
        </main>
      )}
      {visible === 2 && (
         <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form onSubmit={handleSubmit} className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12">
          <h5 className="text-3xl font-bold">Нууц үг сэргээх</h5>
          <div className="flex text-sm justify-start text-[#695C08]">
              <span>Таны </span>&nbsp;              
              <p className="text-[#18BA51]">{mail}</p>&nbsp; 
              <span> хаяг руу сэргээх код илгээх болно.</span>
            </div>
          <div className="flex flex-col gap-2 w-[90%] justify-center">
            
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Нууц үг сэргээх код </span>
              </div>
              <input
                type="text"
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
      {visible === 1 && (
        <main className="w-full flex justify-center px-[150px]  py-[168px]">
          <form onSubmit={handleSubmit}
            className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12"
          >
            <h5 className="text-3xl font-bold">Нууц үг сэргээх</h5>
            <div className="flex flex-col gap-2 w-[90%] justify-center">
              <label className="form-control w-full flex flex-col gap-1">
                <div className="label">
                  <span className="label-text text-sm">Имэйл </span>
                </div>
                <input
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  type="text"
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
      <Footer />
    </>
  );
}
