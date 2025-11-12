import React from "react";
import FeatureList from "./FeatureList";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <div className="flex items-center justify-center gap-10 my-10 h-screen bg-[#f8f9fa]">
      <Image
        src="/dashboard.jpg"
        alt="Feature image"
        width={615}
        height={400}
        className="mb-5"
      ></Image>
      <FeatureList />
    </div>
  );
};

export default FeatureSection;
