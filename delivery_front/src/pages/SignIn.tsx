import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center px-[150px]  py-[168px]">
        <form className="w-[400px] flex flex-col justify-center items-center p-[32px] gap-12">
          <h5 className="text-3xl font-bold">Нэвтрэх</h5>
          <div className="flex flex-col gap-2 w-[90%] justify-center">
            <label className="form-control w-full flex flex-col gap-1">
              <div className="label">
                <span className="label-text">Имэйл </span>
              </div>
              <input
                type="text"
                placeholder="Имэйл хаягаа оруулна уу"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Нууц үг</span>
              </div>
              <input
                type="text"
                placeholder="Нууц үг"
                className="input input-bordered w-full border py-2 px-4 rounded bg-[#F7F7F8]"
              />
              <div className="label flex justify-content-end">
                <span className="label-text-alt">Нууц үг сэргээх</span>
              </div>
            </label>
          </div>
          <div className="flex flex-col w-[340px] items-center justify-center gap-[32px]">
            <button className="btn py-2 px-4 w-[90%] justify-center  rounded text-white bg-[#18BA51] focus:bg-[#EEEFF2]">
              Нэвтрэх
            </button>
            <p>Эсвэл</p>
            <button className="btn w-[90%] justify-center py-2 px-4  rounded border border-[#18BA51] focus:bg-[#EEEFF2]">
              Бүртгүүлэх
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
