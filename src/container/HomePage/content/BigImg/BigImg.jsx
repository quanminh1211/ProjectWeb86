import React from 'react';
import BigImg1 from '../../../../assets/images/ImgBig/big1..svg'
import './BigImg.css'
import CountDown from '../../../../components/CountDown.jsx';

function BigImg() {
    return (
        <div className='bigImg-container'>
            <div className="bigImg-left">
                <h4>Categories</h4>
                <h1>Enhance Your Music Experience</h1>
                <CountDown />
                <button>Buy Now !</button>
            </div>
            <div className="bigImg-right">
                <img src={BigImg1} alt="" />
            </div>
        </div>
    );
}

export default BigImg;