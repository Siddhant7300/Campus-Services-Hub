import React, { useEffect, useState } from 'react';
import img1 from '../../../src/images/healthImg1.jpg';
import img2 from '../../../src/images/healthImg2.jpg';
import img3 from '../../../src/images/healthImg3.jpg';
import './Health.scss'; // Import SCSS file
import {Link} from 'react-router-dom';

const Health = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming 3 images
    }, 2000); // 2-second interval for sliding
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainContainer">
      <div className="textContainer">
        <h2>COUNSELLING TEAM</h2>
        <div className="cardContainer">
          <Card src={img1} isActive={currentImageIndex === 0}>
            <CardContent title="Health Counseling" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo at metus scelerisque, eget congue metus dignissim." />
          </Card>
          {/* Add more Card components for additional images */}
          <Card src={img2} isActive={currentImageIndex === 0}>
            <CardContent title="Health Counseling" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo at metus scelerisque, eget congue metus dignissim." />
          </Card>
          <Card src={img3} isActive={currentImageIndex === 0}>
            <CardContent title="Health Counseling" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo at metus scelerisque, eget congue metus dignissim." />
          </Card>
        </div>
        
      </div>
      {/* <Line >Contact us</button> */}
      <Link className='btn btn-warning' to="/health-contact">Contact Us</Link>
    </div>
  );
};

// Card component
const Card = ({ src, isActive, children }) => {
  return (
    <div className={`card ${isActive ? 'active' : ''}`}>
      <img src={src} alt="" />
      {children}
    </div>
  );
};

// CardContent component
const CardContent = ({ title, content }) => {
  return (
    <div className="cardContent">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Health;
