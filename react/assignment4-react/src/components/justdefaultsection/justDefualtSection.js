import React from 'react'
import './justDefaultSection.css';
import footervideo from '../../images/footer_video.png'; 

function JustDefualtSection() {
    return (
        <div>
            <div class="just-default-section">
      <div class="just-default-section-wrapper">

        <div class="row">
          <div class="col-lg-6">
            <div>
              <h5>JUST DEFAULT SECTION <div><span class="bottom-line2"></span></div>
              </h5>

              <div>
                <p>Bear claw marzipan bear claw applicake. I love muffin. Lemon drops gummi bears pastry gummi bears
                  sesame
                  snaps I love underwear.com. Souffe cotton candy dessert candy ice cream wafer frummies cheesecake
                  brownie.
                </p>
                <p>Mukin chupa chups jelly beans sweet pie applicake. Crossiant chocolate cake I love pudding .icecream
                  I
                  love powder pudding apple pie marshmallow. Cupcake marzipan oat cake bonbon I love candy canes toffee
                </p>
              </div>
            </div>
            <div>
              <button class=" btn-outline-dark just-default-section-btn">VISIT ME</button>
            </div>


          </div>
          <div class="col-lg-6">
            <div class="just-default-section-video">
              <img class="" src={footervideo}/></div>

          </div>
        </div>
      </div>

    </div>

        </div>
    )
}

export default JustDefualtSection;
