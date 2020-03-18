import React from 'react'
import './footer.css';
function Footer() {
    return (
        <div>
            <div class="footer" >
            <div class=" footer-wrapper">
                <div class="row">
                    <div class="col-lg-11">
                        <div class="footer-list">
                            <ul>
                                <li><a href="" class="footer_links">Home</a></li>
                                <div class="line">|</div>
                                <li><a href="" class="footer_links">Services</a></li>
                                <div class="line">|</div>
                                <li><a href="" class="footer_links">Portfolio</a></li>
                                <div class="line">|</div>
                                <li><a href="" class="footer_links">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-1 mt-2">
                        <div class="footer-yr"> <span>2020@</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Footer;
