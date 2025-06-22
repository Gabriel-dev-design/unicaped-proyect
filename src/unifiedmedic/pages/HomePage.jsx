import { Box, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MapLocation } from "../map/MapLocation";
import EmblaCarousel from "../../assets/imagenes/carousel/EmblaCarousel";
import { AboutUs } from "./AboutUs";
import { ServicesARS } from "./ServicesARS";
import { OurServices } from "./OurServices";

import ServicesCardsHome from "../components/homepageComponents/ServicesCardsHome";
import { Footer } from "../footers/Footer";
import AppointmentForm from "./AppointmentForm";

const TopSpace = <Box sx={{ height: { xs: "56px", md: "56px" } }} />;

export const HomePage = () => {
  return (
    <>
      {/* Espaciador para compensar AppBar fija */}
      <Box
        sx={{
          display: "flex", // Flexbox para control
          flexDirection: "column", // Apilar componentes verticalmente
          alignItems: "center", // Centrar horizontalmente
          justifyContent: "flex-start", // Alinearlos hacia la parte superior
          gap: 2, // Espaciado entre los elementos
          // Espaciado interno
          boxSizing: "border-box", // Considerar el padding
        }}
      >
        {/* Pages */}

        <Box id="home" sx={{ scrollMarginTop: "80px" }}>
          <EmblaCarousel />
        </Box>

        <Box id="about" sx={{ scrollMarginTop: "80px" }}>
          <AboutUs />
        </Box>
        {/* <Box id="services" sx={{ scrollMarginTop: "80px" }}>
          <ServicesCardsHome />
        </Box> */}
        <Box id="ars" sx={{ scrollMarginTop: { lg: "30px" } }}>
          <ServicesARS />
        </Box>
        <Box
          id="map"
          sx={{ scrollMarginTop: { xs: "40px", md: "80px", lg: "120px" } }}
        >
          <MapLocation />
        </Box>
        <Box
          id="footer"
          sx={{ scrollMarginTop: { xs: "-420px", md: "20px", lg: "120px" } }}
        ></Box>
      </Box>
  {/* <AppointmentForm/> */}
    </>
  );
};
