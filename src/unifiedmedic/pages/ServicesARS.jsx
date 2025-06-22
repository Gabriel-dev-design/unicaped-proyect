import React from "react";
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
import arsHumano from "/src/assets/imagenes/ars-imagenes/ars_humano.jpg";
import arsSenasa from "/src/assets/imagenes/ars-imagenes/ars-senasa.png";
import arsMapfre from "/src/assets/imagenes/ars-imagenes/mapfre.png";
import arsFuturo from "/src/assets/imagenes/ars-imagenes/ars_futuro.jpg";
import arsPrimera from "/src/assets/imagenes/ars-imagenes/ars_primera.jpg";
import arsAsegema from "/src/assets/imagenes/ars-imagenes/ars_asemap.png";
import arssenasa from "/src/assets/imagenes/ars-imagenes/senasa.jpg";

const slideSeguros = [
  { url: arsHumano, title: "ARS Humano" },
  { url: arsPrimera, title: "ARS Primera" },
  { url: arsSenasa, title: "ARS Senasa" },
  { url: arsMapfre, title: "ARS Mapfre" },
  { url: arsFuturo, title: "ARS Futuro" },
  { url: arsAsegema, title: "ARS Asemap" },
];

export const ServicesARS = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        py: 8,
        borderRadius: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: "#01a198",
            fontFamily: "Poppins",
            letterSpacing: { xs: ".02rem", md: ".3rem" },
            fontSize: { xs: "1.8rem", md: "2.5rem" }, // h4 ≈ 2rem, h5 ≈ 1.5rem
            mt: { xs: 0, md: 1 },
            mb: 3,
           
          }}
        >
          Aceptamos principales ARS para tu tranquilidad
        </Typography>

        <Grid container spacing={4}>
          {slideSeguros.map((ars, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="120"
                    image={ars.url}
                    alt={ars.title}
                    sx={{ objectFit: "contain", p: 1 }}
                  />
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

export default ServicesARS;
