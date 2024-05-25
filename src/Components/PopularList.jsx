import React from 'react';
import POPULAR1 from "../assets/img/popular-1.png";
import POPULAR2 from "../assets/img/popular-2.png";
import POPULAR3 from "../assets/img/sweet-4.png";

const rasogolla = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Rasagulla.png?alt=media&token=989440c9-6060-4c32-8281-c4e85978a128";
const rajBhog = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Rajbhog.png?alt=media&token=5e5c6f85-b854-43c8-8956-501cef3db05f";
const chennaPoda = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Chenna%20poda.png?alt=media&token=497a8cb5-7939-45b1-96a6-366c19d3a286";
const chennaGaja = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Chenna%20gaja.png?alt=media&token=debbc605-d790-4651-be45-feab13ee63e1"
const chumChum = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Chum%20chum.png?alt=media&token=cf315bfe-b0d0-44e3-8912-b125f7b2a74a";
const malaiSandwich = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Malai%20sandwich.png?alt=media&token=caf05369-f75f-4c20-93d3-91cc28e58a3f";
const malaiRabri = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Malai%20rabri.png?alt=media&token=7d1c6424-bf7d-40e7-9bd6-7ff261a742e6";
const rasMalai = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Rasamalai.png?alt=media&token=900a7c61-467a-41f8-b505-8692f8ec9b72";
const gulabJamun = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Gulan%20jamun.png?alt=media&token=0b02615c-4c4e-4485-8815-1e4abd50ee4d";
const kalaJamun = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/Kalajamun.png?alt=media&token=d253aaa0-3046-45a7-94bf-0ea0ed416dac";

const PopularList = () => {
  return (
    <section className='products section' id='product-list'>
        <span className="section__subtitle">The Best Quality</span>
        <h2 className="section-title">
            Weekend Special Save 15%
        </h2>

        <div className="popular-container container grid">
            <article className='popular-card'>
                <img src={rasogolla} alt="Popular image 1" className="popular-img" />

                <h3 className="popular-name">
                  Rasogulla
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>
            <article className='popular-card'>
                <img src={rajBhog} alt="Popular image 2" className="popular-img" />

                <h3 className="popular-name">
                 Rajbhog
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href='#footer'>
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>

            <article className='popular-card'>
                <img src={chumChum} alt="Popular image 4S" className="popular-img" />

                <h3 className="popular-name">
                  Chum Chum
                </h3>
                <span className="popular-description">
                    Bengali Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>


            <article className='popular-card'>
                <img src={gulabJamun} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Gulab Jamun
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>


            <article className='popular-card'>
                <img src={malaiSandwich} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Malai Sandwich
                </h3>
                <span className="popular-description">
                    Bengali Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>

            <article className='popular-card'>
                <img src={kalaJamun} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Kala Jamun
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>


            <article className='popular-card'>
                <img src={malaiRabri} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Malai Rabri
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>

            <article className='popular-card'>
                <img src={rasMalai} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Rasmalai
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>


            <article className='popular-card'>
                <img src={chennaPoda} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Chenna Poda
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href='#footer'>
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>

            <article className='popular-card'>
                <img src={chennaGaja} alt="Popular image 3" className="popular-img" />

                <h3 className="popular-name">
                  Chenna Gaja
                </h3>
                <span className="popular-description">
                    Indian Sweet
                </span>
                <a className="popular-price" href="#footer">
                   Order Now
                </a>

                <button className='popular-button'>
                    <i className="ri-shopping-bag-line"></i>
                </button>
            </article>

        </div>
      
    </section>
  )
}

export default PopularList;
