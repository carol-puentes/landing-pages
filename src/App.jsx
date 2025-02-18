import Headboard from "./Componentes/Headboard"
import Nav from "./Componentes/Nav"
import Pagina_principal from "./Componentes/Pagina_principal"
import {Route, Routes} from 'react-router-dom'
import Empanada from "./Componentes/Empanada"
import Footer from "./Componentes/footer"
import JuanVa from "./Componentes/JuanVa"
import Arepas from "./Componentes/Arepas"
import Pastel from "./Componentes/Pastel"
import Contact from "./Componentes/Contact"
import Bebidas from "./Componentes/Bebidas"
import Combos from "./Componentes/Combos"
import Nuestra_marca from "./Componentes/Nuestra_marca"


function App() {
  return (
    <div className='App'>
      <Nav/>

      <Routes>
        <Route path="/" element = <Pagina_principal/> />    
      </Routes>

      <Routes>
        <Route path="/contactenos" element = <Contact/> />    
      </Routes>

      <Routes>
        <Route path="/empanada" element = <Empanada/> />
      </Routes> 

      <Routes>
        <Route path="/pastel" element = <Pastel/> />
      </Routes> 

      <Routes>
        <Route path="/arepa" element = <Arepas/> />
      </Routes> 
      
      <Routes>
        <Route path="/juanvalerio" element = <JuanVa/> />
      </Routes> 

      <Routes>
        <Route path="/bebidas" element= <Bebidas/> />
      </Routes>

      <Routes>
        <Route path="/Headboard%3E" element= <Headboard/> />
      </Routes>

      <Routes>
        <Route path="/combos" element = <Combos/> />    
      </Routes>

      <Routes>
        <Route path="/sobre_nosotros" element = <Nuestra_marca/> />    
      </Routes>

      <Footer/>
    
      
    </div>
    
  )
}

export default App