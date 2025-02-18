import Carrusel from "./Carrusel"
import Nav2 from "./Nav2"

const Nuestra_marca=()=>{
    return (
        <body>
            <Nav2/>
            <Carrusel/>
            <div class="textblack py-3" id='color'>
                <div class="container"> 
                <h1 style={{"fontSize":"45px", "padding":"10px"}} class="text-center"> 
                    <strong > El sabor de la empanada </strong>
                </h1>
                <p id='texto' >El sabor de la empanada  es un restaurnte de comida frita, que nace en Neiva 
                como un proyecto desarrollado por los estudiantes de la universidad surcolombiana en el año 2022
                bajo el conocido y divertido slogan "Porque no se le dice no a la puntita"</p>
                <h1 class="text-center" >
                    <a href="/#menu" class="btn btn-warning btn-lg  boton ">
                        Conoce nuetro menú
                    </a>    
                </h1>
                
            </div>
        </div>
        </body>
    )
}
export default Nuestra_marca