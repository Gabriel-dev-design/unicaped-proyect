import { WhatsApp } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
export const WhatsAppFlotante = () => {
  return (
    <Box
      component="a"
      href="https://api.whatsapp.com/send?phone=18496075958&text=Hola%20!%20puedo%20ayudarte?"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        right: 25,
        bottom: 85,
        zIndex: 300,
        border: "1px solid #FFFFFF",
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
      }}
    >
      <IconButton
        aria-label="Chatear con nosotros en WhatsApp"
        sx={{ color: "#25d366" }}
      >
        <WhatsApp sx={{ fontSize: 40 }} />
      </IconButton>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            color: "#25d366",
            p: 0.5,
            fontFamily: "Poppins",
            fontWeight: 800,
            letterSpacing: ".2rem",
          }}
        >
          Escribenos
        </Typography>
      </Box>
    </Box>
  );
};