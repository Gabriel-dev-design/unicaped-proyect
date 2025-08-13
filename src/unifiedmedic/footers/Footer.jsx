import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid2, Typography,  Link as MuiLink, } from "@mui/material";
import Link from "@mui/material/Link";
import ScheduleCard from "../components/Utilities/ScheduleCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Footer = () => {
  return (
    <Box
      sx={{
        background: "#2C2C2C  ",
      }}
    >
      <Grid2
        container
        align="center"
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: { xs: "space-between" },
        }}
      >
        <Grid2
          item
          size={{ xs: 12, md: 3 }}
          sx={{ mr: { xs: 5, lg: 0 }, mt: 3 }}
        >
          <Typography component="div" color="#FFFFFF">
            <ScheduleCard />
          </Typography>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 4 }} sx={{ mt: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              align="center"
              className="footer_underline_titulo"
              sx={{
                fontSize: { xs: "1.8rem", md: "1.8rem" },
                textAlign: "center",
                mb: { xs: 2, md: 3 },
                mt: { xs: 4, md: 1 },
                color: "#01a198",
                fontFamily: "Poppins",
                fontWeight: "800",
                letterSpacing: { xs: ".2rem", md: ".5rem" },
              }}
            >
              Contáctanos
            </Typography>

            <Typography variant="h6" color="#FFFFFF" sx={{ mt: 1 }}>
              Torre KP – Próx. al Centro Médico UCE.
            </Typography>
            <Box
              sx={{
                // backgroundColor: "#01a198",
                p: 1,
              }}
            >
              {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="body2"
                  color="#FFFFFF"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "1rem",
                    mb: 1,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: "1.5rem" }} />
                  Av. Pedro Henríquez Ureña 83, Sto. Dgo.
                </Typography>
              </Box> */}

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href="https://www.google.com/maps/place/Dra.+Pura+Perez+Cardi%C3%B3loga+Pediatra/@18.4714631,-69.9146313,17z/data=!3m1!4b1!4m6!3m5!1s0x8ea56309aae5ddc3:0x9d572b448aec0c24!8m2!3d18.4714631!4d-69.9146313!16s%2Fg%2F11s2kq92rt?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    color="#FFFFFF"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: "1rem",
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: "1.5rem" }} />
                    Av. Pedro Henríquez Ureña 83, Sto. Dgo.
                  </Typography>
                </Link>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="mailto:unicaped@gmail.com?subject=Consulta&body=Hola%20me%20gustaría%20más%20información"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    color="#FFFFFF"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: "1rem",
                      mb: 1,
                    }}
                  >
                    <EmailIcon sx={{ fontSize: "1.5rem" }} />
                    Email: unicaped@gmail.com
                  </Typography>
                </a>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href="tel:+18496075958"
                  underline="none"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    color="#FFFFFF"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: "1rem",
                    }}
                  >
                    <SmartphoneIcon sx={{ fontSize: "1.5rem" }} />
                    Tel: (849) 607-5958
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>

          <hr />

          <Typography variant="h6" color="#FFFFFF" sx={{ mt: 2 }}>
            Centro Medico Universal
          </Typography>
          <Box
            sx={{
              // backgroundColor: "#01a198",
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                href="https://maps.app.goo.gl/kLZh2KKzgsqzNhdo7"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  color="#FFFFFF"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "1rem",
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: "1.5rem" }} />
                  C. Club Rotario 58, Santo Domingo Este.
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <a
                href="mailto:unicaped@gmail.com?subject=Consulta&body=Hola%20me%20gustaría%20más%20información"
                underline="hover"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  color="#FFFFFF"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "1rem",
                    mb: 1,
                  }}
                >
                  <EmailIcon sx={{ fontSize: "1.5rem" }} />
                  Email: unicaped@gmail.com
                </Typography>
              </a>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                href="tel:+18496075958"
                underline="none"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  color="#FFFFFF"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "1rem",
                  }}
                >
                  <SmartphoneIcon sx={{ fontSize: "1.5rem" }} />
                  Tel: (849) 607-5958
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid2>

        <Grid2
          item
          size={{ xs: 12, md: 3 }}
          sx={{ display: "flex", justifyContent: "center", mt: 3 }}
        >
          <Box
            component="nav"
            sx={{
              width: "100%",
              transition: "all 0.3s linear",
              //   boxShadow: "2px 2px 8px 0px rgba(0,0,0,.4)",
              ml: 1,
            }}
          >
            <Typography
              align="center"
              className="footer_underline_titulo"
              sx={{
                fontSize: { xs: "1.8rem", md: "1.8rem" },
                textAlign: "center",
                mb: { xs: 2, md: 3 },
                mt: { xs: 5, md: 1 },
                color: "#01a198",
                fontFamily: "Poppins",
                fontWeight: "800",
                letterSpacing: { xs: ".2rem", md: ".5rem" },
              }}
            >
              Síguenos
            </Typography>
            {/* Contenedor de íconos como lista horizontal */}
            <Box
              component="ul"
              sx={{
                display: "flex", // Alineación horizontal
                justifyContent: "center", // Centra los íconos horizontalmente
                alignItems: "center", // Centrado vertical si es necesario
                listStyle: "none", // Elimina los estilos de lista
                padding: 0, // Quita el padding predeterminado
                margin: 0, // Quita el margen predeterminado
                gap: 2, // Espaciado entre íconos
              }}
            >
              {/* Ícono Facebook */}
              <Box component="li">
                <Box
                  component="a"
                  href="https://www.facebook.com/puracardioped/"
                  target="blank" //www.facebook.com/puracardioped/"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#4267B2",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <FacebookOutlined sx={{ fontSize: "24px" }} />
                </Box>
              </Box>

              {/* Ícono Twitter */}
              <Box component="li">
                <Box
                  component="a"
                  href="https://www.linkedin.com/in/dra-pura-perez-castro-856999233?trk=contact-info"
                  target="_blank"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#1DA1F2",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: "24px" }} />
                </Box>
              </Box>

              {/* Ícono Instagram */}
              <Box component="li">
                <Box
                  component="a"
                  href="https://www.instagram.com/dra.pura_cardioped?igsh=MTJyaGZueGo1NGhueQ=="
                  target="_blank"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#E1306C",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <Instagram sx={{ fontSize: "24px" }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      <Box mt={5}>
        <hr style={{ borderColor: "#444" }} />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#FFFFFF", mt: 2 }}
        >
          © {new Date().getFullYear()}{" "}
          <MuiLink
            href="https://drapuraperez.com/"
            underline="hover"
            color="inherit"
          >
            drapuraperez.com
          </MuiLink>
          . Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};
