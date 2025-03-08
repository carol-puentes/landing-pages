import gaseosa from '../img/bebida.jpg'
import empanada from '../img/empanadas.jpeg'
import fondo from '../img/fondo.jpg'
import '../css/main.css'
const Carrusel=()=>{
    return(
        
    <body>
    <div id="conteItemsCarrusel" >
        <div class="itemCarrusel" id="itemCarrusel1">
            <div class="tarjetaCarrusel" id="tarjetaCarrusel1" align="center" >
                <img src={fondo} alt="item1-Carrusel"/>
            </div>
            <div class="flechasCarrusel">
                <a href="#itemCarrusel3"> 
                    <i1 class="fas fa-chevron-left"></i1>
                </a>
                <a href="#itemCarrusel2"> 
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
        <div class="itemCarrusel" id="itemCarrusel2">
            <div class="tarjetaCarrusel" id="tarjetaCarrusel2" align="center">
                <img src={empanada} alt="item2-Carrusel"/>
            </div>
            <div class="flechasCarrusel">
                <a href="#itemCarrusel1"> 
                    <i1 class="fas fa-chevron-left"></i1>
                </a>
                <a href="#itemCarrusel3"> 
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
        <div class="itemCarrusel" id="itemCarrusel3">
            <div class="tarjetaCarrusel " id="tarjetaCarrusel3" >
                <img src={gaseosa} alt="item2-Carrusel"/>
            </div>
            <div class="flechasCarrusel">
                <a href="#itemCarrusel2"> 
                    <i1 class="fas fa-chevron-left"></i1>
                </a>
                <a href="#itemCarrusel1"> 
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    </div>
    
    </body>
    )
}
export default Carrusel;
