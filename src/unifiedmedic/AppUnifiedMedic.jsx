import { Box, Typography } from "@mui/material";
import { AppRouter } from "../mainrouter/AppRouter";
import { WhatsAppFlotante } from "./components/WhatsAppFlotante";
import { ScrollToTopFloatingButton } from "./components/ScrollToTopFloatingButton";
import IconoSeguirPuntero from "./components/Utilities/IconoSeguirPuntero ";
import ButtonCita from "./components/Utilities/ButtonCita";
import zIndex from "@mui/material/styles/zIndex";
import { CustomButton } from "./components/Utilities/CustomButton";
import { WhatsApp } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


function AppUnifiedMedic() {
  return (
    <>
      <AppRouter />

      {/* <ButtonCita /> */}
      {/* <ButtonCita /> */}

      {/* Ruta interna con React Router: */}

      {/* <Box sx={{ display: { xs: "none", md: "block" } }}>
        <CustomButton
          to="/cita"
          icon={<CalendarMonthIcon sx={{ fontSize: 38 }} />}
          text="Agendar Cita"
          horizontal={25}
          altura={150}
        />
      </Box> */}

      {/* Botón flotante de WhatsApp */}
      {/* <WhatsAppFlotante /> */}

      {/* URL externo */}
      <CustomButton
        to="https://api.whatsapp.com/send?phone=18496075958&text=Hola!%20puedo%20ayudarte?"
        external
        icon={<WhatsApp sx={{ fontSize: 40, ml: {xs:0, md: 1 }, mr: {xs: 0,md:1} }} />}
        text="Escríbenos"
        position="bottom-right"
        horizontal={25}
        altura={80}
      />

      {/*Botón flotante de ir arriba */}
      <ScrollToTopFloatingButton />
    </>
  );
}
export default AppUnifiedMedic;
