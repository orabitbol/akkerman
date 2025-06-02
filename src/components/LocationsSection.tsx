import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import locations from "../data/locations";

const regions = ["הכל", "צפון", "שרון", "מרכז", "דרום"];

export default function LocationsSection({ selectedRegion, onRegionChange }) {
  const filtered = selectedRegion === "הכל" ? locations : locations.filter((l) => l.region === selectedRegion);

  return (
    <Box className="locations-section">
      <Typography className="locations-title">EXPERIENCE LUXURY</Typography>
      <Typography className="locations-subtitle">
        GREY GOOSE® ALTIUS זמינה כעת באופן בלעדי בחנויות הנבחרות
      </Typography>

      <Tabs
        value={selectedRegion}
        onChange={(e, val) => onRegionChange(val)}
        centered
        className="region-tabs"
        TabIndicatorProps={{ style: { backgroundColor: "#012e75" } }}
      >
        {regions.map((r) => (
          <Tab key={r} label={r} value={r} className="region-tab" />
        ))}
      </Tabs>

      <Grid container spacing={3} className="locations-grid" mt={2}>
        {filtered.map((loc) => (
          <Grid className="wrapper-locations" key={loc.id} item xs={12} sm={6} md={4} lg={3}>
            <Card className="location-card">
              <CardContent className="location-card-content">
                <Typography variant="h6" className="location-name">
                  {loc.name}
                </Typography>
                <Typography variant="body2" className="location-address">
                  {loc.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

