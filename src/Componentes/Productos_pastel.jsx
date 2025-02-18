import pollo from '../img/pastel_pollo.png'
import huevo from '../img/pastel_huevoycarne.png'
import huevo_arroz from '../img/pastel_huevo.png'
import carne from '../img/pastel_carne.jpeg'
import  '../css/main.css'

const Productos_pastel =()=>{
    return(
        <body>
            <div className="slogan" align="center" style={{"padding":"80px 0px 0px"}} >
                <strong  style={{"fontSize":"66px", "borderBlockEnd":"0.1px solid black"}} >Pasteles</strong> 
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
                                    <img  src={pollo}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>De pollo</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$3.000 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={huevo}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>De huevo y carne</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$3.000 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={huevo_arroz}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>De huevo y arroz</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$3.000 </p>
                                    <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                        Ordenar
                                    </a>
                                </div>
                            </div>

                            <div class="mx-auto d-block" style={{"height":"600px"}}>
                                <div class=" text-center" id='productos'>
                                    <img  src={carne}  alt=" Imagen del Producto" style={{"height":"300px"}}  />
                                    <h3 style={{"fontSize":"37px"}}>De carne</h3>
                                    <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$3.000 </p>
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
export default Productos_pastel ;