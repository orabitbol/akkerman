import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeroVideo from "./components/HeroVideo";
import HeroImage from "./components/HeroImage";
import ImageCarousel from "./components/ImageCarousel";
import LocationsSection from "./components/LocationsSection";
import "./App.css";

export default function App() {
  const [region, setRegion] = useState("הכל");

  return (
    <Box className="app-root">
      <HeroVideo />
      <HeroImage />
      <ImageCarousel />
      <LocationsSection selectedRegion={region} onRegionChange={setRegion} />
    </Box>
  );
}