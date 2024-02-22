import React from "react";
import { PineLiLogo } from "./icon/PineLiLogo";
import { FacebookLogo } from "./icon/FacebookLogo";
import { InstagramLogo } from "./icon/InstagramLogo";
import { TwitterLogo } from "./icon/TwitterLogo";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#18BA51] bg-[url-('/Bg.png')]">
      <div className="px-[120px] py-[114px] flex flex-col gap-10">
        <div className="flex items-center justify-center gap-2">
          <PineLiLogo />
          <h1 className="font-bold text-white text-xl leading-8">
            Food Delivery
          </h1>
        </div>
        <div className="flex w-[100%] justify-between items-center text-white">
          <a className="no-underline hover:underline">Нүүр</a>
          <a className="no-underline hover:underline">Холбоо барих</a>
          <a className="no-underline hover:underline">Хоолны цэс</a>
          <a className="no-underline hover:underline">Үйлчилгээний нөхцөл</a>
          <a className="no-underline hover:underline">Хүргэлтийн бүс</a>
          <a className="no-underline hover:underline">Нууцлалын бодлого</a>
        </div>
        <div className="flex justify-center items-center gap-5 p-2">
          <FacebookLogo />
          <InstagramLogo />
          <TwitterLogo />
        </div>
        <hr></hr>
        <div className="flex flex-col gap-2">
          <p className="flex justify-center text-white text-sm leading-[19.09px]">
            © 2024 Pinecone Foods LLC{" "}
          </p>
          <p className="flex justify-center text-white text-sm leading-[19.09px]">
            Зохиогчийн эрх хуулиар хамгаалагдсан
          </p>
        </div>
      </div>
    </footer>
  );
};
