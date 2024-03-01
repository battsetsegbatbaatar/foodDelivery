import React, { useState } from "react";
import { Vector } from "./icon/Vector";
import { AccountIcon } from "./icon/AccountIcon";
import { PineconeLogo } from "./icon/PineconeLogo";
import { SearchIcon } from "./icon/SearchIcon";

export const Header = ({ loggedIn }: { loggedIn: boolean }) => {
  return (
    <header className="w-full flex items-center justify-between py-2 px-[150px]">
      <div className="flex gap-6">
        <a href="#">
          <PineconeLogo />
        </a>
        <div className="flex gap-2 items-center">
          <a
            href="./"
            className="cursor-pointer hover:text-[#18BA51] font-bold text-sm"
          >
            НҮҮР
          </a>
          <a
            href="./Menu"
            className="cursor-pointer hover:text-[#18BA51] font-bold text-sm"
          >
            ХООЛНЫ ЦЭС
          </a>
          <a
            href="./Gap"
            className="cursor-pointer hover:text-[#18BA51] font-bold text-sm"
          >
            ХҮРГЭЛТИЙН БҮС
          </a>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 px-4 py-2 border items-center rounded-lg">
          <SearchIcon />
          <input type="text" placeholder="Search"></input>
        </div>
        {loggedIn ? (
          <>
            <div className="flex gap-2 px-4 py-2 cursor-pointer items-center justify-center hover:text-[#18BA51]">
              <Vector />
              <h5>Сагс</h5>
            </div>
            <div className="flex gap-2 px-4 py-2 cursor-pointe items-center hover:text-[#18BA51]">
              <AccountIcon />
              <a href="/Profile">Хэрэглэгч</a>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-2 px-4 py-2 cursor-pointer items-center justify-center hover:text-[#18BA51]">
              <Vector />
              <h5>Сагс</h5>
            </div>
            <div className="flex gap-2 px-4 py-2 cursor-pointe items-center hover:text-[#18BA51]">
              <AccountIcon />
              <a href="/SignIn">Нэвтрэх</a>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
