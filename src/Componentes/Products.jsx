import empanada from '../img/empanada.jpg'
import pastel from '../img/pastel.jpg'
import arepa from '../img/arepa.jpg'
import juanvalerio from '../img/juan_valerio.jpg'
import gaseosa from '../img/gaseosa.jpg'
import  '../css/main.css'

const Products=()=>{
    return(
        <body>
            <div className="slogan" align="center" style={{"padding":"80px 0px 0px"}} >
                <strong  style={{"fontSize":"66px", "borderBlockEnd":"0.1px solid black"}} >Nuestro menú</strong> 
                <h1>
                    <strong style={{"fontSize":"32px"}} >Porque no se le dice no a la puntita</strong> 
                </h1>
            </div>

            <h1 align="center" style={{"fontSize":"32px", "fontWeight":"100"}}> 
                    Dinos de que te antojas y nosotros te lo llevamos 
            </h1>
            
            <div style={{"background":"white"}} id='menu' >
             <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                                <img  src={empanada}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Empanadas </h3>
                                <a HREF="/empanada" style={{"color":"#FFAF00", "fontSize":"30px"}}> Ver menú </a>
                            </div>
                        </div>
                        <div class="col-md-4" >
                            <div class=" text-center" id='productos'>
                                <img  src={pastel} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Pasteles</h3>
                                <a HREF="/pastel" style={{"color":"#FFAF00", "fontSize":"30px"}}> Ver menú </a>
                            
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class=" text-center" id='productos'>
                                <img  src={arepa} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Arepas</h3>
                                <a HREF="/arepa" style={{"color":"#FFAF00", "fontSize":"30px"}}> Ver menú </a>
                            
                            </div>
                        </div>
                    </div>            
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6" >
                            <div class=" text-center" id='productos'>
                            
                                <img  src={juanvalerio}  alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Juan valerios </h3>
                                <a HREF="/juanvalerio" style={{"color":"#FFAF00", "fontSize":"30px"}}> Ver menú </a>
                            
                            </div>
                        
                        </div>
                    <div class="col-md-6" >
                        <div class=" text-center" id='productos'>
                            
                                <img  src={gaseosa} alt=" Imagen del Producto"/>
                                <h3 style={{"fontSize":"37px"}}>Bebidas</h3>
                                <a HREF="/bebidas" style={{"color":"#FFAF00", "fontSize":"30px"}}> Ver menú </a>
                            
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