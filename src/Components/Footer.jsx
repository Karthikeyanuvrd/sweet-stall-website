import React from 'react';
import LOGO from "../assets/img/Hero image.png";
import FOOTER_IMG from "../assets/img/spring-onion.png";
import FOOTER_FINACH from "../assets/img/spinach-leaf.png";
import FOOTER_LEAF from "../assets/img/leaf-branch-4.png";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container container grid">
            <div>
                <a href="#" className="footer-logo">
                   <img src={LOGO} alt="Logo" />
                   Sweets
                </a>
                <p className="footer-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi nihil suscipit sapiente voluptatibus cumque optio ducimus, et totam quam reiciendis! Eum accusantium repellendus explicabo quidem sit, autem fugiat nulla.
                </p>
            </div>

            <div className="footer-content">
                <div>
                    <h3 className="footer-title">
                      Main Menu
                    </h3>

                    <ul className="footer-links">
                        <li>
                           <a href="#" className="footer-link">Home</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">About</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">Products</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-title">
                      Address
                    </h3>

                    <ul className="footer-links">
                        <li>
                           <a href="#" className="footer-link">XYZ Nagar</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">Tiruvanmayur</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">Chennai</a>
                        </li>
                        <li>
                           <a href="#" className="footer-link">Tamil Nadu</a>
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
                        <a href="#" target='_blank'  className="footer-social-link">
                            <i className="ri-facebook-circle-fill"></i>
                        </a>
                        <a href="#" target='_blank' className="footer-social-link">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="#" target='_blank' className="footer-social-link">
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </ul>
                </div>
            </div>

          <img src={FOOTER_IMG} alt="Footer image" className='footer-image-png' />
          <img src={FOOTER_FINACH} className='footer-finach' alt="Finach" />
          <img src={FOOTER_LEAF} className='footer-leaf' alt="Footer leaf" />
          <span className="footer-copy">
            &#169; Copyright Sweets. All rights reserved
          </span>
        </div>
    </footer>
  )
}

export default Footer;
