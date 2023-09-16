import { Box } from "@mui/material";
import Carrusel from "./Carrusel";
import NavBar from "./NavBar";
import Footer from "./Footer";


function home(){
    return(
        <div>
         <NavBar/>
         <Carrusel />
         <Box> ESTAS EN LA PAGINA HOME</Box>
         <Footer/>
        </div>
        )
}
export default home;