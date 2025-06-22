import { Navigate, Outlet, Route, Routes } from "react-router-dom";

// import { AboutUs } from "../pages/AboutUs";
// import { NavBar } from "../components/NavBar/NavBar";
// import { Footer } from "../pages/Footer";
// import { ServicesARS } from "../pages/ServicesARS";
// import { OurServices } from "../pages/OurServices";
import { Box, Container, Grid2 } from "@mui/material";
import AppUnifiedMedic from "../AppUnifiedMedic";
import { NavBar } from "../components/navbars/NavBar";
import { Footer } from "../footers/Footer";
import { HomePage } from "../pages/HomePage";
import { FirstNavBar } from "../components/navbars/FirstNavBar";
import { AboutUs } from "../pages/AboutUs";
import ServicesARS from "../pages/ServicesARS";
import OurServices from "../pages/OurServices";
import { MapLocation } from "../map/MapLocation";



export const UnifidMedicRouter = () => {

  const PlantillaGlobal = () => {
    return (
      <>
        <Box className="container">
          {/* <Box className="header">
            <FirstNavBar />
          </Box> */}

          <Box className="headermenu">
            <NavBar />
          </Box>

          <Box
            className="content"
            component="main"
            sx={{
         
            }}
          >
         
            <Outlet />
           
          </Box>

          <Box className="footer">
            <Footer />
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
         <Routes>
        <Route path="/" element={<PlantillaGlobal />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="ars" element={<ServicesARS />} />
          <Route path="services" element={<OurServices />} />
          <Route path="map" element={<MapLocation />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
