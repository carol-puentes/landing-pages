import combo from '../img/combogaseosa.png'

import  '../css/main.css'

const Headboard=()=>{
    return(
        
        <div class="textblack py-3" id='color'>
            <div class="container"> 
                <div class="row"> 
                    <div class="col-md-6 ">
                        <h1 id='titulo'> 
                            <strong> Combos de la casa </strong>
                        </h1>
                        <p id='lema'>
                            <strong> Porque nada mejor que pecar con los amigos</strong>
                        </p>
                        <p id='texto'> No te quedes sin probar cada una de nuestras delicias acompañadas de su buena bebida</p>
                        <a href="/combos" class="btn btn-warning btn-lg  boton">
                            Ver combos
                        </a>
                    </div>
                    
                    <div class="col-md-6" id='tamañofoto'>
                    <img  src={combo} alt=" Imagen del Producto"  />
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
export default Headboard