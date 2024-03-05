import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccountIcon } from "@/components/icon/AccountIcon";
import { EditIcon } from "@/components/icon/EditIcon";
import { ProEditIcon } from "@/components/icon/ProEditIcon";
import { PhoneIcon } from "@/components/icon/PhoneIcon";
import { MailIcon } from "../components/icon/MailIcon";
import { TimeIcon } from "../components/icon/TimeIcon";
import { OutIcon } from "@/components/icon/OutIcon";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const pro = [
  { category: "Таны нэр", icon: <AccountIcon />, input: "УгтахБаяр" },
  { category: "Утасны дугаар", icon: <PhoneIcon />, input: "УгтахБаяр" },
  { category: "Имэйл хаяг", icon: <MailIcon />, input: "УгтахБаяр" },
];

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  const fetchData = async () => {};

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const target = e.target;
    const selectedFile = target?.files as FileList;
    formData.append("image", selectedFile[0]);
    console.log(formData, target);
    console.log(imageUrl);

    try {
      const res = await axios.post("http://localhost:8080/upload", formData);
      setImageUrl(res.data.imageUrl);
      alert("Амжилттай хадгаллаа");
    } catch (error) {
      alert("Зураг шинэчлэхэд алдаа гарлаа. Та дахин оролдоно уу");
    }
  };
  return (
    <>
      <Header />
      <main className="w-full flex flex-col gap-8 justify-center px-[150px] items-center py-[168px]">
        <div className=" App relative">
          <img
            className="w-40 rounded-full"
            src={
              imageUrl ||
              "https://i.pinimg.com/474x/ac/0f/41/ac0f419e977af681516e00829c5393ee.jpg"
            }
          />
          <label htmlFor="file" className="absolute bottom-1 right-1">
            <ProEditIcon />
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        <p className="font-bold text-2xl">УгтахБаяр</p>
        <div className="flex flex-col gap-4">
          {pro.map((pro) => (
            <div className="w-[400px] items-center py-2 px-5 rounded-sm flex justify-between bg-[#F6F6F6]">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full relative bg-white">
                  <div className=" absolute top-3.5 left-3.5 ">{pro.icon}</div>
                </div>
                <div>
                  <p className="text-xs text-[#888A99]">{pro.category}</p>
                  <p>{pro.input}</p>
                </div>
              </div>
              <EditIcon />
            </div>
          ))}
          <div className="w-[400px] items-center py-2 px-5 rounded-sm flex justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full relative border border-spacing-1 border-[#EEEFF2]">
                <div className=" absolute top-3.5 left-3.5 ">
                  <TimeIcon />
                </div>
              </div>
              <p className="text-base">Захиалгын түүх</p>
            </div>
          </div>
          <div className="w-[400px] items-center py-2 px-5 rounded-sm flex justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full relative border border-spacing-1 border-[#EEEFF2]">
                <div className=" absolute top-3.5 left-3.5 ">
                  <OutIcon />
                </div>
              </div>
              <p className="text-base">Гарах</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
