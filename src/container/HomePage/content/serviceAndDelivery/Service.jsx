import React from 'react';
import './Service.css'
import ServiceIcon1 from '../../../../assets/images/ImgBig/icon1..svg'
import ServiceIcon2 from '../../../../assets/images/ImgBig/icon2..svg'
import ServiceIcon3 from '../../../../assets/images/ImgBig/icon3..svg'

function Service(props) {
    return (
        <div className='service-container'>
            <div className="service-item">
                <img src={ServiceIcon1}  />
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="service-item">
                <img src={ServiceIcon2}  />
                <h3>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className="service-item">
                <img src={ServiceIcon3}  />
                <h3>MONEY BACK GUARANTEE</h3>
                <p>We return money within 30 days</p>
            </div>
        </div>
    );
}

export default Service;