import React from 'react';
import HERO from '../assets/img/sweet-5.png';
import IMG_1 from '../assets/img/home-sushi-title.png';
import LEAF_1 from "../assets/img/leaf-branch-2.png";
import LEAF_2 from "../assets/img/leaf-branch-4.png";

const hero = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/sweet-5.png?alt=media&token=31115aef-379f-499a-bfc2-4c339e7d686c";
const leaf1 = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-2.png?alt=media&token=4bd38d80-6b31-4c2b-94cc-f89ea6ab51b7";
const leaf2 = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-1.png?alt=media&token=ee173dac-2ffd-4d05-98f4-f7bd8de3410f"
const HomeSection = () => {
  return (
    <section className='home section' id='home'>
        <div className="home-container container grid">
            <img src={hero} alt="Hero image" className='home-img' />

            <div className="home-data">
                <h1 className="home-title">
                    Celebrartions Enriched

                    <div>
                        {/* <img src={IMG_1} alt="Image 1" /> */}
                            & Happiness Delivered
                    </div>
                </h1>

                <div className="home-description">
                Welcome to Mithai Darbar <br />Rasagulla, Chenna Poda Making Unit
                <p>Under PMFME Scheme</p>
                </div>
                
                <a href="#about" className="button">
                    Expore Now <i className="ri-arrow-right-line"></i>
                </a>
            </div>
        </div>

        <img src={leaf1} alt="Leaf image 1" className='home-leaf-1' />
        <img src={leaf2} alt="Leaf image 2" className='home-leaf-2' />
      
    </section>
  )
}

export default HomeSection
