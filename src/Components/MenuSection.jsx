import React from 'react';

const aboutLeaf = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-1.png?alt=media&token=ee173dac-2ffd-4d05-98f4-f7bd8de3410f";
const aboutLeaf2 = "https://firebasestorage.googleapis.com/v0/b/mithai-darbar.appspot.com/o/leaf-branch-1.png?alt=media&token=ee173dac-2ffd-4d05-98f4-f7bd8de3410f";
const MenuSection = () => {
    return (
        <section className='footer menu' id='menu'>
            <div className="footer-container container grid">   

                <div className="footer-content">
    <div className="menu-container">
        <h1 className="section__subtitle menu-h1-title">Menu</h1>
        <table>
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Price & Quantity</th>
                    <th>Items should be ordered as advance booking</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rasogulla</td>
                    <td>₹150<br />6 Pcs</td>
                    <td>Chenna Bhaja</td>
                    <td>₹650<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>Jagree Rasogulla (Nolen Gur)</td>
                    <td>₹180<br />6 Pcs</td>
                    <td>Khasta Gaja</td>
                    <td>₹500<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>RajBhog</td>
                    <td>₹175<br />6 Pcs</td>
                    <td>Kheer Kadam</td>
                    <td>₹600<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>RasMalai</td>
                    <td>₹50<br />4 Pcs / Small</td>
                    <td>Sandesh (All Types)</td>
                    <td>₹600<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>Malari Rabri</td>
                    <td>₹50 / 125<br />100g / 250g</td>
                    <td>Mihi Dana</td>
                    <td>₹400<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>Mishti Doi</td>
                    <td>₹50 / 100 / 200<br />100g / 200g / 500g</td>
                    <td>Kala Jamun</td>
                    <td>₹100<br />5 Pcs</td>
                </tr>
                <tr>
                    <td>Chenna Gaja</td>
                    <td>₹550<br />Per 1Kg</td>
                    <td>Gulab Jamun</td>
                    <td>₹100<br />5 Pcs</td>
                </tr>
                <tr>
                    <td>Chenna Poda</td>
                    <td>₹550<br />Per 1Kg</td>
                    <td>Langcha</td>
                    <td>₹100<br />5 Pcs</td>
                </tr>
                <tr>
                    <td>Chenna Murki</td>
                    <td>₹650<br />Per 1Kg</td>
                    <td>Kacha Golla</td>
                    <td>₹600<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>Chom Chom</td>
                    <td>₹650<br />Per 1Kg</td>
                    <td>Steam Sandesh</td>
                    <td>₹550<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>Malai Sandwich</td>
                    <td>₹650<br />Per 1Kg</td>
                    <td>Kala Kand</td>
                    <td>₹600<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>Malai Roll</td>
                    <td>₹650<br />Per 1Kg</td>
                    <td>Nimki</td>
                    <td>₹400<br />Per 1Kg</td>
                </tr>
                <tr>
                    <td>Sar Bhaja</td>
                    <td>₹750<br />Per 1Kg</td>
                    <td>Fresh Paneer (Cooking Purpose)</td>
                    <td>₹450<br />Per 1Kg</td>
                </tr>
            </tbody>
        </table>
        <footer className='menu-footer' >
            <p>Items should be ordered as advance booking</p>
        </footer>
    </div>
                </div>
                <img src={aboutLeaf2} alt="About leaf" className='about-leaf' />
            </div>
            <img src={aboutLeaf} alt="About leaf" className='about-leaf about-leaf-extention' />
        </section>
    )
}

export default MenuSection;
