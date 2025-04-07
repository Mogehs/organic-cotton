import React from "react";
import HeroSection from "../components/home/HeroSection";
import NewArrivals from "../components/home/NewArrivals";
import TopSelling from "../components/home/TopSelling";
import DressStyle from "../components/home/DressStyle";
import HappyCustomers from "../components/home/HappyCustomers";
import StayUpto from "../components/home/StayUpto";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <NewArrivals/>
      <TopSelling/>
      <DressStyle/>
      <HappyCustomers/>
      <StayUpto/>
    </div>
  );
};

export default Home;
