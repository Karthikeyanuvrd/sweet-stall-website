import React from 'react';
import ABOUT_IMG_1 from "../assets/img/about-sushi-title.png";
// import ABOUT_IMG2 from "../assets/img/about-sushi.png";
import ABOUT_IMG2 from "../assets/img/sweet-3.png";
import ABOUT_LEAF from "../assets/img/leaf-branch-1.png";

const about2 = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/sweet-3.png?alt=media&token=dcb93e23-a219-4e93-a7d8-61901c7f61b3";
const aboutLeaf = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-1.png?alt=media&token=ee173dac-2ffd-4d05-98f4-f7bd8de3410f";
const AboutSectionExtention1 = () => {
  return (
    <section className='about section' style={{paddingBlock: "2rem 1rem"}}>
      <div className="about-container container grid">
        <div className="about-data about-data-extention">
          <p >
          Whether you're looking to satisfy your sweet tooth or celebrate a special occasion, Mithai Darbar is here to make every moment sweeter. Come and experience the delightful flavors and rich heritage of Indian sweets at Mithai Darbar.

          </p>
          <div className='about-description-highlight'>Our main principal is quality, taste and quantity and prompt delivery.</div>
        </div>
        <img src={about2} alt="About image 2" className="about-img" />
      </div>
      <img src={aboutLeaf} alt="About leaf" className='about-leaf about-leaf-extention' />
    </section>
  )
}

export default AboutSectionExtention1;
