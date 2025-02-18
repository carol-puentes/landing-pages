import arepa_combo from '../img/arepa.jpg'
import pasteles_combo from '../img/pasteles_combo.jpeg'
import gaseosa from '../img/gaseosa.jpg'

import  '../css/main.css'

const Headboard_e=()=>{
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
                            
                                <img  src={arepa_combo}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Arepas</h3>
                                <a href="/arepa" class="btn btn-warning btn-lg boton">
                                    Ver menú 
                                </a> 
                            </div>
                        </div>
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={pasteles_combo} alt=" Imagen del Producto"/>
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
                                </a>                            </div>
                        </div>
                    </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}
export default Headboard_e