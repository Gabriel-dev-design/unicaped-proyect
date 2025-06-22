import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const MainCard = ({id, title, description, serviceTitle }) => {
  return (
    <Box
      maxWidth="xl"
      className="animate__animated animate__fadeInUp"
      sx={{
        color: "#FFFFFF",
        minHeight: "100vh",

        paddingBottom: 4,
        marginBottom: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Container maxWidth="xl">
        <Typography
          align="center"
          sx={{
            fontSize: { xs: "1.2rem", md: "2.5rem" },
            textAlign: "center",
            mb: { xs: 10, md:40 },

            // color: "#01a198",
            color: "#FFFFFF",
            fontFamily: "Poppins",
            fontWeight: "800",
            letterSpacing: { xs: ".2rem", md: ".5rem" },
          }}
        >
          {serviceTitle}
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={12} md={8}>
            <Card
              sx={{
                backgroundColor: [
                  "rgba(1, 161, 152, 0.7)", // Color 1 con 80% de opacidad
                  "rgba(217, 79, 112, 0.7)", // Color 2 con 80% de opacidad
                  "rgba(245, 166, 35, 0.7)", // Color 3 con 80% de opacidad
                  "rgba(80, 178, 192, 0.7)", // Color 4 con 80% de opacidad
                ][id % 4], // Ciclo de colores según el índice
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
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "2rem" },
                    textAlign: "center",
                    mb: { xs: 2, md: 2 },

                    // color: "#01a198",
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontWeight: "800",
                    letterSpacing: { xs: ".1rem", md: ".4rem" },
                  }}
                >
                  {title}
                </Typography>
                <Typography variant="body1" textAlign="center">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainCard;
