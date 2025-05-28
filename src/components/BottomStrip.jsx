import React from "react";
import Box from "@mui/material/Box";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1019/600/400",
];

export default function BottomStrip() {
  return (
    <Box className="bottom-strip">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`strip-${i}`} />
      ))}
    </Box>
  );
}