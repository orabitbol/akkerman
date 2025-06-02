import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image1 from "../assets/carouselImage/process-01.jpg";
import Image2 from "../assets/carouselImage/process-02.jpg";
import Image3 from "../assets/carouselImage/process-04.jpg";

const items = [
  { src: Image1, text: "טקסט ראשון" },
  { src: Image2, text: "טקסט שני" },
  { src: Image3, text: "טקסט שלישי" },
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box className="custom-carousel-wrapper">
      <button className="carousel-nav prev" onClick={prevSlide}>
        &#10094;
      </button>

      <Box className="carousel-track">
        {items.map((item, i) => (
          <Box key={i} className="carousel-slide">
            <img src={item.src} alt={`carousel-${i}`} className="carousel-img" />
            <Box className="carousel-caption">{item.text}</Box>
          </Box>
        ))}
      </Box>

      <button className="carousel-nav next" onClick={nextSlide}>
        &#10095;
      </button>
    </Box>
  );
}
