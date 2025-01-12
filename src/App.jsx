
import './App.css'
import React from 'react';
import Header from './container/header/header.jsx';
import NavBar from './container/navBar/NavBar.jsx';
import SliderImage from './container/slider/Slider.jsx';
import FlashSale from './container/content/FlashSale/FlashSale.jsx';
import BestSelling from './container/content/bestSelling/bestSelling.jsx';
import BigImg from './container/content/BigImg/BigImg.jsx';
import ExploreProduct from './container/content/exploreProduct/ExploreProduct.jsx';
import NewArrival from './container/content/newArrival/NewArrival.jsx';
import BrowseByCategory from './container/content/BrowseByCategory/BrowseByCategory.jsx';
import Service from './container/content/serviceAndDelivery/Service.jsx';
import Footer from './container/footer/Footer.jsx';

function App() {

  return (
    <>
      <Header />
      <div className="content">
      <div className='contentTop'>
      <NavBar />
      <SliderImage />
      </div>
      <FlashSale />
      <BrowseByCategory/>
      <BestSelling />
      <BigImg />
      <ExploreProduct/>
      <NewArrival/>
      <Service />
      </div>
      <Footer/>
    </>
  )
}

export default App
