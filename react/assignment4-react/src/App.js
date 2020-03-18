import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSliderComponent from './components/heroSliderComponent/heroSliderComponent';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import JustDefualtSection from './components/justdefaultsection/justDefualtSection';
import Twitter from './components/twitter/twitter';
import JohnDoe from './components/johnDoe/johnDoe';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  return (<div>
    <HeroSliderComponent/>
    <Services/>
    <Portfolio/>
    <JustDefualtSection/>
    <Twitter/>
    <JohnDoe/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </div>
    
  );
}

export default App;
