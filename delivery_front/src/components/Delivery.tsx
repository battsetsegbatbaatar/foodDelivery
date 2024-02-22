import React from "react";

export const Delivery = (svg: string, service: string, description: string) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {svg}
        <h1>{service}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
