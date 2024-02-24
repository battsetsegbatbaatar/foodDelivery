import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Delivery } from "@/components/Delivery";
import { Footer } from "@/components/Footer";
import { FoodCard } from "@/components/FoodCard";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


const foodData = [
    {
      foodImg: "./food.png",
      foodName: "Breakfast",
      foodPrice: "24,800",
      category:"Breakfast",
    },
    {
      foodImg: "./food.png",
      foodName: "Өглөөний хоол",
      foodPrice: "24,800",
      category:"Breakfast",
    },
    {
      foodImg: "./food.png",
      foodName: "Зайрмаг",
      foodPrice: "4,800",
      category:"Breakfast",
    },
    {
      foodImg: "./food.png",
      foodName: "Өглөөний хоол",
      foodPrice: "14,800",
      category:"Breakfast",
    },
  ];

export default function Home() {
    const [choose,setChoose]=useState("Breakfast")
    
    const handleCategoryChange = (category:string) => {
        setChoose(category);
      };
  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 px-[150px] py-[100px]">
        <div className="flex gap-6">
        <button  onClick={() => handleCategoryChange("Breakfast")}
            className={`btn py-2 px-4 w-[90%] justify-center border rounded ${
              choose === "Breakfast" ? "bg-[#18BA51] text-white" : "bg-none text-black"
            }`}>
        Breakfast</button>
            <button onClick={() => handleCategoryChange("Soup")}
            className={`btn py-2 px-4 w-[90%] justify-center border rounded ${
              choose === "Soup" ? "bg-[#18BA51] text-white" : "bg-none text-black"
            }`}>
            Soup
            </button>
            <button onClick={() => handleCategoryChange("Main Course")}
            className={`btn py-2 px-4 w-[90%] justify-center border rounded ${
              choose === "Main Course" ? "bg-[#18BA51] text-white" : "bg-none text-black"
            }`}>
            Main Course
            </button>
            <button onClick={() => handleCategoryChange("Dessert")}
            className={`btn py-2 px-4 w-[90%] justify-center border rounded ${
              choose === "Dessert" ? "bg-[#18BA51] text-white" : "bg-none text-black"
            }`}>
            Dessert
            </button>
        </div>
      <div className="flex justify-between pb-[80px]">
      {foodData.filter((foodCard) => foodCard.category === choose).map((foodCard) => (
              <FoodCard
                foodImg={foodCard.foodImg}
                foodName={foodCard.foodName}
                foodPrice={foodCard.foodPrice}
              />
            ))}
      </div>
      </main>
      <Footer />
    </>
  );
}
