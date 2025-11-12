import React from "react";
import Cards from "./Cards";

const CardLayout = () => {
  return (
    <div className="flex items-center justify-center gap-5 mb-5">
      <Cards
        cardTitle="Grow Your Business"
        cardText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        cardImg="/1.svg"
      />
      <Cards
        cardTitle="Grow Your Business"
        cardText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        cardImg="/2.svg"
      />
      <Cards
        cardTitle="Grow Your Business"
        cardText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        cardImg="/3.svg"
      />
      <Cards
        cardTitle="Grow Your Business"
        cardText="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        cardImg="/4.svg"
      />
    </div>
  );
};

export default CardLayout;
