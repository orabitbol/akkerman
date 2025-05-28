import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";

// Grey Goose Altius – שלוש תמונות לדוגמה (תוכל להחליף לקבצים שלך)
const images = [
  "https://i0.wp.com/packagingoftheworld.com/wp-content/uploads/2024/11/Altius_Dieline_Image-3-scaled.jpg?fit=2560%2C1652&ssl=1",
  "https://i0.wp.com/packagingoftheworld.com/wp-content/uploads/2024/11/Altius_Dieline_Image-2-scaled.jpg?fit=2560%2C1652&ssl=1",
  "https://i0.wp.com/packagingoftheworld.com/wp-content/uploads/2024/11/Altius_Dieline_Image-4-scaled.jpg?fit=2560%2C1652&ssl=1",
];

export default function ImageCarousel() {
  const [active, setActive] = useState(0);
  const handleChange = (now) => setActive(now);

  return (
    <Box className="carousel-wrapper">
      <Carousel
        indicators={false}
        navButtonsAlwaysInvisible
        autoPlay={false}
        height={450}
        index={active}
        onChange={handleChange}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`carousel-${i}`} className="carousel-img" />
        ))}
      </Carousel>
      <Box className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </Box>
    </Box>
  );
}