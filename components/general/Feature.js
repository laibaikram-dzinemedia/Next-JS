import React from "react";
import Image from "next/image";

const Feature = ({ featureImg, featureTitle, featureText }) => {
  return (
    <div className="flex  items-start gap-3 ">
      <Image
        src={featureImg}
        alt="Feature image"
        width={40}
        height={40}
        className="mb-3"
      ></Image>

      <div>
        <h3 className="text-lg font-medium mb-2">{featureTitle}</h3>
        <h3 className="text-grey-400 ">{featureText}</h3>
      </div>
    </div>
  );
};

export default Feature;
