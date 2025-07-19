import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import styled from "styled-components";

const AnimationCard = styled.div`
  position: relative;
  padding: .3rem;
  z-index: 1;
  max-width: 400px;
  min-width: 340px;
  border-radius: 20px;
  background: #0d0d0d;
  color: white;
  overflow: hidden;
  

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 20px;
    padding: 2px; /* grosor del borde fino */
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
    filter: blur(3px);
    z-index: -1;
    animation: spin 6s linear infinite;
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


const ScheduleCard = () => {
  const consultationHours = [
    {
      day: "Lunes",
      place: "CMU. Sto. Dgo. Este ",
      hours: "2:30 PM - 6:00 PM",
    },
    {
      day: "Martes",
      place: "Torre KP. Sto. Dgo. DN",
      hours: "8:00 AM - 5:00 PM",
    },
    {
      day: "Miércoles",
      place: "Torre KP. Sto. Dgo. DN ",
      hours: "8:00 AM - 5:00 PM",
    },
    {
      day: "Jueves",
      place: "Torre KP. Sto. Dgo. DN",
      hours: "8:00 AM - 5:00 PM",
    },
    {
      day: "Viernes",
      place: "CMU. Sto. Dgo. Este ",
      hours: "2:30 PM - 6:00 PM",
    },
    // { day: "Sábado", hours: "9:00 AM - 12:00 PM" },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <AnimationCard>
        <Card
          elevation={4}
          sx={{
            maxWidth: 450,
            minWidth: 300,
            margin: "auto",
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
          }}
        >
          <CardContent>
            <Box
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CalendarMonth
                sx={{
                  color: "red",
                  fontSize: 30,
                  mr: 1.5,
                  mt: { xs: 5, md: 1 },
                }}
              />
              <Typography
                align="center"
                className="footer_underline_titulo"
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.3rem" },
                  textAlign: "center",
                  mb: { xs: 2, md: 3 },
                  mt: { xs: 5, md: 1 },
                  color: "#01a198",
                  fontFamily: "Poppins",
                  fontWeight: "900",
                  letterSpacing: { xs: ".2rem", md: ".2rem" },
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)", // sutil sombra
                
                }}
              >
                Horarios Por Cita
              </Typography>
            </Box>

            <Box sx={{ marginTop: 2, mr: 2 }}>
              {consultationHours.map((item, index) => (
                <Grid
                  container
                  key={index}
                  justifyContent="space-between"
                  sx={{
                    p: 0.7,
                    pr: 1,
                    m: 1,

                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#01a198",
                    borderBottom:
                      index < consultationHours.length - 1
                        ? "1px solid #ccc"
                        : "none",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: index % 2 === 0 ? "#333" : "#ffffff",
                      ml: 1,
                    }}
                  >
                    {item.day}
                    <Typography
                      variant="body1"
                      sx={{
                        color: index % 2 === 0 ? "#de2322" : "#ffffff",
                      }}
                    >
                      {/* {item.place} */}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: index % 2 === 0 ? "#de2322" : "#ffffff",
                      mr: 1,
                    }}
                  >
                    {item.place}
                  </Typography>
                </Grid>
              ))}
            </Box>
          </CardContent>
        </Card>
      </AnimationCard>
    </Box>
  );
};

export default ScheduleCard;
