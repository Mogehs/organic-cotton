import React from "react";
import HeroSection from "../components/home/HeroSection";
import NewArrivals from "../components/home/NewArrivals";
import TopSelling from "../components/home/TopSelling";
import DressStyle from "../components/home/DressStyle";
import HappyCustomers from "../components/home/HappyCustomers";
import StayUpto from "../components/home/StayUpto";
import BabyCategories from "../components/home/BabyCategories";
import PopularStore from "../components/home/PopularStore.JSX";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopSelling />
      <BabyCategories />
      <NewArrivals />
      {/* <DressStyle /> */}
      <PopularStore />
      <HappyCustomers />
      <StayUpto />
    </div>
  );
};

export default Home;
