import React, { useState } from "react";

type FoodCardProps = {
  foodImg: string;
  foodName: string;
  foodPrice: string;
};

export const FoodCard: React.FC<FoodCardProps> = ({
  foodImg,
  foodName,
  foodPrice,
}) => {
  const createModal = () => {
    const dialog = document.getElementById("open");
    if (dialog) {
      (dialog as HTMLDialogElement).showModal();
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <img
        onClick={createModal}
        className="w-[350px] h-[220px] rounded-md cursor-pointer"
        src={foodImg}
        alt=""
      />
      <div className="flex flex-col gap-[2px]">
        <h5 className="font-bold text-base">{foodName}</h5>
        <p className="text-[#18BA51] text-base font-semibold">{foodPrice}₮</p>
      </div>
    </div>
  );
};

export const Dialog = () => {
  return (
    <dialog id="open" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};
