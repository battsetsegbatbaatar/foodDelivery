import React, { useState } from "react";
import { Vector } from "./icon/Vector";
import { AccountIcon } from "./icon/AccountIcon";
import { PineconeLogo } from "./icon/PineconeLogo";
import { SearchIcon } from "./icon/SearchIcon";

export const Header = () => {
  const [cursorPointer, setCursorPointer] = useState(false);

  const handleMouseEnter = () => {
    setCursorPointer(true);
  };

  const handleMouseLeave = () => {
    setCursorPointer(false);
  };

  return (
    <header className="w-full flex items-center justify-between py-2 px-[150px]">
      <div className="flex gap-6">
        <PineconeLogo />
        <div className="flex gap-2 items-center">
          <h5 className="cursor-pointer hover:text-[#18BA51] font-bold text-sm">
            НҮҮР
          </h5>
          <h5 className="cursor-pointer hover:text-[#18BA51] font-bold text-sm">
            ХООЛНЫ ЦЭС
          </h5>
          <h5 className="cursor-pointer hover:text-[#18BA51] font-bold text-sm">
            ХҮРГЭЛТИЙН БҮС
          </h5>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 px-4 py-2 border items-center rounded-lg">
          <SearchIcon />
          <input type="text" placeholder="Search"></input>
        </div>
        <div className="flex gap-2 px-4 py-2 cursor-pointer items-center justify-center hover:text-[#18BA51]">
          <Vector />
          <h5>Сагс</h5>
        </div>
        <div className="flex gap-2 px-4 py-2 cursor-pointe items-center hover:text-[#18BA51]">
          <AccountIcon />
          <h5>Нэвтрэх</h5>
        </div>
      </div>
    </header>
  );
};
