import React from 'react'
import './portfolio.css';
import portfolio1 from '../../images/portfolio1.png';
import portfolio2 from '../../images/portfolio2.png';
import portfolio3 from '../../images/portfolio3.png';
import portfolio4 from '../../images/portfolio4.png';
import portfolio5 from '../../images/portfolio5.png';
import portfolio6 from '../../images/portfolio6.png';
import portfolio7 from '../../images/portfolio7.png';
import portfolio8 from '../../images/portfolio8.png';
function Portfolio() {
    return (
        <div>
            <div class="portfolio">
    <div class="portfolio-wrapper ">
      <div class="container">
        <div class="portfolio-head ">
          <div>
            <h5 style={{color:'rgb(146, 146, 146)'}}>PORTFOLIO <div><span class="bottom-line"></span></div>
            </h5>

          </div>
          <div class="portfolio-list">
            <ul>
              <li> <a href="">ALL</a></li>
              <li><a href="">PANAROMA</a></li>
              <li><a href="">POTRAITS</a></li>
              <li><a href="">MACRO</a></li>
              <li><a href="">JOURNAL</a></li>
            </ul>
          </div>
        </div>


        <div class="portfolio-grid container">
          <div class="row">
            <div class="col-lg-3 col-md-6 ">
              
              <div class="portfolio-grid-item  ">
                <img class="img-fluid" src= {portfolio1}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="portfolio-grid-item">
                <img class="img-fluid" src={portfolio2}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="portfolio-grid-item">
                <img class="img-fluid" src={portfolio3}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="portfolio-grid-item">
                <img class="img-fluid" src={portfolio4}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="portfolio-grid-item">
                <img class="img-fluid" src={portfolio5}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="portfolio-grid-item">
                <img class="img-fluid" src={portfolio6}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="portfolio-grid-item">
                <img class="img-fluid" src={portfolio7}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="portfolio-grid-item">
                <img class="img-fluid" src={portfolio8}></img>
                <div class="portfolio-img-hover">
                  <div class="sign"><i  class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  </div>
        
    )
}

export default Portfolio;
