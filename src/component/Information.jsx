import Acordeon from "./Acordeon";
import Card from "./Card";
import NavBar from "./NavBar";
import Footer from "./Footer";

function information(){
    return(
        <div>
            <NavBar/>
           <h1>
           We are an NGO dedicated to the care and preservation of our pets
           </h1>

           <Acordeon/>
           

           <h2>Some of our rescues</h2>
           <Card/>
           <Footer/>
          
        </div>

      

        )
}
export default information;