import React, { useState, useEffect } from 'react';
import './Header.css';

import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';

const Header = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
    const intervalId = setInterval(() => 
    {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);  

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        transition: 'background-image 3s ease-in-out', 
      }}
    >
      <div className="header-contents">
        <h2>Welcome to Chef's Place!</h2>
        <p>Explore our delicious menu and more.</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Header;
