
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

import ButtonCita from "../Utilities/ButtonCita";


const settings = ["Profile", "Account", "Dashboard", "Logout"];


export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const handleToggleDrawer = () => {
   
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
            transform: "translate(-50%,-50%)",

            minWidth: "75vw",
            mt: { xs: 4, md: 0 },
            zIndex: 30,
            bgcolor: "#01a19840",
            // bgcolor: "rgba(38, 34, 84, 0.3)",
            maxWidth: { xs: "gl", ms: "sm", md: "md", lg: "xl" },
            boxShadow: " rgba(0, 0, 0, 0.50) 0px 5px 15px",
          }}
        >
          <Container maxWidth="lg">
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

              <Typography
                variant="h5"
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  wrap: "noWrap",
                }}
              >
                {/* UNICAPED */}

                <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                  <img src="/src/assets/imagenes/logo1.png" alt="" width="90"/>
                </Box>
              </Typography>
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
                    wrap: "noWrap",

                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <HomeIcon />
                </IconButton>

                {/* {navlinks.map((item) => (
                  <Button
                    className="linkhover"
                    key={item.title}
                    color="inherit"
                    component={NavLink}
                    to={item.path}
                    sx={{
                      mr: 2,
                      p: 2.5,
                      // display: { xs: "flex", md: "none" },
                      fontFamily: "monospace",
                      fontWeight: 800,
                      letterSpacing: ".1rem",
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "18px",
                      wrap: "noWrap",
                    }}
                  >
                    {item.title}
                  </Button>
                ))} */}
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

              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
