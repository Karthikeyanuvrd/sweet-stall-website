import React from 'react';
import ABOUT_IMG_1 from "../assets/img/sweet-2.jpg";
import ABOUT_IMG2 from '../assets/img/sweet-1.png';
// import ABOUT_IMG2 from "../assets/img/about-sushi.png";
import ABOUT_LEAF from "../assets/img/leaf-branch-1.png";

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
              <img src={ABOUT_IMG_1} alt="About image 1" />
            </div>

            Tasty Sweets
          </h2>

          <p className="about-description">
            Today Archana Sweets and Snacks is a synonymous with commitment to quality and high degree of professionalism and use of state of the art technique in the manufacture of sweets, savories and snacks. Our branches of the concern speaks volumes about hygiene and service rendered by the organisation and the trust and reliability that the customers have reposed. Archana Sweets and Snacks caters to all sections of the public, in India - be it the melting mysorepauk of South or the multi variety sonepapdi of the North or the mouth watering rasagolla of East or the ever green dry fruits of the West - Archana Sweets and Snacks is the pioneer in the manufacture of such sweets in the rich tradition of the respective regions.

            Archana Sweets and Snacks is now well established and firmly in saddle as one of the leading and exclusive sweets and savories manufacturer in South India . What started as a humble beginning it has now grown into a turnover concern. The driving force behind the concern now is Mr Raju.
          </p>
        </div>

        <img src={ABOUT_IMG2} alt="About image 2" className="about-img" />
      </div>
      <img src={ABOUT_LEAF} alt="About leaf" className='about-leaf' />
    </section>
  )
}

export default AboutSection;
