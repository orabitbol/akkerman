import React from "react";
import Box from "@mui/material/Box";

export default function HeroVideo() {
  return (
    <Box className="hero-video-wrapper">
      <video
        className="hero-video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </Box>
  );
}