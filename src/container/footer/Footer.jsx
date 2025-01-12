import './Footer.css'
import React from 'react';
import 'boxicons'
import QR from '../../assets/images/ImgBig/chplay..svg'
import AppleStoreIcon from '../../assets/images/ImgBig/applestore..svg'

function Footer() {
    return (
        <>
        <div className='footer-container'>
            <div className="footer-listGroup">
            <div className="footer-group">
                <h3 className='footer-title'>Exclusive</h3>
                <p className='footer-subscribe'>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="footer-sendEmail" >
                    <input type="text" placeholder='Enter your email' />
                    <box-icon name='send'></box-icon>
                </div>
            </div>
            <div className="footer-group" style={{maxWidth: "175px"}}>
                <h3 className='footer-title'>Support</h3>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="footer-group">
                <h3 className='footer-title'>Account</h3>
                <ul>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="footer-group">
                <h3 className='footer-title'>Quick Link</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-group">
                <h3 className='footer-title'>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div className="footer-download">
                    <img src={QR} alt="" />
                    <div className="footer-storeInternet">
                        <img src={AppleStoreIcon} alt="" />
                        <img src={AppleStoreIcon} alt="" />
                    </div>
                </div>
                <div className="footer-social">
                <box-icon name='facebook-square' type='logo' ></box-icon>
                <box-icon name='instagram-alt' type='logo' ></box-icon>
                <box-icon name='youtube' type='logo' ></box-icon>
                <box-icon name='google-plus-circle' type='logo' ></box-icon>
                </div>

            </div>
            </div>
            <p className='footer-bottom'> @Copyright Rimel 2022. All right reserved.</p>
        </div>
        </>
    );
}

export default Footer;