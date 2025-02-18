import empanada from '../img/empanada.jpg'
import pastel from '../img/pastel.jpg'
import gaseosa from '../img/gaseosa.jpg'

import  '../css/main.css'

const Headboard_a=()=>{
    return(
        
        <div class="textblack py-3" id='color'>
            <div class="container"> 
                <div class="row"> 
                    <div class="col-md-12" align="center">
                        <h1 id='titulo'> 
                            <strong > Otros recomendados </strong>
                        </h1>
                    </div>   
                    <div class="container">
                    <div class="row">
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={empanada}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Empanadas</h3>
                                <a href="/empanada" class="btn btn-warning btn-lg boton">
                                    Ver menú 
                                </a> 
                            </div>
                        </div>
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={pastel} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Pasteles</h3>
                                <a href="/pastel" class="btn btn-warning btn-lg boton">
                                    Ver menú 
                                </a>                             </div>
                        </div>
                        <div class="col-md-4">
                            <div class=" text-center" id='productos'>
                            
                                <img  src={gaseosa} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Bebidas</h3>
                                <a href="/bebidas" class="btn btn-warning btn-lg boton">
                                    Ver menú 
                                </a>                            
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}
export default Headboard_a