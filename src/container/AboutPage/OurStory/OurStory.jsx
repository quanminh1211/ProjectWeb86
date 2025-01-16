import React from 'react';
import './OurStory.css'
import OurStoryImg from '../../../assets/images/ImgBig/aboutImg..svg'

function OurStory(props) {
    return (
        <div className='ourStory-container'>
            <div className="ourStory-introduce">
                <h1>Our Story</h1>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className="ourStory-image">
                <img src={OurStoryImg} alt="" />
            </div>
        </div>
    );
}

export default OurStory;