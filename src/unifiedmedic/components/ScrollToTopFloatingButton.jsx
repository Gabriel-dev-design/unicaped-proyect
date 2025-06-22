import { KeyboardArrowUp } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export const ScrollToTopFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    console.log("ScrollY:", scrollTop); // ← Verifica si esto imprime algo
    setIsVisible(scrollTop > 100);
  };

  const handleScrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
  };

  useEffect(() => {
    // Agrega un listener para detectar el scroll
    window.addEventListener("scroll", handleScroll);
    // Limpia el listener cuando se desmonte el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Renderiza el botón solo si isVisible es true */}
      {isVisible && (
        <Box
        
          onClick={handleScrollToTop}
          sx={{
            zIndex:300, 
            position: "fixed",
            right: 25,
            bottom: 25,
            backgroundColor: "#01a198",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
            border: "2px solid #FFFFFF",
              "&:hover": {
              backgroundColor: "#018877",
            },
          }}
        >
          <KeyboardArrowUp sx={{ fontSize: 30, color: "white" }} />
        </Box>
      )}
    </>
  );
};
