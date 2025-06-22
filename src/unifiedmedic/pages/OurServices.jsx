import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const services = [
  {
    id:1,
    title: "Consulta Especializada",
    description:
      "Evaluaciones exhaustivas para identificar, prevenir y tratar cualquier problema cardíaco o relacionado con la salud de los niños.",
  },
  {
    id:2,
    title: "Ecocardiografía",
    description:
      "Estudios detallados y no invasivos del corazón para detectar cualquier anomalía estructural o funcional.",
  },
  {
    id:3,
    title: "Electrocardiografía",
    description:
      "Pruebas precisas para analizar la actividad eléctrica del corazón y detectar ritmos cardíacos anómalos.",
  },

  
];

export const OurServices = () => {
  return (
    <Box
      maxWidth="xl"
      className="animate__animated animate__fadeInUp"
      sx={{
        color: "#FFFFFF",
        bgcolor: "#F5F5F5",
        minHeight: "60vh",
        borderRadius: 7,
      }}
    >
      <Container maxWidth="xl">
        {/* Título Principal */}
        <Typography
          align="center"
          sx={{
            fontSize: { xs: "1.5rem", md: "3rem" }, // Font size equivalente a h5 para xs y h3 para md
            textAlign: "center",
            mb: { xs: 2, md: 5 },
            mt: { xs: 5, md: 1 },
            color: "#01a198",
            fontFamily: "Poppins",
            fontWeight: "800",
            letterSpacing: { xs: ".2rem", md: ".5rem" },
          }}
        >
          Servicios de Pediatría Cardíaca
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontSize: { xs: "1rem", md: "1.3rem" },
            marginBottom: 6,
            paddingX: { xs: 2, md: 8, color: "#01a198" },
          }}
        >
          Como pediatra cardióloga, ofrezco una atención integral, cálida y
          profesional para garantizar la salud del corazón de los niños.
        </Typography>

        {/* Servicios */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: [
                    "#01a198", // Color 1
                    "#d94f70", // Color 2
                    "#f5a623", // Color 3
                    "#50b2c0", // Color 4
                  ][index % 4], // Ciclo de colores según el índice
                  color: "#FFFFFF",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 2,
                      textAlign: "center",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" textAlign="center">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
