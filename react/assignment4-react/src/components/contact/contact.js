import React from 'react'
import './contact.css';
function contact() {
    return (
        <div>
            <div class="contact">
      <div class="contact-wrapper">

        <div class="row">
          <div class="contact-title col-lg-12">
            <h5>CONTACT <div><span class="bottom-line2"></span></div>
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 ">
            
              <div class="form-group">
                <div>
                  <label>FULL NAME</label>
                  <input ype="text" class="form-control contact-form-control"/>
                </div>
                <div>
                  <label>EMAIL</label>
                  <input ype="text" class="form-control contact-form-control"/>
                </div>
              </div>
          </div>

          <div class=" col-lg-6 col-md-6">
            <div class="contact-text">
              <div>
                <p>Bear claw marzipan bear claw applicake. I love muffin. Lemon drops gummi bears pastry gummi bears
                  sesame
                  snaps I love underwear.com. Souffe cotton candy dessert candy ice cream wafer frummies cheesecake
                  brownie.</p>
                
              </div>
              <div>
                <p>
                  linda newman
                  W325 State Road 123
                  Mondovi Wi(Wisconsin)98746-54321
                  (715)946-1234
                </p>
              </div>
            </div>

          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <div> <label for="comment">MESSAGE</label>
                <textarea class="form-control contact-form-control" rows="5" id="comment"></textarea></div>

            </div>


          </div>

        </div>
        <div class="row">
          <div class="col-12">
            <button  class="btn contact-message-btn ">

              MESSAGE

            </button>
            
          </div>
        </div>
        
      </div>
    </div>

        </div>
    )
}

export default contact
