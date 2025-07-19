 import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography, Zoom } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  AddIcCallOutlined,
  // CalendarMonth,
  WhatsApp,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/imagenes/icons/logo1.png";
import ButtonCita from "../Utilities/ButtonCita";
import { CustomButton } from "../Utilities/CustomButton";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const FirstNavBar = ({ toggleDrawer, handleScroll, isDrawerOpen }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          // bgcolor: "rgba(38, 34, 84, 0.1)",
          boxShadow: " rgba(0, 0, 0, 0.50) 0px 5px 15px",
          // background: `radial-gradient(circle, rgba(222,35,34,0.8) 0%, rgba(1,161,152,0.7) 100%)`,
          bgcolor: "#018679",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Toolbar disableGutters>
            <Grid sx={{ display: "flex", width: "100%", alignItems: "center" }}>
              <Box
                component={NavLink}
                to="/"
                aria-label="Ir a Home"
                title="Ir a Home"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: { xs: 1, md: 2 }, // Espaciado dinámico
                  backgroundColor: "#FFFFFF", // Fondo blanco
                  borderRadius: { xs: 4, md: 8 }, // Bordes redondeados ajustables
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)", // Sombra más prominente
                  height: { xs: 40, md: 50 }, // Ajuste de altura dinámica
                  width: { xs: 100, md: 140 }, // Ajuste de ancho dinámico
                  overflow: "hidden", // Evita desbordes
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transiciones suaves
                  "&:hover": {
                    transform: "scale(1.01)", // Aumenta ligeramente el tamaño al hacer hover
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)", // Sombra más intensa
                  },
                }}
              >
                <img
                  aria-label="Logo"
                  src={logo}
                  alt="Logo"
                  onClick={() => handleScroll("home")}
                  style={{
                    width: "100%", // Ajusta el ancho al contenedor
                    height: "auto", // Mantiene la proporción de la imagen
                    objectFit: "contain", // Asegura que la imagen se ajuste sin recortes
                    filter: "brightness(1.3)", // Incrementa el brillo para mejor claridad
                    transition: "filter 0.2s ease", // Transición suave del filtro
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexGrow: 1,
                  p: 1,
                }}
              >
                <Box sx={{ width: { xs: 110, md: 125, lg: 150, xl: 200 } }}>
                  {/* <img src={logo} alt="" /> */}
                </Box>

                <Typography
                  className="glowing-btn"
                  component="div" // Cambiar el elemento HTML generado a un <div>
                  sx={{
                    mr: 2,
                    ml: 1,
                    width: "175px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    className="glowing-txt"
                    component="span" // Usar <span> en lugar de <p> para evitar jerarquías incorrectas
                    sx={{
                      ml: 0.5,
                      mt: 0.5,
                      mb: 0.5,
                      fontSize: { xs: 8, md: 12, lg: 16 },
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                      letterSpacing: ".1rem",
                    }}
                  >
                    HAGA SU CITA
                  </Typography>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexGrow: 1,
                }}
              >
                <IconButton
                  component="a"
                  // href="https://taplink.cc/dra.puraperez"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    borderRadius: 10,
                    fontFamily: "monospace",
                    color: "inherit",
                    textDecoration: "none",
                    width: 184,
                  }}
                >
                  {/* <ButtonCita />  */}
                </IconButton>
              </Box>

              {/* ICONOS PARA CELULAR */}

              <Box
                onClick={toggleDrawer}
                sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
              >
                <IconButton
                  aria-label="Menú principal"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 3,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.07)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                    transform: isDrawerOpen ? "rotate(90deg)" : "none",
                    "&:hover": {
                      backgroundColor: "rgba(1, 161, 152, 0.15)",
                      transform: "scale(1.1)",
                      boxShadow: "0 6px 20px rgba(1, 161, 152, 0.4)",
                    },
                    position: "relative",
                  }}
                >
                  <Zoom in={!isDrawerOpen} timeout={300} unmountOnExit>
                    <MenuIcon
                      sx={{
                        fontSize: 30,
                        color: "#FFFFFF",
                        position: "absolute",
                      }}
                    />
                  </Zoom>
                  <Zoom in={isDrawerOpen} timeout={300} unmountOnExit>
                    <CloseIcon
                      sx={{
                        fontSize: 40,
                        color: "#de2322",
                        position: "absolute",
                      }}
                    />
                  </Zoom>
                </IconButton>
              </Box>

              {/* MENU SETTINGS */}
              {/*
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt="Gemy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
