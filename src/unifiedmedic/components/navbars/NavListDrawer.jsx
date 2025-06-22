import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { navlinks } from "./NavlinkArrayMenu";

export const NavListDrawer = ({ handleScroll, handleToggleDrawer }) => {
  return (
    <Box
    
      sx={{
        width: "90vw",
        maxWidth: 360,
        height: "100vh",
        px: 3,
        pt: 2,
       
        bgcolor: "rgba(0, 0, 0, 0.05)", // muy transparente
        backdropFilter: "blur(30px)", // blur más fuerte para más claridad
        WebkitBackdropFilter: "blur(30px)",
        borderRadius: "0 20px 20px 0",
        boxShadow: "0 8px 40px rgba(0, 0, 0, 0.6)", // sombra más profunda
        border: "3px solid rgba(255, 255, 255, 0.09)",
        display: "flex",
        flexDirection: "column",
        zIndex: 1300, // asegura que esté sobre el contenido
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <IconButton
          component={NavLink}
          to="/"
          title="Ir al inicio"
          aria-label="Ir al inicio"
          onClick={() => {
            handleScroll("home");
            handleToggleDrawer();
          }}
        >
          <HomeIcon sx={{ fontSize: 32, color: "#01a198" }} />
        </IconButton>

        {/* <IconButton
          onClick={handleToggleDrawer}
          title="Cerrar menú"
          aria-label="Cerrar menú"
        >
          <CloseIcon sx={{ fontSize: 32, color: "#de2322" }} />
        </IconButton> */}
      </Box>

      {/* Nav items */}
      <nav>
        <List>
          {navlinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
               
                component={NavLink}
                to={item.path}
                onClick={() => {
                  handleScroll(item.path.replace("/#", ""));
                  handleToggleDrawer();
                }}
                sx={{
                  borderRadius: 2,
                  px: 2,
                  py: 1.5,
                  mb: 1,
                  color: "#fff",
                  transition: "background 0.3s ease, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(1, 161, 152, 0.3)",
                    transform: "translateX(6px)",
                  },
                  "&.active": {
                    backgroundColor: "rgba(1, 161, 152, 0.3)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#01a198" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: 600,
                        letterSpacing: "0.05rem",
                        textTransform: "uppercase",
                        fontSize: 14,
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
