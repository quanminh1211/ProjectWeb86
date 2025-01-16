import React from 'react';
import { useState } from 'react';
import './Auth.css'
import ImgAuthScreen from '../../assets/images/ImgBig/signupimg..svg'
import Register from './SignIn/SignIn.jsx'
import SignUp from './SignUp/SignUp.jsx';

function Auth(props) {
    const [isRegister, setIsRegister] = useState(true);
    const toggleForm = () => {
        setIsRegister(!isRegister);
    }
    return (
        <div className='auth-container'>
            <img src={ImgAuthScreen} alt="" />
            {isRegister ? (
                <Register toggleForm={toggleForm} />
            ) : (
                <SignUp toggleForm={toggleForm} />
            )}
        </div>
    );
}

export default Auth;