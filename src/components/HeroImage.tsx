import React from "react";
import Box from "@mui/material/Box";

export default function HeroImage() {
  return (
    <Box className="hero-image-wrapper">
      <img
        className="hero-image"
        src="https://picsum.photos/id/1018/1920/600"
        alt="Hero"
      />
    </Box>
  );
}
