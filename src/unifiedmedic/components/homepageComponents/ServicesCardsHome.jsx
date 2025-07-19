import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import imageFirst from "/src/assets/imagenes/cardsHome/pediatric-cardiology-3.jpg";

import imageThird from "/src/assets/imagenes/cardsHome/ekg_image.jpg";

const services = [
  {
    id: 1,
    image: `${imageFirst}`, // Reemplaza con tu URL de imagen
    title: "Consulta Especializada",
    description:
      "Evaluaciones exhaustivas para identificar, prevenir y tratar cualquier problema cardíaco o relacionado con la salud de los niños.",
  },
  {
    id: 2,
   
    title: "Ecocardiografía",
    description:
      "Estudios detallados y no invasivos del corazón para detectar cualquier anomalía estructural o funcional.",
  },
  {
    id: 3,
    image: `${imageThird}`,
    title: "Electrocardiografía",
    description:
      "Pruebas precisas para analizar la actividad eléctrica del corazón y detectar ritmos cardíacos anómalos.",
  },
];

 const ServicesCardsHome = () => {

   return (
     <Box
       className="animate__animated animate__fadeInUp"
       sx={{
         bgcolor: "#F5F5F5",
         minHeight: "60vh",
         pt: 5,
         pb: 5,
         borderRadius: 7,
       }}
     >
       <Container maxWidth="xl">
         {/* Título Principal */}
         {/* <Typography
           align="center"
           sx={{
             fontSize: { xs: "1.5rem", md: "3rem" },
             mb: { xs: 2, md: 5 },
             mt: { xs: 5, md: 1 },
             color: "#01a198",
             fontFamily: "Poppins",
             fontWeight: "800",
             letterSpacing: { xs: ".2rem", md: ".5rem" },
           }}
         >
           Servicios de Pediatría Cardíaca
         </Typography> */}

         {/* Subtítulo */}
         {/* <Typography
           variant="h6"
           align="center"
           sx={{
             fontSize: { xs: "1rem", md: "1.3rem" },
             marginBottom: 6,
             paddingX: { xs: 2, md: 8 },
             color: "#01a198",
           }}
         >
           Como pediatra cardióloga, ofrezco una atención integral, cálida y
           profesional para garantizar la salud del corazón de los niños.
         </Typography> */}

         {/* Servicios */}
         <Grid container spacing={4}>
           {services.map((service) => (
             <Grid item xs={12} sm={6} md={4} key={service.id}>
               <Card
                 sx={{
                   position: "relative",
                   backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparencia
                   backdropFilter: "blur(5px)", // Efecto glassmorphism
                   borderRadius: 7,
                   boxShadow: "0px 0px 22px rgba(0, 0, 0, 0.08)", // Sombra suave
                   overflow: "hidden",
                   padding: "2rem 1.5rem",
                   "&:hover": {
                     transform: "translateY(-10px)", // Movimiento al hover
                     transition: "all 0.3s ease",
                   },
                 }}
               >
                 {/* Imagen */}
                 <CardMedia
                   component="img"
                   image={service.image}
                   alt={service.title}
                
                   sx={{
                     width: "100%",
                     maxHeight:"250px",
                       
                     borderRadius: 7,
                     objectFit: "cover",
                     
                   }}
                 />

                 {/* Contenido */}
                 <CardContent>
                   <Typography
                     variant="h5"
                     sx={{
                       fontWeight: "bold",
                       marginBottom: 2,
                       textAlign: "center",
                       color: "#d94f70", // Color similar al ejemplo
                     }}
                   >
                     {service.title}
                   </Typography>
                   <Typography
                     variant="body1"
                     sx={{
                       fontSize: "1.01rem",
                       textAlign: "justify",
                       color: "#01a198", // Color de texto del ejemplo
                       margin: "2rem 0",
                     }}
                   >
                     {service.description}
                   </Typography>
                   {/* <Button
                     variant="outlined"
                     fullWidth
                     sx={{
                       fontSize: "1.02rem",
                       border: "1px solid #ffdd00",
                       borderRadius: 5,
                       color: "#ffdd00",
                       "&:hover": {
                         backgroundColor: "#ffdd00",
                         color: "#333",
                       },
                     }}
                   >
                     Ver Más
                   </Button> */}
                 </CardContent>
               </Card>
             </Grid>
           ))}
         </Grid>
       </Container>
     </Box>
   );
 };

export default ServicesCardsHome;
