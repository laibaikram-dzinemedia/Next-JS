import React from "react";
import Feature from "./Feature";

const FeatureList = () => {
  return (
    <div className="flex flex-col gap-5 items-center max-w-[445px]">
      <Feature
        featureImg="/1.svg"
        featureTitle="Grow Your Business"
        featureText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,"
      />
      <Feature
        featureImg="/2.svg"
        featureTitle="Grow Your Business"
        featureText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,"
      />
      <Feature
        featureImg="/3.svg"
        featureTitle="Grow Your Business"
        featureText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,"
      />
      <Feature
        featureImg="/4.svg"
        featureTitle="Grow Your Business"
        featureText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,"
      />
    </div>
  );
};

export default FeatureList;
