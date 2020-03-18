import React from 'react'
import './services.css';
import Coffee from '../../images/coffee.png';
import instant from '../../images/instant.png';
import serious from '../../images/serious.png';
import frame from '../../images/frame.png';
function Services() {
    return (
        <div>
            <div class="services">
                <div class=" services-wrapper">
                    <div class="container ">
                        <div class="row">
                            <div class="col-12 ">
                                <h5>SERVICES</h5>
                                <div><span class="bottom-line-services"></span></div>

                            </div>

                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div>
                                    <img src={Coffee}></img>
                                        <h6>COFFEE</h6>
                                        <p>Apple pie icing sweet.Brownie jelly-o applicake
                                          Applicake sweet roll liquorice bear claw.jujubes
                                          carrot cake cotton candy sweet tart brownie.
                                            Tiramisu applicakejujubes</p>
                                 </div>

                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div> <img src={instant}></img>
                                        <h6>INSTANT</h6>
                                        <p> Apple pie icing sweet.Brownie jelly-o applicake
                                          Applicake sweet roll liquorice bear claw.jujubes
                                          carrot cake cotton candy sweet tart brownie.
                    Tiramisu applicakejujubes</p>
                </div>

                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <div>
                                            <img src={serious}></img>
                                                <h6>SERIOUS</h6>
                                                <p>Apple pie icing sweet.Brownie jelly-o applicake
                                                  Applicake sweet roll liquorice bear claw.jujubes
                                                  carrot cake cotton candy sweet tart brownie.
                    Tiramisu applicakejujubes</p>
                </div>


                                        </div>
                                        <div class="col-lg-3 col-md-6">
                                            <div></div><img src={frame}></img>
                                                <h6>FRAME</h6>

                                                <p>Apple pie icing sweet.Brownie jelly-o applicake
                                                  Applicake sweet roll liquorice bear claw.jujubes
                                                  carrot cake cotton candy sweet tart brownie.
                  Tiramisu applicakejujubes</p>
              </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    
                    )
                }
                
                export default Services;
