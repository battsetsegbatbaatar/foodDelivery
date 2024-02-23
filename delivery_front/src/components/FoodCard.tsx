import React from "react";

type Data = {
  foodImg: string;
  foodName: string;
  foodPrice: string;
};

export const FoodCard = ({ foodImg, foodName, foodPrice }, { Data }) => {
  return (
    <div className="flex flex-col gap-4">
      <img className="w-[350px] h-[220px] rounded-md" src={foodImg} alt="" />
      <div className="flex flex-col gap-[2px]">
        <h5 className="fond-bold text-base font-semibold">{foodName}</h5>
        <p className=" text-[#18BA51] text-base font-semibold">{foodPrice}₮</p>
      </div>
    </div>
  );
};
