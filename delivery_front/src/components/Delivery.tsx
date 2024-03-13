import React from "react";

type DeliveryProps = {
  url: string | undefined;
  service: string;
  description: string;
};

export const Delivery: React.FC<DeliveryProps> = ({
  url,
  service,
  description,
}) => {
  return (
    <div className="card bg-base-100 shadow-2xl p-5 rounded-2xl hover:focus">
      <div className="card-body">
        <img className="p-4" src={url} alt="" />
        <div className="flex pt-4 flex-col gap-2">
          <h1 className=" font-bold">{service}</h1>
          <p className="text-sm text-[#272727]">{description}</p>
        </div>
      </div>
    </div>
  );
};
