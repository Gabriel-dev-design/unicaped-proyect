// Importación de bibliotecas y componentes necesarios
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Container, IconButton, useMediaQuery } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MainCard from "../../../unifiedmedic/components/Utilities/ServiceCard";
import imagefirst from "/src/assets/imagenes/background/banner_servicios_cardio_v2.jpg";
import imageSecond from "/src/assets/imagenes/background/draperez.mp4";
import imageSecond2 from "/src/assets/imagenes/background/mainbannerpura.jpg";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:700px)");

  const slides = [
    {
      id: 1,
      url: isSmallScreen ? imageSecond : imageSecond2,
      title: "Consulta Especializada",
      serviceTitle: "Servicios de Pediatría Cardíaca",
      description:
        "Evaluaciones exhaustivas para identificar, prevenir y tratar cualquier problema cardíaco o relacionado con la salud de los niños.",
    },
    {
      id: 2,
      url: imagefirst,
      // Puedes activar esto si quieres mostrar texto
      // title: "Ecocardiografía",
      // serviceTitle: "Diagnóstico Avanzado para el Corazón de Tu Hijo",
      // description:
      //   "Estudios detallados y no invasivos del corazón para detectar cualquier anomalía estructural o funcional.",
    },
    // {
    //   id: 3,
    //   url: imageThird,
    //   title: "Electrocardiografía",
    //   serviceTitle: "La Clave para Detectar Problemas Cardíacos Temprano",
    //   description:
    //     "Pruebas precisas para analizar la actividad eléctrica del corazón y detectar ritmos cardíacos anómalos.",
    // },
  ];

  // ANIMACION EN ENTRADA DE LOS CAR MainCard EN CADA SLIDE
  const [animationKey, setAnimationKey] = useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setAnimationKey((prev) => prev + 1); // Esto reinicia la animación
    };

    emblaApi.on("select", onSelect);

    // Llamar inmediatamente para que se sincronice al montar
    onSelect();
  }, [emblaApi]);

  const updateCurrent = () => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  };

  const handleNavigation = (direction) => {
    if (direction === "prev") emblaApi?.scrollPrev();
    if (direction === "next") emblaApi?.scrollNext();
    updateCurrent();
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        mt: { xs: 0, md: -10 },
        pt: "50px", // Espacio para ajustarse debajo del navbar
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ p: 0 }}>
        <Box
          sx={{
            position: "relative",
            height: { xs: "60vh", md: "90vh", lg: "80vh" }, // Cubre todo el viewport menos el espacio del navbar
            width: "100vw", // Cubre todo el ancho de la pantalla
          }}
        >
          {/* Botones de navegación */}
          <Box
            onClick={() => handleNavigation("prev")}
            sx={{
              position: "absolute",
              top: "50%",
              left: "1rem",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: 2,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              width: isSmallScreen ? "1.5rem" : "2rem",
              height: isSmallScreen ? "1.5rem" : "2rem",
              cursor: "pointer",
            }}
          >
            <IconButton aria-label="Navigate Before">
              <NavigateBeforeIcon />
            </IconButton>
          </Box>
          <Box
            onClick={() => handleNavigation("next")}
            sx={{
              position: "absolute",
              top: "50%",
              right: "3rem",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: 2,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              width: isSmallScreen ? "1.5rem" : "2rem",
              height: isSmallScreen ? "1.5rem" : "2rem",
              cursor: "pointer",
            }}
          >
            <IconButton aria-label="Navigate Next">
              <NavigateNextIcon />
            </IconButton>
          </Box>

          {/* Carrusel */}
          <div ref={emblaRef} style={{ overflow: "hidden", height: "100%" }}>
            <Box sx={{ display: "flex", height: "100%" }}>
              {slides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: "0 0 100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {slide.url.endsWith(".mp4") ? (
                    <video
                      autoPlay
                      muted
                      loop
                      style={{
                        objectFit: "fill", // Asegura que el video se vea completo
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <source src={slide.url} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={slide.url}
                      alt={slide.title}
                      style={{
                        aspectRatio: "12/16", // mantiene proporción
                        width: "100%",
                        maxHeight: "100vh",
                      }}
                    />
                  )}

                  {/* Overlay que cubre toda la imagen o video */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0)", // Oscurece la imagen
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      padding: { xs: 2, sm: 3 },
                    }}
                  >
                    <Box
                      key={animationKey} // <-- Fuerza recreación del nodo y reinicia la animación
                      className="animate__animated animate__fadeInUp"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        padding: { xs: 2, sm: 3 },
                      }}
                    ></Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
}

export default EmblaCarousel;
