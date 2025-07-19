import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Importa Leaflet directamente
import "animate.css";

import {
  Box,
  Button,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import CardInfoDn from "./CardInfoDn";
import customIcono from "/src/assets/imagenes/icons/locationicon.png";
import PlaceIcon from "@mui/icons-material/Place";
import CardInfoEste from "./CardInfoEste";

// Define un ícono personalizado
const customIcon = new L.Icon({
  iconUrl: `${customIcono}`, // URL del ícono personalizado
  // iconUrl:    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-red.png",
  iconSize: [50, 60], // Tamaño del ícono [ancho, alto]
  iconAnchor: [20, 40], // Ancla del ícono [punto de referencia]
  popupAnchor: [7, -27], // Ancla del popup [posición relativa]
});

// Componente para manejar el movimiento del mapa
const MapMover = ({ position }) => {
  const map = useMap(); // Accede al mapa actual
  React.useEffect(() => {
    map.flyTo(position, 16, { duration: 1.5 }); // Movimiento suave con flyTo
  }, [position, map]); // Se ejecuta cada vez que cambia la posición
  return null;
};

// Coordenadas predefinidas
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

export const MapLocation = () => {
  const [currentPosition, setCurrentPosition] = useState(positions[0].coors); // Posición inicial del marcador
  const [idposition, setIdPosition] = useState(1); // Posición inicial del marcador

  const [currentIndex, setCurrentIndex] = useState(0);

  const markerRef = useRef(null);

  // useEffect(() => {
  //   if (markerRef.current) {
  //     markerRef.current.openPopup(); // Abre el popup al iniciar
  //   }
  // }, []);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [currentPosition]);

  // Cambia la posición del marcador y el mapa

  // const handleMoveToPosition = (position, id) => {
  //   setCurrentPosition(position); // Actualiza la posición actual
  //   setIdPosition(id); // Actuliza componente informacion del Mapa

  // };
  const handleTogglePosition = () => {
    const nextIndex = currentIndex === 0 ? 1 : 0;
    setCurrentIndex(nextIndex);
    setCurrentPosition(positions[nextIndex].coors);
  };

  return (
    <>
      <Typography
        align="center"
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          textAlign: "center",
          mb: { xs: 2, md: 3 },
          mt: { xs: 1, md: 1 },
          color: "#01a198",
          fontFamily: "Poppins",
          fontWeight: "800",
          letterSpacing: { xs: ".2rem", md: ".5rem" },
        }}
      >
        ¿Dónde Estamos?
      </Typography>
      <Grid
        container
        width={{ xs: "100vw", md: "80vw" }}
        spacing={2}
        background="blue"
      >
        {/* Botones */}
        <Grid
          xs={12}
          sx={{
            pt: 2,
            width: "100vw",
            order: { xs: 0, md: 2 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            xs={12}
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                if (idposition) {
                  handleTogglePosition(positions[1].coors, positions[1].id);
                  setIdPosition(0);
                } else {
                  handleTogglePosition(positions[0].coors, positions[0].id);
                  setIdPosition(1);
                }
              }}
              sx={{
                width: { xs: "85%", md: "50%" },
                maxWidth: "82%",
                borderRadius: "30px",
                paddingY: 1.5,
                fontWeight: "bold",
                fontSize: "1.1rem",
                letterSpacing: "0.6px",
                textTransform: "none",
                background:
                  "radial-gradient(circle at top left, #de232290 0%, #01a198 100%)",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35)",
                  background:
                    "radial-gradient(circle at bottom right, #c91d1c 0%, #018e87 100%)",
                },
              }}
            >
              {currentIndex === 0
                ? "Ir a CMU Sto. Dgo. Este"
                : "Ir a Torre KP Sto. Dgo. D.N."}

              <PlaceIcon className="location" sx={{ fontSize: 30, ml: 2 }} />
            </Button>
          </Grid>
        </Grid>

        {/* Mapa */}
        <Grid item xs={12} md={8} sx={{ order: { xs: 1, md: 0 } }}>
          <Box
            sx={{
              height: { xs: "300px", md: "95%", lg: "100%" },
              border: "10px solid #ddd",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <MapContainer
              center={currentPosition}
              zoom={15}
              scrollWheelZoom={false}
              style={{
                height: "100%",
                width: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <MapMover position={currentPosition} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker
                icon={customIcon}
                position={currentPosition}
                ref={markerRef}
              >
                <Popup>
                  <Typography sx={{ color: "red", fontSize: { xs: "0.7rem" } }}>
                    Dra. Pura Elizabeth Pérez: <br />
                  </Typography>
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Grid>

        {/* CardInfo */}
        <Grid item xs={12} md={4} sx={{ order: { xs: 2, md: 1 } }}>
          {currentIndex === 0 ? <CardInfoDn /> : <CardInfoEste />}
        </Grid>
      </Grid>
    </>
  );
};
