import juanva_pollo from '../img/juanva_pollo.jpeg'
import juanva_carne from '../img/juanva_carne.jpeg'
import juanva_mixto from '../img/juanva_mixto.jpeg'
import juanva_tradicional from '../img/juanva_tradicional.jpeg'
import juanva_quesillo from '../img/juanva_quesillo.jpeg'
import juanva_chorizo from '../img/arepa_carne.jpeg'
import  '../css/main.css'


const Products_Juan=()=>{
    return(
        <body>
            <div style={{"height":"auto", "background":"white"}}>
             <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={juanva_pollo}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De pollo </h3>
                                <p href="" style={{"color":"#FFAF00", "fontSize":"30px"}}> $7.500 </p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={juanva_carne} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De carne</h3>
                                <p href="" style={{"color":"#FFAF00", "fontSize":"30px"}}> $6.000 </p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class=" text-center" id='productos'>
                            
                                <img  src={juanva_mixto} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Mixto</h3>
                                <p HREF="" style={{"color":"#FFAF00", "fontSize":"30px"}}>$10.000 </p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>                            </div>
                        </div>
                    </div>            
                </div>
                <div class="container" style={{"padding":"0px 0px"}}>
                    <div class="row">
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={juanva_tradicional}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Tradicional </h3>
                                <p HREF="" style={{"color":"#FFAF00", "fontSize":"30px"}}>$5.000</p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>                            </div>
                        
                        </div>
                    <div class="col-md-4" >
                        <div class=" text-center" id='productos'>
                            
                                <img  src={juanva_quesillo} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De Quesillo</h3>
                                <p HREF="" style={{"color":"#FFAF00", "fontSize":"30px"}}>$7.500</p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>                        </div>
                    </div>
                     <div class="col-md-4">
                        <div class=" text-center" id='productos'>
                            
                                <img  src={juanva_chorizo} alt="Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De Chorizo</h3>
                                <p HREF="" style={{"color":"#FFAF00", "fontSize":"30px"}}>$9.000</p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>
                        </div>
                    </div>
                </div>            
            </div>
        </section>
        </div>
        </body>
        
    )
}
export default Products_Juan

