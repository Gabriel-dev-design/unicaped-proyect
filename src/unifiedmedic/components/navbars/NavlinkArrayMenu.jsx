import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export const navlinks = [
  {
    title: "Nosotros",
    path: "/#about",
    icon: <InfoIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />,
  },
  // {
  //   title: "Nuestros Servicios",
  //   path: "/#services",
  //   icon: <MedicalServicesIcon sx={{ color: "#de2322", fontSize: 40 }} />,
  // },
  {
    title: "ARS",
    path: "/#ars",
    icon: <LocalHospitalIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />,
  },
  {
    title: "Como Llegar",
    path: "/#map",
    icon: <LocationOnIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />,
  },
  {
    title: "Contáctanos",
    path: "/#footer",
    icon: <ContactPhoneIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />,
  },
];
