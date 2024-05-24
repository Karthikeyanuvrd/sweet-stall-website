import React, { useState } from 'react';
import LOGO from "./assets/img/Hero image.png";
import NAV_IMAGE_1 from "./assets/img/leaf-branch-4.png";
import NAV_IMAGE_2 from "./assets/img/leaf-branch-3.png";

const Logo = 'https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Hero%20image.png?alt=media&token=1abd5360-9acc-45a8-a855-129679292679';
const Navigationbar = () => {
    const [visibleNavbar, setvisibleNavbar] = useState(false);

  return (
    <nav className='nav container'>
      <a href="#" className="nav-logo">
        <img src={Logo} alt="logo image" />
        <div>
        Mithai
        <p>Darbar</p>
        </div>
      </a>

      <div className={visibleNavbar ? "nav-menu show-menu" : "nav-menu"} id="nav-menu">
        <ul className="nav-list">
            <li className="nav-item" onClick={(e) => {
          setvisibleNavbar(false);
          const activeClass = document.querySelector('.active-link');
          if(activeClass){
            activeClass.classList.remove('active-link');
          }
          e.currentTarget.classList.add('active-link');
      }}>
                <a href="#home" className="nav-link active-link">
                   Home
                </a>
            </li>
            <li className="nav-item" onClick={(e) => {
          setvisibleNavbar(false);
          const activeClass = document.querySelector('.active-link');
          if(activeClass){
            activeClass.classList.remove('active-link');
          }
          e.currentTarget.classList.add('active-link');
      }}>
            <a href="#about" className="nav-link">
                    About
                    </a>
            </li>
            <li className="nav-item" onClick={(e) => {
          setvisibleNavbar(false);
          const activeClass = document.querySelector('.active-link');
          if(activeClass){
            activeClass.classList.remove('active-link');
          }
          e.currentTarget.classList.add('active-link');
      }}>
            <a href="#product-list" className="nav-link">
                    Product List
                    </a>
            </li>
            {/* <li className="nav-item" onClick={(e) => {
          setvisibleNavbar(false);
          const activeClass = document.querySelector('.aactive-link');
          if(activeClass){
            activeClass.classList.remove('active-link');
          }
          e.currentTarget.classList.add('active-link');
      }}>
            <a href="#history" className="nav-link">
                    History
                    </a>
            </li> */}
            {/* <li className="nav-item" onClick={(e) => {
          setvisibleNavbar(false);
          const activeClass = document.querySelector('.active-link');
          if(activeClass){
            activeClass.classList.remove('active-link');
          }
          e.currentTarget.classList.add('active-link');
      }}>
            <a href="#branches" className="nav-link">
                    Branches
                    </a>
            </li> */}
            <li className="nav-item" onClick={(e) => {
          setvisibleNavbar(false);
          const activeClass = document.querySelector('.active-link');
          if(activeClass){
            activeClass.classList.remove('active-link');
          }
          e.currentTarget.classList.add('active-link');
      }}>
            <a href="#footer" className="nav-link">
                    Contact Us
                    </a>
            </li>
            {/* <li className="nav-item" onClick={(e) => {
          setvisibleNavbar(false);
          const activeClass = document.querySelector('.active-link');
          if(activeClass){
            activeClass.classList.remove('active-link');
          }
          e.currentTarget.classList.add('active-link');
      }}>
            <a href="#feedback" className="nav-link">
                    Feedback
                    </a>
            </li> */}
        </ul>
              {/* Close button */}
      <div className="nav-close" onClick={() => {
          setvisibleNavbar(false);
      }}>
        <i className='ri-close-line'></i>
      </div>

      <img src={NAV_IMAGE_1} alt="nav image 1"  className='nav-image-1' />
      <img src={NAV_IMAGE_2} alt="nav image 2" className="nav-image-2" />
      </div>

      <div className="nav-buttons">
        {/* Theme change button */}
        {/* <i className="ri-moon-line change-theme" id='theme-button'></i> */}

        {/* Toggle-button */}
        <div className="nav-toggle" onClick={() => {
            setvisibleNavbar(true);
        }}>
          <i className="ri-apps-2-line"></i>
        </div>
      </div>

    </nav>
  )
}

export default Navigationbar
