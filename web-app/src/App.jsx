
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'
import Home from './landingpage/Home.jsx';
import CategoryProd from './landingpage/CategoryProd.jsx';
import ServicesCat from './landingpage/ServicesCat.jsx';
import AboutUs from './landingpage/AboutUs.jsx';
import ContactUs from './landingpage/ContactUs.jsx';
import './App.css'

function App() {


  return (
    <>
    
    <Navbar />
    <Home />
      <CategoryProd />
      <ServicesCat />
       <AboutUs/>
       <ContactUs/>
    <Footer />


    </>
  )
}

export default App
