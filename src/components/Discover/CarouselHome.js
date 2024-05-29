import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../images/discoverImg/img1.jpg";
import Img2 from "../../images/discoverImg/img2.jpg";
import Img3 from "../../images/discoverImg/img3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Carouselhome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Styles
  const carouselStyle = {
    width: "100%", // This makes the carousel full width
    maxHeight: "100vh", // Optional: limits the carousel's height to the viewport height
    position: "relative", // Ensure the Carousel itself is positioned relatively for zIndex context
    zIndex: 2, // Ensure Carousel is above the overlay
  };

  const imageStyle = {
    width: "100vw", // Ensures the image takes the full width of the carousel
    height: "60vh", // Adjust the height to fit the screen, or use 'auto' if you want to keep the image's aspect ratio
    objectFit: "cover", // Ensures the image covers its container without stretching
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)", // Dark overlay
    zIndex: 1, // Overlay is above the image but below the controls
    pointerEvents: "none", // Allows clicks to pass through
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={carouselStyle}
      indicators={false}
    >
      <Carousel.Item>
        <div style={{ position: "relative" }}>
          <img src={Img1} alt="First slide" style={imageStyle} />
          <div style={overlayStyle}></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ position: "relative" }}>
          <img src={Img2} alt="Second slide" style={imageStyle} />
          <div style={overlayStyle}></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ position: "relative" }}>
          <img src={Img3} alt="Third slide" style={imageStyle} />
          <div style={overlayStyle}></div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselhome;