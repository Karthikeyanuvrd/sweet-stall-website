import React from 'react';
import LOGO from "../assets/img/Hero image.png";
import FOOTER_IMG from "../assets/img/spring-onion.png";
import FOOTER_FINACH from "../assets/img/spinach-leaf.png";
import FOOTER_LEAF from "../assets/img/leaf-branch-4.png";
import QR from "../assets/img/Mithai Darbar QR.jpg";

const logo = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Hero%20image.png?alt=media&token=1abd5360-9acc-45a8-a855-129679292679";
const footer1 = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/spring-onion.png?alt=media&token=d1afaa1b-8aad-406a-99ee-273e72e8a6c1";
const footerFinach = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/spinach-leaf.png?alt=media&token=46335874-2ed6-471c-8de0-598b10f27dac";
const footerLeaf = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-4.png?alt=media&token=518a628e-db23-41be-9fbd-cc020bedb1d1";
const aboutLeaf2 = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-1.png?alt=media&token=ee173dac-2ffd-4d05-98f4-f7bd8de3410f";

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className="footer-container container grid">
            <div>
            <span className="section__subtitle">Contact Us</span>
        <h2 className="section-title">
            We undertake Bulk Order for Any Occasions.
        </h2>
        <span className="section__subtitle">For Orders Call +91 7358596129</span>
            </div>
            <div>
            <img src={logo} alt="Logo" />
            </div>
  
            <div>
                <a href="#home" className="footer-logo">
              
                   Mithai Darbar
                </a>
                <p className="footer-description">
                    Welcomes You all
                </p>
                <p className="orders">Now Offering 24/7 Home Delivery</p>
                <article className='popular-card qr-card' style={{"marginTop": "3rem"}}>
                <img src={QR} alt="QR Code" className="qr-image" />

                <h3 className="popular-name">
                  Mithai Darbar
                </h3>
                <span className="popular-description">
                    WhatsApp business account
                </span>
                <a className="popular-price" href="#footer">
                   Order Here
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>
            </div>

            <div className="footer-content">
                <div>
                    <h3 className="footer-title">
                      Address
                    </h3>

                    <ul className="footer-links">
                        <li>
                           <a href="#" className="footer-link">Plot 2, Door 432, Balaji Nagar, Multi Indus.Estate,</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">Gerugambakkam</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">Chennai</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">600122</a>
                        </li> 
                        <li>
                           <a href="#" className="footer-link" style={{color:"hsl(19, 64%, 54%)"}}>nalintrp@gmail.com</a> <br />
                           <a href="#" className="footer-link" style={{color:"hsl(19, 64%, 54%)"}}>sales@mithaidarbar.com</a>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
                <div>
                    <h3 className="footer-title">
                       Social Media
                    </h3>

                    <ul className="footer-social">
                        <a href="https://www.facebook.com/ChennaiSweetDelight" target='_blank'  className="footer-social-link">
                            <i className="ri-facebook-circle-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/mithaidarbar/" target='_blank' className="footer-social-link">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        {/* <a href="#" target='_blank' className="footer-social-link">
                            <i className="ri-twitter-fill"></i>
                        </a> */}
                    </ul>
                </div>
            </div>

          <img src={footer1} alt="Footer image" className='footer-image-png' />
          <img src={footerFinach} className='footer-finach' alt="Finach" />
          <img src={footerLeaf} className='footer-leaf' alt="Footer leaf" />
          <span className="footer-copy">
            &#169; Copyright Mithai Darbar. All rights reserved
          </span>
          
        </div>
        <img src={aboutLeaf2} alt="About leaf" className='about-leaf about-leaf-extention' />
    </footer>
  )
}

export default Footer;
