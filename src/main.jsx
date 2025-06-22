import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import "./style.css"; 
//import './emblaStyle.css'
import AppUnifiedMedic from "./unifiedmedic/AppUnifiedMedic.jsx";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
     <AppUnifiedMedic/> 
    </BrowserRouter>
       
  </StrictMode>
);
