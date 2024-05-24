import React from 'react';  
import HomeSection from './Components/HomeSection.jsx';
import AboutSection from './Components/AboutSection.jsx';
import AboutSectionExtention1 from './Components/AboutSectionExtention1.jsx';
import PopularList from './Components/PopularList.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Footer from './Components/Footer.jsx';
// import ProductList from './Components/ProductList.jsx';

const MainContent = () => {
  return (
    <main className='main'>
       <HomeSection />
       <AboutSection />
       <AboutSectionExtention1 />
       <PopularList />
       {/* <ProductList /> */}
       <ContactUs />
       <Footer />
    </main>
  )
}

export default MainContent;
