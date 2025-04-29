import React from "react";
import HeroSection from "../components/home/HeroSection";
import NewArrivals from "../components/home/NewArrivals";
import TopSelling from "../components/home/TopSelling";
import HappyCustomers from "../components/home/HappyCustomers";
import BabyCategories from "../components/home/BabyCategories";
import PopularStore from "../components/home/PopularStore";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopSelling />
      <BabyCategories />
      <NewArrivals />
      <PopularStore />
      <HappyCustomers />
    </div>
  );
};

export default Home;
