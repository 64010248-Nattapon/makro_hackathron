// CenteredImage.tsx

import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';  // Example using react-icons library
import { Link } from 'react-router-dom';
import overlayImage from './image.png';
import imageMain from'./mainpage.jpg';
const home: React.FC = () => {
    return (
        <div style={containerStyle}>
            <div style={imageContainerStyle}>
                <img 
                    src={imageMain}
                    alt="Centered Image" 
                    style={imageStyle} 
                />
                  <div style={whiteSquareStyle}></div> {/* White Square */}
                <Link to="/choosing" style={iconOverlayStyle}>
                    <img 
                        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_119369943-e1594735927566.jpeg?auto=format&q=60&fit=max&w=930"  // Replace with your overlay image URL
                        alt="Overlay Image"
                        style={overlayImageStyle}
                    />
                     <span style={textStyle}>Makro Pro Plus</span> {/*Makro Pro Plus*/}
                </Link>
                <Link to="/list" style={iconListOverlayStyle}>
                    <img 
                        src={overlayImage} // Replace with your overlay image URL
                        alt="Overlay Image"
                        style={overlayImageStyle}
                    />
                </Link>
            </div>
        </div>
    );
};

// Inline styles
const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
};

const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
  
    
};

const imageStyle: React.CSSProperties = {
    width: '430px',  /* Fixed width */
    height: '932px',  /* Fixed height */
    objectFit: 'cover',
};

const iconListOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '97.1%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    width: '150px',  // Set the width of the overlay container
    textAlign: 'center', // Center text under the icon
};
const iconOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '42.6%',
    left: '14%',
    transform: 'translate(-50%, -50%)',
    width: '140px',  // Set the width of the overlay container
    textAlign: 'center', // Center text under the icon
};
const overlayImageStyle: React.CSSProperties = {
    width: '90px',     // Adjust size as needed
    height: 'auto',    // Maintain aspect ratio
};
const textStyle: React.CSSProperties = {
    display: 'block',
    color: 'black',     // Text color
    fontSize: '13px',  // Text size
    fontWeight: 'bold',
};
const whiteSquareStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '51.4%',
    left: '13%',
    transform: 'translateX(-50%)',
    width: '100px',   // Width of the white square
    height: '105px',  // Height of the white square
    backgroundColor: 'white',  // Color of the white square
};
export default home;
