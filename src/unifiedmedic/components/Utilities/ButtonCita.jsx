import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Botón glowing con fondo glassmorphism
const GlowingBtn = styled(Box)`
  position: relative;
  width: 155px;
  height: 50px;
  font-family: "monospace";
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 10px;
  overflow: hidden;
  padding: 0.5rem;
  cursor: pointer;
  // background: linear-gradient(135deg, #00ffff88, #ff00ff88);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3);

  transition: all 0.3s ease;
  --angle: 0deg;

  @media (max-width: 600px) {
    width: 130px;
    height: 40px;
  }

  @supports (property-name: --angle) {
    @property --angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 16px;
    padding: 2px;
    background: conic-gradient(
      from var(--angle),
      #00ffff,
      #ff00ff,
      #00ff00,
      #ff0000,
      #00ffff
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    filter: blur(4px);
    z-index: -1;
    animation: spin 6s linear infinite;
    transition: filter 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  }

  // &:hover::before,
  // &:active::before {
  //   filter: blur(8px);
  //   box-shadow: 0 0 30px rgba(0, 255, 255, 0.6), 0 0 40px rgba(255, 0, 255, 0.4),
  //     0 0 60px rgba(0, 255, 0, 0.3);
  // }

  &:hover,
  &:active {
    
          boxShadow: "0 6px 40px rgba(0, 0, 0, 1)";
   
    transform: scale(1.03);
  }

  @keyframes spin {
    from {
      --angle: 0deg;
    }
    to {
      --angle: 360deg;
    }
  }
`;

const ButtonCita = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { md: 160 },
        right: { md: 25 },
        zIndex: 1000,
        display: { md: "flex", xs: "flex" },
      }}
    >
      <NavLink to="/appointment" style={{ textDecoration: "none" }}>
        <GlowingBtn>
          <Typography
            component="span"
            sx={{
              fontSize: { xs: 16, md: 14, lg: 16 },
              fontWeight: "bold",
              fontFamily: "Poppins",
              letterSpacing: ".1rem",
              color: "inherit",
            }}
          >
            Agendar Cita
          </Typography>
        </GlowingBtn>
      </NavLink>
    </Box>
  );
};

export default ButtonCita;
