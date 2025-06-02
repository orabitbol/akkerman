import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Image1 from "../assets/carouselImage/process-01.jpg";
import Image2 from "../assets/carouselImage/process-02.jpg";
import Image3 from "../assets/carouselImage/process-04.jpg";


const items = [
  {
    src: Image1,
    text: "טקסט כלשהו ראשון - תוכל לשנות אותו"
  },
  {
    src: Image2,
    text: "טקסט שני עם דגש עיצובי מרוכז בתחתית"
  },
  {
    src: Image3,
    text: "עוד טקסט שממוקם באמצע התמונה בתחתית"
  }
];

export default function ImageCarousel() {
  const [active, setActive] = useState(0);
  const handleChange = (now) => setActive(now);

  return (
    <Box className="carousel-wrapper">
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible
        navButtonsProps={{
          style: {
            backgroundColor: "#ffffffaa",
            borderRadius: "50%",
            color: "#012e75",
            top: "50%",
            transform: "translateY(-50%)",
          }
        }}
        autoPlay={false}
        height={450}
        index={active}
        onChange={handleChange}
      >
        {items.map((item, i) => (
          <Box key={i} className="carousel-item">
            <img src={item.src} alt={`carousel-${i}`} className="carousel-img" />
            <Box className="carousel-caption">{item.text}</Box>
          </Box>
        ))}
      </Carousel>
      <Box className="carousel-dots">
        {items.map((_, i) => (
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
