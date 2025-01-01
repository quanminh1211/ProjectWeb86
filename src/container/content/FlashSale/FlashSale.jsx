import React from "react";
import ProductList from "../productList/ProductList.jsx";
import ViewAll from "../../../components/ViewAll.jsx";
import CountDownTimer from "../../../components/CountDownTimer.jsx";
import './FlashSale.css'

const FlashSale = () => {

  return (
    <>
    <div className="timer-container">
    <div className="countdown-timer">
        <h3>Today's</h3>
        <div className="countdown-body">
          <h1>Flash Sales</h1>
    <CountDownTimer />
        </div>
      </div>
    </div>
    <ProductList/>
    <ViewAll style={{
      marginLeft: '40%',
    }} title="View All Product"/>
    </>
  );
};

export default FlashSale;
