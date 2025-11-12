import CardLayout from "@/components/general/CardLayout";
import FeatureList from "@/components/general/FeatureList";
import FeatureSection from "@/components/general/FeatureSection";
import HomeLayout from "@/components/general/HomeLayout";
import Navbar from "@/components/general/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5">
      <HomeLayout
        title="Promote Your Products by Colorlib"
        text="Another cool free html css template by Colorlib Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
        illustration="/home-illustration.svg"
        width="634"
        height="423"
      >
        <div className="flex items-center gap-5">
          <button className="rounded-3xl px-5 py-4 bg-blue-500 text-white max-w-[120px]">
            See feature
          </button>
          <button className="rounded-3xl px-5 py-4 border border-[blue]  text-[blue] max-w-[120px]">
            Pricing
          </button>
        </div>
      </HomeLayout>

      <HomeLayout
        title="Promote Your Products by Colorlib"
        text="Another cool free html css template by Colorlib Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
        illustration="/dashboard.jpg"
        width="634"
        height="488"
      />

      <CardLayout />

      <FeatureSection />
    </div>
  );
};

export default Home;
