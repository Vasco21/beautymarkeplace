import React, { useEffect, useState } from "react";
import Arrows from "./Arrows";
import "./Slider.css";
import First from "../../assets/images/place.jpg";
import Second from "../../assets/images/second.png";
import Third from "../../assets/images/third.jpg";

const images =[
  {
    urls: First,
  },
  {
    
    urls: Second,
  },
  {
    
    urls: Third,
  },
  {
    urls: "https://res.cloudinary.com/creative-power/image/upload/v1646820895/nails_bhswij.jpg",
  },
  {
    
    urls: "https://res.cloudinary.com/creative-power/image/upload/v1646820980/man_ltq74z.webp",
  },
  {
   
    urls: "https://res.cloudinary.com/creative-power/image/upload/v1644550172/Glen_neopjx.png",
  },
  {
    
    urls: "https://res.cloudinary.com/creative-power/image/upload/v1646821528/metarial_pdhrj7.jpg",
  },
];

const len = images.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <h1 className="gradient__text">Bring Out The Beauty In YOU!</h1>
    <section>
      {images.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt=""/>
        </div>
        
      ))}
    </section>
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <div className="all-dots">
      {images.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={(activeIndex) => setActiveIndex(activeIndex)}
        ></span>
      ))}
    </div>
    </div>
  );
}

export default Slider;