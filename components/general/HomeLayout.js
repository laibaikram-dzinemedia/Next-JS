import React from "react";
import Image from "next/image";

const HomeLayout = ({ title, text, illustration, height, width, children }) => {
  return (
    <div className=" h-screen flex items-center justify-between gap-5">
      <div className="max-w-[450px]">
        <h1 className="mb-5 text-[40px] font-bold">{title}</h1>
        <p className="mb-4 text-gray-500 ">{text}</p>
        {children}
      </div>
      <div>
        <Image
          src={illustration}
          width={width}
          height={height}
          alt="Illustration"
        ></Image>
      </div>
    </div>
  );
};

export default HomeLayout;
