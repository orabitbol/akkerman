import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image1 from "../assets/carouselImage/process-01.jpg";
import Image2 from "../assets/carouselImage/process-02.jpg";
import Image3 from "../assets/carouselImage/process-04.jpg";
import Icon1 from "../assets/carouselImage/1.png";
import Icon2 from "../assets/carouselImage/2.png";
import Icon3 from "../assets/carouselImage/3.png";
const items = [
  {
    src: Image2,
    text: `כדי לשמר את תווי החיטה היחודיים של המותג,
גם ב- GREY GOOSE® ALTIUS משתמשים בחיטת חורף רכה מחבל פיקרדי בצרפת
המיוצרת עבור המותג באופן בלעדי.`,
    icon: Icon1,
    color: "#012d73",
  },
  {
    src: Image3,
    text: `GREY GOOSE® ALTIUS עובר תהליך סינון ייחודי בטמפרטורה של 24- מעלות צלזיוס.
תהליך זה יוצר באופן טבעי קריסטלי קרח
ומעניק לוודקה מרקם יוצא דופן וטעם חלק להפליא.`,
    icon: Icon2,
    color: "#012d73",
  },
  {
    src: Image1,
    text: `מי הנביעה הטהורים המשמשים ליצירת GREY GOOSE® ALTIUS
מגיעים מהפסגות המושלגות של הרי האלפים הצרפתיים.
המים עוברים מסע טבעי דרך שכבות סלעים קריסטליים,
המעשירים אותם במינרלים ייחודיים.`,
    icon: Icon3,
    color: "white",
  },
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
            <img  src={item.icon} alt="icon" className="carousel-icon" />
            <Box className="carousel-caption" sx={{ color: item.color }}>
              {item.text}
            </Box>
          </Box>
        ))}
      </Box>

      <button className="carousel-nav next" onClick={nextSlide}>
        &#10095;
      </button>
    </Box>
  );
}
