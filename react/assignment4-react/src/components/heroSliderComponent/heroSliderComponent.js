import React from 'react'
import './heroSliderComponent.css'
function HeroSliderComponent() {
    return (
        <div>
           
      <div className="heroslider ">
        <div className="hero-slider-nav1">
          <div className="container ">
            <nav className="navbar navbar-expand-lg  ">
              <a  className="navbar-brand text-light" href="#">BLU<span className="blueasy"
                 >E</span>ASY</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
              </button>

              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                  <li className="nav-item ">
                    <a className="nav-link text-light" href="#">HOME
                      <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link text-light" href="#">SERVICES</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a  className="nav-link text-light" href="#" id="navbarDropdown" role="button"
                      aria-haspopup="true" aria-expanded="false">
                      FEUTURES
                    </a>

                  </li>
                  <li className="nav-item">
                    <a  className="nav-link text-light" href="#">PORTFOLIO</a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link text-light" href="#">CONTACT</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          </div>
          <div className="hero-slider-title">
            <div>
              <h4><span className="hero-slider-title-head ">" I'AM LOOKING FOR THE UNEXPECTD.</span></h4>

            </div>
            <div>
              <h4> <span className="hero-slider-title-head">AM LOOKING FOR THE THINGS I'VE NEVER SEEN BEFORE."</span> </h4>
            </div>
          </div>

        

    
        </div>
        </div>
    )
}

export default HeroSliderComponent
