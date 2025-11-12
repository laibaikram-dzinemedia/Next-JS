import React from "react";
import Image from "next/image";

const Cards = ({ cardImg, cardTitle, cardText }) => {
  return (
    <div className="  ">
      <Image
        src={cardImg}
        alt="card image"
        width={40}
        height={40}
        className="mb-5"
      ></Image>
      <h2 className="text-lg font-medium mb-3"> {cardTitle}</h2>
      <p className="text-sm text-gray-400 ">{cardText}</p>
    </div>
  );
};

export default Cards;
