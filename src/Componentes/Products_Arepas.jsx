import arepa_pollo from '../img/arepa_pollo.jpeg'
import arepa_chicharron from '../img/arepa_chicharron.jpeg'
import arepa_hamburguesa from '../img/arepa_hamburguesa.jpeg'
import arepa_pina from '../img/arepa_pina.jpeg'
import arepa_molleja from '../img/arepa_molleja.jpeg'
import arepa_carne from '../img/arepa_carne.jpeg'


const Products=()=>{
    return(
        <body>
            <div style={{"height":"auto", "background":"white"}}>
             <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={arepa_pollo}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De pollo </h3>
                                <p href="" style={{"color":"#FFAF00", "fontSize":"30px"}}> $7.500 </p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={arepa_chicharron} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De chicharrón</h3>
                                <p href="" style={{"color":"#FFAF00", "fontSize":"30px"}}> $6.000 </p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class=" text-center" id='productos'>
                            
                                <img  src={arepa_hamburguesa} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De hamburguesa</h3>
                                <p HREF="" style={{"color":"#FFAF00", "fontSize":"30px"}}> $10.000</p>
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
                            
                                <img  src={arepa_pina}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De piña </h3>
                                <p HREF="" style={{"color":"#FFAF00", "fontSize":"30px"}}>$5.000</p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>                            </div>
                        
                        </div>
                    <div class="col-md-4" >
                        <div class=" text-center" id='productos'>
                            
                                <img  src={arepa_molleja} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De Mollejas</h3>
                                <p HREF="" style={{"color":"#FFAF00", "fontSize":"30px"}}>$7.500</p>
                                <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                    Ver combos 
                                </a>                        </div>
                    </div>
                     <div class="col-md-4">
                        <div class=" text-center" id='productos'>
                            
                                <img  src={arepa_carne} alt="Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>De Carne</h3>
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
export default Products

