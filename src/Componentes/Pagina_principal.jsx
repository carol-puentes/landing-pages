
import  '../css/main.css'

import Carrusel from "./Carrusel";
import Headboard from "./Headboard";
import Landing_page from "./Landing_page";
import Nav2 from './Nav2';

import Products from "./Products";

const Pagina_principal=()=>{
    return(
        <div>
            <Nav2/>
            <Carrusel/>
            <Landing_page/>
            <Products/>
            <Headboard/>
        </div>
    )
}
export default Pagina_principal