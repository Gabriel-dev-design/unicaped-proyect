
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { FirstNavBar } from "./FirstNavBar";
import { navlinks } from "./NavlinkArrayMenu";
import { Translate } from "@mui/icons-material";
// import logo from "/src/assets/imagenes/icons/logo1.png";
import logo from "/public/logotitle.png";

import ButtonCita from "../Utilities/ButtonCita";


// const settings = ["Profile", "Account", "Dashboard", "Logout"];


export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const handleToggleDrawer = () => {
   
    setIsDrawerOpen(!isDrawerOpen);
  };


  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
     setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleScroll = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);



  return (
    <>
      {/* First NavBar */}

      <FirstNavBar
        toggleDrawer={handleToggleDrawer}
        anchorElUser={anchorElUser}
        handleOpenUserMenu={handleOpenUserMenu}
        handleScroll={handleScroll}
        isDrawerOpen={isDrawerOpen}
      />

      <Box sx={{ display: "flex", bgcolor: "#F5F5F5" }}>
        <AppBar
          position="fixed"
          className="glassmorphism"
          sx={{
            display: { xs: "none", md: "flex" },
            top: "7%",
            left: "50%",
            transform: "translateX(-50%)", // no necesitas -50% verticalmente
            width: "75vw", // usa width, no minWidth
            zIndex: 30,
            bgcolor: "#01a19840",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.5)",
          }}
        >
          <Container disableGutters maxWidth={false}>
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon aria-label="menu principal" />
                </IconButton>

                <Drawer
                  anchor="left"
                  open={isDrawerOpen}
                  onClose={handleToggleDrawer}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "transparent !important",
                      boxShadow: "none",
                    },
                  }}
                >
                  <NavListDrawer
                    handleScroll={handleScroll}
                    handleToggleDrawer={handleToggleDrawer}
                    drawerOpen={isDrawerOpen}
                  />
                </Drawer>
              </Box>

              {/* LOGO PRIMERA NAVBAR */}

              <Box
                component={NavLink}
                to="/"
                title="Ir al inicio"
                aria-label="Ir al inicio"
                onClick={() => {
                  handleScroll("home");
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "60px",
                  ml: 4,
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img src={logo} alt="Logo" width="40"  />
              </Box>

              {/* FIN LOGO PRIMERA NAVBAR */}

              <Box
                justifyContent="center"
                sx={{ flexGrow: 1, display: { sm: "none", md: "flex" } }}
              >
                <IconButton
                  aria-label=" ir al Home"
                  component={NavLink}
                  to="/"
                  onClick={() => handleScroll("home")}
                  sx={{
                    mr: 2,
                  whiteSpace: "nowrap",

                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <HomeIcon />
                </IconButton>

                {navlinks.map((item) => (
                  <Button
                    key={item.title}
                    component={NavLink}
                    color="inherit"
                    className="linkhover"
                    onClick={() => handleScroll(item.path.replace("/#", ""))}
                    sx={{
                      mr: 2,
                      p: 2.5,
                      fontFamily: "monospace",
                      fontWeight: 800,
                      letterSpacing: ".1rem",
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "18px",
                      whiteSpace: "nowrap", // esto es lo correcto en vez de wrap: noWrap
                      "&:hover": {
                        backgroundColor: "#f0f0f060", // el color que quieras
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
