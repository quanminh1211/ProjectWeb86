import React from 'react';
import './CountDown.css'

function CountDown() {
    return (
        <div className='countDown-container'>
            <div className="item">
                <h4>23</h4>
                <p>Hours</p>
            </div>
            <div className="item">
                <h4>05</h4>
                <p>Days</p>
            </div>
            <div className="item">
                <h4>59</h4>
                <p>Minutes</p>
            </div>
            <div className="item">
                <h4>35</h4>
                <p>Seconds</p>
            </div>
        </div>
    );
}

export default CountDown;