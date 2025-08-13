import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import elizabethfoto from "/src/assets/imagenes/background/fotoeli.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HealingIcon from "@mui/icons-material/Healing";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import BloodPressureIcon from "@mui/icons-material/MonitorHeart"; // Reusado para hipertensión

const services = [
  {
    icon: <FavoriteIcon sx={{ color: "#01a198" }} />,
    text: "Evaluación Cardiovascular pediátrica, pre quirurgica, pre medicación y previa práctica de deporte." 
  },
  {
    icon: <MonitorHeartIcon sx={{ color: "#01a198" }} />,
    text: "Realizamos estudios Electrocardiograma (ECG) y ecocardiograma pediatrico "
  },
  {
    icon: <VaccinesIcon sx={{ color: "#01a198" }} />,
    text: "Diagnóstico y manejo de cardiopatías congénitas "
  },
  {
    icon: <HealingIcon sx={{ color: "#01a198" }} />,
    text: "Enfermedades adquiridas del corazón "
  },
  {
    icon: <LocalHospitalIcon sx={{ color: "#01a198" }} />,
    text: "Diagnóstico y seguimiento de arritmias cardíacas"
  },
  {
    icon: <BloodPressureIcon sx={{ color: "#01a198" }} />,
    text: "prevención y detección de factores de riesgo cardiovascular ( HTA, obesidad, colesterol elevado, diabetes)"
  },
];



const styles = {
  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mb: { xs: 5, md: 0 },
  },
  image: {
    width: "80%",
    maxWidth: 400,
    borderRadius: "50%",
    border: "5px solid white",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    objectFit: "cover",
  },
  name: {
    mt: 2,
    fontWeight: 700,
    fontSize: { xs: "1.2rem", md: "1.5rem" },
    color: "#01a198",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  introText: {
    mt: 3,
    mb:-6,
    fontSize: { xs: "1rem", md: "1.2rem" },
    fontFamily: "Poppins",
    textAlign: "center",
    color: "#333",
  },
  sectionTitle: {
    mt: 4,
    mb: 2,
    fontWeight: 800,
    fontSize: { xs: "1.4rem", md: "2rem" },
    color: "#01a198",
    fontFamily: "Poppins",
  },
  description: {
    fontSize: "1rem",
    fontFamily: "Poppins",
    textAlign: "justify",
    color: "#444",
    mb: 3,
  },
  listItem: {
    fontSize: "1rem",
    fontFamily: "Poppins",
    color: "#444",
    ml: 2,
  },
};

export const AboutUs = () => {
  return (
    <Box
      sx={{
        // bgcolor: "#F5F5F5",
        backgroundColor: 'white',
        py: 1,
        px: { xs: 2, md: 6 },
        borderRadius: 7,
        mt: { xs: 3, md: 3, lg: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.8rem", md: "2.8rem" },
            color: "#01a198",
            fontFamily: "Poppins",
            letterSpacing: { xs: ".1rem", md: ".2rem" },
            mb: 5,
          }}
        >
          Acerca de mí
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={styles.imageWrapper}>
              <img
                src={elizabethfoto}
                alt="Dra. Pura Pérez"
                style={styles.image}
              />
              <Typography variant="h1" sx={styles.name}>
                Dra. Pura Elizabeth Pérez
              </Typography>
              <Typography sx={styles.introText}>
                Hola, soy la Dra. Pura Pérez, médico cardióloga pediátrica. Me
                dedico a cuidar el corazón de los niños desde el nacimiento
                hasta la adolescencia.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography sx={styles.description}>
              He dedicado los últimos 10 años a trabajar con niños y
              adolescentes en el área de Cardiología. Nuestro enfoque va desde
              la prevención de enfermedades cardiovasculares hasta el
              diagnóstico y manejo de cardiopatías congénitas, adquiridas y
              arritmias.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "#01a198", mb: 2 }}
                align="center"
              >
                Servicios Especializados
              </Typography>

              <List sx={{ maxWidth: 600, margin: "0 auto" }}>
                {services.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h2"
                          sx={{
                            color: "#444",
                            fontSize: "1rem",
                            fontWeight: 500,
                          }}
                        >
                          {item.text}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
