import React from 'react';
import HERO from '../assets/img/sweet-5.png';
import IMG_1 from '../assets/img/home-sushi-title.png';
import LEAF_1 from "../assets/img/leaf-branch-2.png";
import LEAF_2 from "../assets/img/leaf-branch-4.png";

const HomeSection = () => {
  return (
    <section className='home section' id='home'>
        <div className="home-container container grid">
            <img src={HERO} alt="Hero image" className='home-img' />

            <div className="home-data">
                <h1 className="home-title">
                    Enjoy Delicious

                    <div>
                        {/* <img src={IMG_1} alt="Image 1" /> */}
                            Archana Sweets
                    </div>
                </h1>

                <p className="home-description">
                Welcome to Archana - your premier destination for exquisite catering services, rooted in over two decades of industry expertise.
                </p>
                
                <a href="#" className="button">
                    Expore Now <i className="ri-arrow-right-line"></i>
                </a>
            </div>
        </div>

        <img src={LEAF_1} alt="Leaf image 1" className='home-leaf-1' />
        <img src={LEAF_2} alt="Leaf image 2" className='home-leaf-2' />
      
    </section>
  )
}

export default HomeSection
