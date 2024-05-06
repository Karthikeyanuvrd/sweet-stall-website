import React from 'react';
import ABOUT_IMG_1 from "../assets/img/sweet-2.jpg";
import ABOUT_IMG2 from '../assets/img/sweet-1.png';
// import ABOUT_IMG2 from "../assets/img/about-sushi.png";
import ABOUT_LEAF from "../assets/img/leaf-branch-1.png";

const ProductList = () => {
    return (
        <section className='about section' id='products' style={{ paddingBlock: "2rem 1rem" }}>
            <div className="about-container container grid">
                <div className="about-data">
                    <span className="section__subtitle">
                        Our Sweets
                    </span>

                    <div className='about-description'>
                        <h2 className="section-title about-title">
                            <div>
                                Milk Sweets
                            </div>
                        </h2>
                        <div className='menu-items'>
                            <div>ANAND BURFI</div>
                            <div>FRUIT BURFI</div>
                            <div>SPECIAL BURFI</div>
                            <div>MILK CHOCOLATE ROLL</div>
                            <div>
                                MILK BURFI</div>
                            <div>
                                MILK KESAR ROLL</div>
                            <div>CHOCOLATE BURFI</div>
                            <div>
                                DOODH PEDA</div>
                            <div>
                                MILK ORANGE</div>
                        </div>
                    </div>
                    <div className='about-description'>
                        <h2 className="section-title about-title">
                            <div>
                                Special Milk Sweets
                            </div>
                        </h2>
                        <div className='menu-items'>
                            <div>ALMOND PEDA</div>
                            <div>BANANA MILK SWEET

                            </div>
                            <div>DRY FRUIT ROLL</div>
                            <div>MALAI PEDA</div>
                            <div>BASUNDHI</div>
                            <div>AJMEER BABY</div>
                            <div>
                                BOMBAY PEDA</div>
                            <div>GUJRAT PEDA</div>
                            <div>
                                MILK CASATTA</div>
                            <div>KALA KAND</div>
                            <div>AMULYA BURFI</div>
                        </div>
                    </div>

                </div>
                <div className="about-data">
                    <div className='about-description'>
                        <h2 className="section-title about-title">
                            <div>
                                Bengali Sweets
                            </div>
                        </h2>
                        <div className='menu-items'>
                            <div>APPLE</div>
                            <div>PANNER JAMUN</div>
                            <div>MALAI SANDWICH</div>
                            <div>RASPBERRY</div>
                            <div>CHAM CHAM</div>
                            <div>KALA JAMUN</div>
                            <div>JANGRI</div>
                        </div>
                    </div>
                    <div className='about-description'>
                        <h2 className="section-title about-title">
                            <div>
                                Home Made Items
                            </div>
                        </h2>
                        <div className='menu-items'>
                            <div>MAA LADU</div>
                            <div>CHIKKI</div>
                            <div>RAVA LADU</div>
                            <div>PORI URUNDAI</div>
                            <div>
                                POTTU KADALAI URUNDAI</div>
                        </div>
                    </div>
                </div>

                {/* <img src={ABOUT_IMG2} alt="About image 2" className="about-img" /> */}
            </div>
            <img src={ABOUT_LEAF} alt="About leaf" className='about-leaf' />
        </section>
    )
}

export default ProductList;
