import { Typography } from "@mui/material";
import { AppRouter } from "../mainrouter/AppRouter";
import { WhatsAppFlotante } from "./components/WhatsAppFlotante";
import { ScrollToTopFloatingButton } from "./components/ScrollToTopFloatingButton";
import IconoSeguirPuntero from "./components/Utilities/IconoSeguirPuntero ";
import ButtonCita from "./components/Utilities/ButtonCita";
import zIndex from "@mui/material/styles/zIndex";


function AppUnifiedMedic() {
  return (
    <>
      <AppRouter />
      
      {/* <ButtonCita /> */}
       <ButtonCita/> 

        {/* Botón flotante de WhatsApp */}
       <WhatsAppFlotante />

      {/*Botón flotante de ir arriba */}
      <ScrollToTopFloatingButton />
    </>
  );
}
export default AppUnifiedMedic;
