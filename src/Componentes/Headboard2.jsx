import combo from '../img/combogaseosa.png'

import  '../css/main.css'

const Headboard=()=>{
    return(
        <body id='fondo' > 
        <div class="textblack py-3" id='wrap'  >  
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
                        <a href="#" class="btn btn-outline-secondary btn-lg text-black">
                            Ver combos
                        </a>
                    </div>
                    
                    <div class="col-md-6" id='tamañofoto'>
                    <img  src={combo} alt=" Imagen del Producto"  />
                    </div>
                    
                </div>
            </div>
        </div>
        
        </body>
    )
}
export default Headboard2