import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../assets/GreyGoosePrimaryLogo_Altius_OnWhite_RGB.svg";
import HeroIceBlock from "../assets/hero-ice-block.png";

export default function HeroImage() {
  return (
    <>
      <Box className="hero-image-wrapper">
        <img src={HeroIceBlock} alt="Ice Block" className="hero-ice-block" />
        <Box className="hero-content">
          <div className="hero-title">EXPERIENCE LUXURY</div>

          <div className="hero-sub">
            וודקה אולטרה-פרימיום
            <br />
            מבית מותג הוודקה המוביל בעולם
          </div>

          <img src={Logo} alt="Grey Goose Logo" className="hero-image-logo" />

          <div className="hero-desc">
            יצירת מופת צרפתית המשלבת אומנות מזוקקת ואיכות
            <br />
            בלתי מתפשרת, העומדת בסטנדרטים הגבוהים ביותר.
          </div>

          <div className="hero-desc">
            GREY GOOSE<sup>®</sup> ALTIUS מביאה חוויית טעם אלגנטית
            <br />
            ויוקרתית, עם איזון מופתי של טעמים ורכות יוצאת דופן.
          </div>
        </Box>
        <div className="hero-footer">
          GLACIALLY SMOOTH
          <br />
          ULTRA-PREMIUM VODKA
        </div>
      </Box>
    </>
  );
}
