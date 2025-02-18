import milo_frio from '../img/milo_frio.png'
import jugos_naturales from '../img/jugos_naturales.png'
import milo from '../img/milo.png'
import cafe from '../img/cafe.png'
import capuccino from '../img/capuccino.png'
import  '../css/main.css'

const Productos_bebidas =()=>{
    return(
        <body>
            <div className="slogan" align="center" style={{"padding":"80px 0px 0px"}} >
                <strong  style={{"fontSize":"66px", "borderBlockEnd":"0.1px solid black"}} >Bebidas</strong> 
                <h1>
                    <strong style={{"fontSize":"32px"}} >Resistirse es pecado, comerlas es una bendicion, ¡Las empanadas lo mejor!</strong> 
                </h1>
                
            </div>
            <h1 align="center" style={{"fontSize":"32px", "fontWeight":"100"}}> 
                    Dinos de que te antojas y nosotros te lo llevamos 
                </h1>
            
            
            <div style={{ "background":"white"}} id='menu' >
                <section class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={milo_frio}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>Milo frío</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$7.500 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={jugos_naturales}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>Jugos naturales</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$6.000 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={milo}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>Milo</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$10.000 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>
                        </div>    
                    </div>
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={cafe}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>café</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$5.000 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={capuccino}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>Capuccino</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$7.500 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={capuccino}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>Café con leche</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$9.000 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
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
export default Productos_bebidas ;