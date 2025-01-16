
import './App.css'
import React from 'react';
import Header from './container/header/header.jsx';
import Footer from './container/footer/Footer.jsx';
import HomePage from './container/HomePage/HomePage.jsx';
import Auth from './container/Auth/Auth.jsx';
import AboutPage from './container/AboutPage/AboutPage.jsx';

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <Auth />  
      <AboutPage />
      <Footer/>
    </>
  )
}

export default App
