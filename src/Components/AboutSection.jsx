import React from 'react';
import ABOUT_IMG_1 from "../assets/img/Hero image.png";
import ABOUT_IMG2 from '../assets/img/sweet-1.png';
// import ABOUT_IMG2 from "../assets/img/about-sushi.png";
import ABOUT_LEAF from "../assets/img/leaf-branch-1.png";

const hero = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/sweet-5.png?alt=media&token=31115aef-379f-499a-bfc2-4c339e7d686c";
const sweet1 = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/sweet-1.png?alt=media&token=07ed4cf5-f950-4496-97e5-358f3a7e6ff3";
const aboutLeaf = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-1.png?alt=media&token=ee173dac-2ffd-4d05-98f4-f7bd8de3410f";

const AboutSection = () => {
  return (
    <section className='about section' id='about'>
      <div className="about-container container grid">
        <div className="about-data">
          <span className="section__subtitle">
            About Us
          </span>
          <h2 className="section-title about-title">
            <div>
              We provide 
              <img src={hero} alt="About image 1" />
              
            </div>
            Tasty Sweets
 
          </h2>

          <p className="about-description">
          Mithai Darbar is your go-to destination for authentic and delectable Indian sweets. We specialize in creating mouth-watering Rasagulla and Chenna Poda, made with the finest ingredients and traditional recipes.

          At Mithai Darbar, we take pride in our craft and are dedicated to providing our customers with the highest quality sweets. Our journey began under the PMFME Scheme, which has enabled us to bring our passion for sweets to a wider audience
          </p>
        </div>

        <img src={sweet1} alt="About image 2" className="about-img" />
      </div>
      <img src={aboutLeaf} alt="About leaf" className='about-leaf' />
    </section>
  )
}

export default AboutSection;
