import logo from '../img/logoempa.jpg'
import  '../css/main.css'
<script src="/src/script.js"> </script>


const Nav=()=>{
    return(

    <header  id='Header' style={{"position":"fixed"}}> {/* El id nos permitira volver el nav statico */}
    <nav  className= "navbar navbar-expand-lg navbar-dark .visible-xs" >

         {/* Insercion de logo */}
        <a className="navbar-brand" href="/">
                <img src={logo} alt="Landing" style={{"width":"20%", "height":"100px"}} />
                <i className='nombre'> EL SABOR DE LA EMPANADA</i>
        </a>

        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id='but' >
            <span className="navbar-toggler-icon" ></span>
            <i id='opcion' >Seleccionar página</i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
                <ul className="navbar-nav ml-auto" align="center">
                    <li className="nav-item ">
                      <a className="nav-link" href= '/#menu' >Nuestro menú</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sobre_nosotros/#texto">Nuestra marca</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contactenos" target="_blank" >Contactenos</a>
                    </li>
                </ul>
            </div>
        </div>
       
    </nav>
    </header>
    )
}
export default Nav