// import React from "react";
// import FmdGoodIcon from "@mui/icons-material/FmdGood";
// import SettingsCellOutlinedIcon from "@mui/icons-material/SettingsCellOutlined";
// import styled from "styled-components";
// import imagetorreKp from "/src/assets/imagenes/background/imagenkp.jpg";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   List,
//   ListItem,
//   Link,
//   Box,
// } from "@mui/material";
// import { WhatsApp } from "@mui/icons-material";

// const Boxshadow = styled.div`
//   box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
//     0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
//     0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
//     0 100px 80px rgba(0, 0, 0, 0.12);
// `;

// const CardInfoDn = () => {
//   return (
//     <>
//       <Boxshadow
//         sx={{
//           height: { xs: "auto", md: "100%" },
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Card
//           className="animate__animated animate__fadeInRight"
//           sx={{
//             flexGrow: 1,
//             display: "flex",
//             flexDirection: "column",
//             height: {
//               xs: "auto",
//               md: "350px", // 👈 más bajo en md
//               lg: "400px", // 👈 un poco más alto en lg
//               xl: "100%", // 👈 en XL vuelve a crecer
//             },
//             minWidth: "300px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             overflow: "hidden", // 👈 evita que el contenido se desborde
//           }}
//         >
//           <CardMedia
//             component="img"
//             image={imagetorreKp}
//             alt="Imagen torre KP"
//             sx={{
//               width: "100%",
//               height: {
//                 xs: 200,
//                 sm: 220,
//                 md: 180, // 👈 más bajo en md
//                 lg: 200, // 👈 sube un poco en lg si quieres
//               },
//               objectFit: "cover",
//               objectPosition: "bottom",
//               borderBottom: "1px solid #ddd",
//             }}
//           />
//           {/* Contenido */}
//           <CardContent
//             sx={{
//               flexGrow: 1,
//               display: "flex",
//               flexDirection: "column",
            
//             }}
//           >
//             <Typography variant="h6" component="div" gutterBottom>
//               Torre (KP)
//             </Typography>

//             <Typography variant="body2" gutterBottom>
//               Av. Pedro Henríquez Ureña 83, Sto. Domingo
//             </Typography>

//             <Box component="nav" sx={{ mt: 1 }}>
//               <List disablePadding dense>
//                 <ListItem disableGutters>
//                   <Link
//                     href="https://www.google.com/maps/place/Dra.+Pura+Perez..."
//                     target="_blank"
//                     underline="hover"
//                     sx={{
//                       color: "#007bff",
//                       display: "flex",
//                       alignItems: "center",
//                       textDecoration: "none",
//                     }}
//                   >
//                     <FmdGoodIcon sx={{ mr: 1 }} />
//                     <Typography variant="body2">Ir a Google Maps</Typography>
//                   </Link>
//                 </ListItem>

//                 <ListItem disableGutters>
//                   <Link
//                     href="tel:+8297979456"
//                     underline="hover"
//                     sx={{
//                       color: "#007bff",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <SettingsCellOutlinedIcon sx={{ mr: 1 }} />
//                     <Typography variant="body2">(829) 797-9456</Typography>
//                   </Link>
//                 </ListItem>

//                 <ListItem disableGutters>
//                   <Link
//                     href="https://wa.me/8297979456"
//                     underline="hover"
//                     sx={{
//                       color: "#007bff",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <WhatsApp sx={{ mr: 1, color: "#25d366" }} />
//                     <Typography variant="body2">WhatsApp</Typography>
//                   </Link>
//                 </ListItem>
//               </List>
//             </Box>
//           </CardContent>
//         </Card>
//       </Boxshadow>
//     </>
//   );
// };
// export default CardInfoDn;

//************************************* */
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SettingsCellOutlinedIcon from "@mui/icons-material/SettingsCellOutlined";
import styled from "styled-components";
import imagetorreKp from "/src/assets/imagenes/background/imagenkp.jpg";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  Link,
  Box,
} from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

const Boxshadow = styled.div`

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const CardInfoDn = () => {
  return (
    <>
      <Boxshadow
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          className="animate__animated animate__fadeInRight"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: { xs: "auto", md: "100%" },
            minWidth: 300,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Imagen superior */}
          <CardMedia
            component="img"
            image={imagetorreKp}
            alt="Imagen torre KP"
            sx={{
              width: "100%",
              height: {
                xs: 200,
                sm: 220,
                md: 180, // 👈 más bajo en md
                lg: 200, // 👈 sube un poco en lg si quieres
              },
              objectFit: "cover",
              objectPosition: "bottom",
              borderBottom: "1px solid #ddd",
            }}
          />

          {/* Contenido */}
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto", // 👈 esto permite scroll si es necesario
            }}
          >
            <Typography variant="h6" component="div" gutterBottom>
              Torre (KP)
            </Typography>

            <Typography variant="body2" gutterBottom>
              Av. Pedro Henríquez Ureña 83, Sto. Domingo
            </Typography>

            <Box component="nav" sx={{ mt: 1 }}>
              <List disablePadding dense>
                <ListItem disableGutters>
                  <Link
                    href="https://www.google.com/maps/place/Dra.+Pura+Perez+Cardi%C3%B3loga+Pediatra/@18.4714631,-69.9146313,17z/data=!3m1!4b1!4m6!3m5!1s0x8ea56309aae5ddc3:0x9d572b448aec0c24!8m2!3d18.4714631!4d-69.9146313!16s%2Fg%2F11s2kq92rt?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    underline="hover"
                    sx={{
                      color: "#007bff",
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <FmdGoodIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">Ir a Google Maps</Typography>
                  </Link>
                </ListItem>

                <ListItem disableGutters>
                  <Link
                    href="tel:+8496075958"
                    underline="hover"
                    sx={{
                      color: "#007bff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <SettingsCellOutlinedIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">(849) 607-5958</Typography>
                  </Link>
                </ListItem>

                <ListItem disableGutters>
                  <Link
                    href="https://api.whatsapp.com/send?phone=18496075958&text=Hola%20!%20puedo%20ayudarte?"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      color: "#007bff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <WhatsApp sx={{ mr: 1, color: "#25d366" }} />
                    <Typography variant="body2">WhatsApp</Typography>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Card>
      </Boxshadow>
    </>
  );
};

export default CardInfoDn;
