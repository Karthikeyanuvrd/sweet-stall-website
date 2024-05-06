import React from 'react';
import POPULAR1 from "../assets/img/popular-1.png";
import POPULAR2 from "../assets/img/popular-2.png";
import POPULAR3 from "../assets/img/sweet-4.png";


const PopularList = () => {
  return (
    <section className='products section' id='product-list'>
        <span className="section__subtitle">The Best Quality</span>
        <h2 className="section-title">
            Popular Sweets
        </h2>

        <div className="popular-container container grid">
            <article className='popular-card'>
                <img src={POPULAR1} alt="Popular image 1" className="popular-img" />

                <h3 className="popular-name">
                  Kaju Katri
                </h3>
                <span className="popular-description">
                    Japneese Sweet
                </span>
                <span className="popular-price">
                   $10.99
                </span>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>
            <article className='popular-card'>
                <img src={POPULAR2} alt="Popular image 2" className="popular-img" />

                <h3 className="popular-name">
                 Badusha
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <span className="popular-price">
                   $7
                </span>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>
            <article className='popular-card'>
                <img src={POPULAR3} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Sweet Combo
                </h3>
                <span className="popular-description">
                    Indian Sweets
                </span>
                <span className="popular-price">
                   $50
                </span>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>
        </div>
      
    </section>
  )
}

export default PopularList;
