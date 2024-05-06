import React from 'react';
import ABOUT_IMG_1 from "../assets/img/about-sushi-title.png";
// import ABOUT_IMG2 from "../assets/img/about-sushi.png";
import ABOUT_IMG2 from "../assets/img/sweet-3.png";
import ABOUT_LEAF from "../assets/img/leaf-branch-1.png";

const AboutSectionExtention1 = () => {
  return (
    <section className='about section' style={{paddingBlock: "2rem 1rem"}}>
      <div className="about-container container grid">
        <div className="about-data about-data-extention">
          <p className="about-description">
            Archana - a Quality catering service provider found its birth in the industry - who have more than two decades of experience in the industry.

            Within a short span of time, Archana has become part and parcel of every home and corporate during functions and festivals.

            Archana is known for quality, ethnic and traditionally made North Indian sweets & savories. Formulated on time-tested recipes and manufactured in ultramodern production facilities, the products capture all the ingredients in their rich fullness.

            Our commitment to quality is so high that we will never compromise on it. In all our products along with pure ingredients, one can always sense our love in it. In fact, we are doing nothing more than sticking to our principles, ethics, and the business is flourishing by itself.

            The specialty sweets include - all the Indian special foods and sweets like North, South, Punjabi, Marathi etc., and all types of vegetarian dishes.

            We have well-trained and qualified cooks for all the dishes. We can arrange any amount of orders at any time.

          </p>
          <div className='about-description-highlight'>Our main principal is quality, taste and quantity and prompt delivery.</div>
        </div>
        <img src={ABOUT_IMG2} alt="About image 2" className="about-img" />
      </div>
      <img src={ABOUT_LEAF} alt="About leaf" className='about-leaf about-leaf-extention' />
    </section>
  )
}

export default AboutSectionExtention1;
