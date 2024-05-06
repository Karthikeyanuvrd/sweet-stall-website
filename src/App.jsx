import './App.css';
import Navigationbar from './Navigationbar.jsx';
import MainContent from './MainContent.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [scrolledBg, setScrolledBg] = useState('');

    useEffect(() => {
      const handleScroll = () => {
       
        if (window.scrollY > 50) {
          setScrolledBg('bg-header');
        } else {
          setScrolledBg('');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

  return (
    <>
      <header className={`header ${scrolledBg}`}>
        <Navigationbar />
      </header>
      <MainContent />
    </>
  )
}

export default App
