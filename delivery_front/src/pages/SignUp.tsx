import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { useState } from "react";

export default function Home() {
    const [visible, setVisible]=useState(false)
    const handleClick = () => {
        setVisible(!visible)
        console.log("Alert clicked!");
      };
  return (
    <>
      <Header />
      {visible===true &&<div className="flex justify-end pt-12 iteams-center"><div role="alert" className="alert alert-success w-[240px] p-2 border border-[#18BA51] rounded-2xl flex items-center gap-2">
  <CheckIcon />
  <span >Амжилттай бүртгэгдлээ.</span>
</div></div>}
      <main className="w-full grid justify-center px-[150px]  py-[168px]">
      
        <form className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12">
        
          <h5 className="text-3xl font-bold">Бүртгүүлэх</h5>
          <div className="flex flex-col gap-2 w-[90%] justify-center">
          <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Нэр </span>
              </div>
              <input
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
                type="text"
                placeholder="Имэйл хаягаа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text text-sm">Хаяг </span>
              </div>
              <input
                type="text"
                placeholder="Та хаягаа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-sm">Нууц үг</span>
              </div>
              <input
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
                type="password"
                placeholder="Нууц үг"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
          </div>
          <div className="flex flex-start gap-2 ">
    <input type="checkbox" defaultChecked className="checkbox" />
<a href="" className="text-sm cursor-pointer hover:underline">Үйлчилгээний нөхцөл зөвшөөрөх</a>
          </div>
            <a href="./SignIn" onClick={handleClick} className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]">
            Бүртгүүлэх
            </a>
            
        </form>
      </main>
      <Footer />
    </>
  );
}
