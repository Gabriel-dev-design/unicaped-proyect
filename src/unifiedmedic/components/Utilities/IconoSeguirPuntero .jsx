import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material"; // Puedes reemplazarlo con cualquier ícono

const IconoSeguirPuntero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Agrega el listener para el movimiento del mouse
    window.addEventListener("mousemove", handleMouseMove);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: position.y + 70,
        left: position.x + 20,
        transform: "translate(-50%, -50%)", // Centra el ícono respecto al puntero
        pointerEvents: "none", // Evita que interfiera con clics del usuario
        borderRadius: "50%",
        width: "2.5rem",
        height: "2.5rem",
        display:{xs:'none',md:'flex'},
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        zIndex:5000,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="red" // Color del corazón
        width="24"
        height="24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </Box>
  );
};

export default IconoSeguirPuntero;
