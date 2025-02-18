import combo1 from '../img/combo_1.jpg'
import combo2 from '../img/combo_2.jpeg'
import combo3 from '../img/combo_3.jpg'
import combo4 from '../img/combo_4.png'
import  '../css/main.css'
const Productos_combos=()=>{
    return(
        <body>
            <div className="slogan" align="center" style={{"padding":"80px 0px 0px"}} >
                <strong  style={{"fontSize":"66px", "borderBlockEnd":"0.1px solid black"}} >Combos</strong> 
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
                            <div class="col-md-6" style={{"height":"600px"}}>
                                <div class="contenedor" id='productos'>
                                    <a class="text-center">
                                        <figure >
                                            <img  src={combo1} />
                                            <div class="capa">
                                                <h3>Combo 1</h3>
                                                <p> 3 empanadas + gaseosa personal</p>
                                            </div>
                                        </figure>
                                        <h3 style={{"fontSize":"37px"}}>Combo 1</h3>
                                        <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$12.000 </p>
                                        <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                            Ordenar
                                        </a>
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-6" style={{"height":"600px"}}>
                                <div class="contenedor" id='productos'>
                                    <a class="text-center">
                                        <figure >
                                            <img  src={combo2} />
                                            <div class="capa">
                                                <h3>Combo 2</h3>
                                                <p> 2 arepas quesudas + gaseosa personal</p>
                                            </div>
                                        </figure>
                                        <h3 style={{"fontSize":"37px"}}>Combo 2</h3>
                                        <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$12.000 </p>
                                        <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                            Ordenar
                                        </a>
                                    </a>
                                </div>
                            </div>
                      
                        </div>  

                        <div class="row">
                            <div class="col-md-6" style={{"height":"600px"}}>
                                <div class="contenedor" id='productos'>
                                    <a class="text-center">
                                        <figure >
                                            <img  src={combo3} />
                                            <div class="capa">
                                                <h3>Combo 3</h3>
                                                <p>4 juan valerios  + gaseosa personal</p>
                                            </div>
                                        </figure>
                                        <h3 style={{"fontSize":"37px"}}>Combo 3</h3>
                                        <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$23.000 </p>
                                        <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                            Ordenar
                                        </a>
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-6" style={{"height":"600px"}}>
                                <div class="contenedor" id='productos'>
                                    <a class="text-center">
                                        <figure >
                                            <img  src={combo4} />
                                            <div class="capa">
                                                <h3>Combo 4</h3>
                                                <p> 4 empanadas de carne + gaseosa personal</p>
                                            </div>
                                        </figure>
                                        <h3 style={{"fontSize":"37px", "width":"100%"}}>Combo 4</h3>
                                        <p  style={{"color":"#FFAF00", "fontSize":"30px"}}>$20.000 </p>
                                        <a href="https://api.whatsapp.com/send/?phone=573134281642&text&type=phone_number&app_absent=0" target="_blank" class="btn btn-warning btn-lg boton">
                                            Ordenar
                                        </a>
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
export default Productos_combos