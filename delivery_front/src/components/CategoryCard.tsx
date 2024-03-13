import React from "react";
import { GreenStarIcon } from "./icon/GreenStarIcon";
import { ArrowIcon } from "./icon/ArrowIcon";
import { FoodCard } from "./FoodCard";

const foodData = [
  {
    foodImg: "./food.png",
    foodName: "Breakfast",
    foodPrice: "24,800",
  },
  {
    foodImg: "./food.png",
    foodName: "Өглөөний хоол",
    foodPrice: "24,800",
  },
  {
    foodImg: "./food.png",
    foodName: "Зайрмаг",
    foodPrice: "4,800",
  },
  {
    foodImg: "./food.png",
    foodName: "Өглөөний хоол",
    foodPrice: "14,800",
  },
];
type nameProp = { name: string };
export const CategoryCard: React.FC<nameProp> = ({ name }) => {
  return (
    <div className="flex flex-col gap-6 px-[150px]">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <GreenStarIcon />
          <h5 className="font-bold text-2xl leading-8">{name}</h5>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[#18BA51] text-sm">Бүгдийг харах</p>
          <ArrowIcon />
        </div>
      </div>
      <div className="flex justify-between pb-[80px]">
        {foodData.map((foodCard) => (
          <FoodCard
            foodImg={foodCard.foodImg}
            foodName={foodCard.foodName}
            foodPrice={foodCard.foodPrice}
          />
        ))}
      </div>
    </div>
  );
};
