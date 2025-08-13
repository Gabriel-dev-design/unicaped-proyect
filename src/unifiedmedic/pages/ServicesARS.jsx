import React from "react";
// Importamos componentes de Material UI para construir la UI
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@mui/material";

// Importamos imágenes locales que representan las ARS (Aseguradoras de Riesgos de Salud)
import arsHumano from "/src/assets/imagenes/ars-imagenes/ars_humano.jpg";
import arsSenasa from "/src/assets/imagenes/ars-imagenes/ars-senasa.png";
import arsMapfre from "/src/assets/imagenes/ars-imagenes/mapfre.png";
import arsFuturo from "/src/assets/imagenes/ars-imagenes/ars_futuro.jpg";
import arsPrimera from "/src/assets/imagenes/ars-imagenes/ars_primera.jpg";
import arsAsegema from "/src/assets/imagenes/ars-imagenes/ars_asemap.png";

// Arreglo de objetos con la URL y el nombre de cada ARS que se mostrará
const slideSeguros = [
  { url: arsHumano, title: "ARS Humano" },
  { url: arsPrimera, title: "ARS Primera" },
  { url: arsSenasa, title: "ARS Senasa" },
  { url: arsMapfre, title: "ARS Mapfre" },
  { url: arsFuturo, title: "ARS Futuro" },
  { url: arsAsegema, title: "ARS Asemap" },
];

// Componente principal que muestra las ARS aceptadas
export const ServicesARS = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5", // Color de fondo suave
        backgroundColor:'white',
        py: 8, // Padding vertical
        borderRadius: 4, // Bordes redondeados
      }}
    >
      <Container maxWidth="lg">
        {" "}
        {/* Contenedor para limitar el ancho del contenido */}
        {/* Título del bloque, semánticamente un h2 */}
        <Typography
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: "#01a198",
            fontFamily: "Poppins",
            letterSpacing: { xs: ".02rem", md: ".3rem" },
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mt: { xs: 0, md: 1 },
            mb: 3,
          }}
        >
          Aceptamos principales ARS para tu tranquilidad
        </Typography>
        {/* Grid para organizar las tarjetas con logos */}
        <Grid container spacing={4}>
          {slideSeguros.map((ars, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card
                sx={{
                  transition: "transform 0.3s", // Animación suave
                  "&:hover": {
                    transform: "scale(1.05)", // Efecto de zoom al pasar el mouse
                    boxShadow: 6, // Sombra al hacer hover
                  },
                }}
              >
                {/* Área interactiva de la tarjeta */}
                <CardActionArea>
                  {/* Imagen del logo con carga perezosa y texto alternativo accesible */}
                  <CardMedia
                    component="img"
                    height="120"
                    loading="lazy"
                    image={ars.url}
                    alt={`Logo de ${ars.title}, aseguradora médica afiliada`}
                    sx={{ objectFit: "contain", p: 1 }}
                  />

                  {/* Título del ARS debajo de la imagen */}
                  <CardContent sx={{ textAlign: "center", py: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        color: "#424242",
                      }}
                    >
                      {ars.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Exportación por defecto para uso en otras partes del proyecto
export default ServicesARS;
