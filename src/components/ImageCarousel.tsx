import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image1 from "../assets/carouselImage/process-01.jpg";
import Image2 from "../assets/carouselImage/process-02.jpg";
import Image3 from "../assets/carouselImage/process-04.jpg";
import Icon1 from "../assets/carouselImage/1.png";
import Icon2 from "../assets/carouselImage/2.png";
import Icon3 from "../assets/carouselImage/3.png";
const items = [
  { src: Image1, text: "טקסט ראשון", icon: Icon1 },
  { src: Image2, text: "טקסט שני", icon: Icon2 },
  { src: Image3, text: "טקסט שלישי", icon: Icon3 },
];
export default function ImageCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);

  const getVisibleItems = () => {
    const length = items.length;
    const prev = (centerIndex - 1 + length) % length;
    const next = (centerIndex + 1) % length;
    return [items[prev], items[centerIndex], items[next]];
  };

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <Box className="custom-carousel-wrapper">
      <button className="carousel-nav prev" onClick={prevSlide}>
        &#10094;
      </button>

      <Box className="carousel-track">
        {getVisibleItems().map((item, i) => (
          <Box key={i} className="carousel-slide">
            <img
              src={item.src}
              alt={`carousel-${i}`}
              className="carousel-img"
            />
            <img src={item.icon} alt="icon" className="carousel-icon" />
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
