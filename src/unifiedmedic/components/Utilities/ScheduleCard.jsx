import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import styled from "styled-components";

// Estilo animado para borde
const AnimationCard = styled.div`
  position: relative;
  padding: 0.3rem;
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
    right: -0.3px;
    bottom: -1px;
    border-radius: 20px;
    padding: 1.5px;
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
  ];

  return (
    <Box
      component="section"
      sx={{ padding: 2 }}
      aria-label="Horarios de consulta"
    >
      <AnimationCard>
        <Card
          elevation={4}
          sx={{
            maxWidth: 450,
            margin: "auto",
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <CalendarMonth
                sx={{
                  color: "red",
                  fontSize: 30,
                  mr: 1,
                }}
              />
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "#01a198",
                  fontFamily: "Poppins",
                  fontWeight: 900,
                  letterSpacing: ".2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Horarios Por Cita
              </Typography>
            </Box>

            <Box component="ul" sx={{ listStyle: "none", pl: 0,mr:2 }}>
              {consultationHours.map((item, index) => (
                <Grid
                  component="li"
                  container
                  key={`${item.day}-${index}`}
                  justifyContent="space-between"
                  role="listitem"
                  sx={{
                    p: 0.8,
                    pr: 2,
                    m: 1,
                    borderRadius: 2,
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#01a198",
                    color: index % 2 === 0 ? "#333" : "#ffffff",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {item.day}
                  </Typography>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography component="div" sx={{ fontSize: 14 }}>
                      {item.place}
                    </Typography>
                    <Typography component="div" sx={{ fontSize: 13 }}>
                      {/* {item.hours} */}
                    </Typography>
                  </Box>
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
