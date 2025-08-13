
import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Box, Typography, Grid } from "@mui/material";
import CardInfoDn from "./CardInfoDn";
import CardInfoEste from "./CardInfoEste";
import customIcono from "/src/assets/imagenes/icons/locationicon.png";

// Ícono personalizado
const customIcon = new L.Icon({
  iconUrl: customIcono,
  iconSize: [50, 60],
  iconAnchor: [20, 40],
  popupAnchor: [7, -27],
});

// Coordenadas
const positions = [
  {
    id: 0,
    name: "Torre KP. Santo Domingo D.N.",
    coors: [18.471506314132455, -69.91458582441564],
  },
  {
    id: 1,
    name: "CMU. Santo Domingo Este",
    coors: [18.486490946263473, -69.86837068152994],
  },
];

// Componente para ajustar el mapa
const FitBounds = ({ locations }) => {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(locations.map((loc) => loc.coors));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [locations, map]);
  return null;
};

export const MapLocation = () => {
  return (
    <>
      <Typography
        align="center"
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          color: "#01a198",
          fontFamily: "Poppins",
          fontWeight: "800",
          letterSpacing: { xs: ".2rem", md: ".5rem" },
          mb: { xs: 2, md: 3 },
        }}
      >
        ¿Dónde Estamos?
      </Typography>
      <Grid container width={{ xs: "100vw", md: "80vw" }} spacing={2}>
        {/* Cards de información */}
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              align="center"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                color: "#01a198",
                fontFamily: "Poppins",
                fontWeight: "800",
              }}
            >
              Santo Domingo D.N.
            </Typography>
            <CardInfoDn />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              align="center"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                color: "#01a198",
                fontFamily: "Poppins",
                fontWeight: "800",
              }}
            >
              Santo Domingo Este
            </Typography>
            <CardInfoEste />
          </Grid>
        </Grid>

        {/* Mapa debajo de las cards */}
        <Grid item xs={12}>
          <Box
            sx={{
              height: { xs: "300px", md: "450px" },
              border: "10px solid #ddd",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <MapContainer
              center={positions[0].coors}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              aria-label="Mapa con las ubicaciones de Santo Domingo D.N. y Este"
            >
              <FitBounds locations={positions} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              />
              {positions.map((pos) => (
                <Marker
                  key={pos.id}
                  icon={customIcon}
                  position={pos.coors}
                  aria-label={`Ubicación: ${pos.name}`}
                >
                  <Popup>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                      {pos.name}
                    </Typography>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
