
import './App.css'
import React from 'react';
import Header from './container/header/header.jsx';
import NavBar from './container/navBar/NavBar.jsx';
import SliderImage from './container/slider/Slider.jsx';
import FlashSale from './container/FlashSale/FlashSale.jsx';

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
      </div>
    </>
  )
}

export default App
