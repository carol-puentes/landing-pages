import empanada_combo from '../img/empanada_combo.jpeg'
import pasteles_combo from '../img/pasteles_combo.jpeg'
import bebidas_jugnat from '../img/bebidas_jugnat.jpeg'

import  '../css/main.css'

const Headboard_j=()=>{
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
                            
                                <img  src={bebidas_jugnat} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Bebidas</h3>
                                <a href="#" class="btn btn-warning btn-lg boton">
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
export default Headboard_j