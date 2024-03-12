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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <img
        onClick={toggleDialog}
        className="w-[350px] h-[220px] rounded-md cursor-pointer"
        src={foodImg}
        alt=""
      />
      <div className="flex flex-col gap-[2px]">
        <h5 className="font-bold text-base font-semibold">{foodName}</h5>
        <p className="text-[#18BA51] text-base font-semibold">{foodPrice}₮</p>
      </div>
      {isDialogOpen && <Dialog onClose={toggleDialog} />}
    </div>
  );
};

type DialogProps = {
  onClose: () => void;
};

export const Dialog: React.FC<DialogProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <dialog className="modal modal-overlay">
      <div className="modal-box">
        <form method="dialog">
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};
