import React from "react";
import BestSelling from "./content/bestSelling/BestSelling.jsx";
import BigImg from "./content/BigImg/BigImg.jsx";
import BrowseByCategory from "./content/BrowseByCategory/BrowseByCategory.jsx";
import NewArrival from "./content/newArrival/NewArrival.jsx";
import Service from "./content/serviceAndDelivery/Service.jsx";
import ExploreProduct from "./content/exploreProduct/ExploreProduct.jsx";
import FlashSale from "./content/flashSale/FlashSale.jsx";
import NavBar from "./navBar/NavBar.jsx";
import SliderImage from "./slider/Slider.jsx";
import './HomePage.css'

function HomePage(props) {
  return (
    <div>
      <div className="content">
        <div className="contentTop">
          <NavBar />
          <SliderImage />
        </div>
        <FlashSale />
        <BrowseByCategory />
        <BestSelling />
        <BigImg />
        <ExploreProduct />
        <NewArrival />
        <Service />
      </div>
    </div>
  );
}

export default HomePage;
