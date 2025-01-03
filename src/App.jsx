
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
      <BestSelling />
      <BigImg />
      <ExploreProduct/>
      <NewArrival/>
      </div>
    </>
  )
}

export default App
