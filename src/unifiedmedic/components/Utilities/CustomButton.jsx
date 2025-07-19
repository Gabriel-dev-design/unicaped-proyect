import { Box, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

// Función para traducir position string a coordenadas CSS
const getPositionStyles = (position, horizontal = 25, altura = 25) => {
  const positions = {
    "top-left": { top: altura, left: horizontal },
    "top-right": { top: altura, right: horizontal },
    "bottom-left": { bottom: altura, left: horizontal },
    "bottom-right": { bottom: altura, right: horizontal },
    "top-center": {
      top: horizontal,
      left: "50%",
      transform: "translateX(-50%)",
    },
    "bottom-center": {
      bottom: horizontal,
      left: "50%",
      transform: "translateX(-50%)",
    },
  };
  return positions[position] || positions["bottom-right"];
};

export const CustomButton = ({
  to = "#",
  external = false,
  icon,
  text = "",
  showText = true,
  position = "bottom-right",
  horizontal = 160, // ← ahora puedes pasar horizontal desde afuera
  altura = 610, // ← ahora puedes pasar altura desde afuera
  backgroundColor = "#fff",
  color = "#25d366",
  zIndex = 300,
}) => {
  const Wrapper = external ? "a" : NavLink;
  const positionStyle = getPositionStyles(position, horizontal, altura); // <- aquí pasamos base

  return (
    <Box
      component={Wrapper}
      to={!external ? to : undefined}
      href={external ? to : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      sx={{
        position: "fixed",
        zIndex,
        border: `1px solid ${backgroundColor}`,
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 40px rgba(0, 0, 0, 1)",
        },
        ...positionStyle, // ← aquí se aplican las coordenadas
      }}
    >
      <IconButton sx={{ color }}>{icon}</IconButton>
      {showText && (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography
            sx={{
              fontSize: 15,
              color,
              p: 0.5,
              fontFamily: "Poppins",
              fontWeight: 800,
              letterSpacing: ".2rem",
            }}
          >
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
