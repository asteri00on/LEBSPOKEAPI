import {BrowserRouter as Router, Route, Routes, Navigate, Link} from 'react-router-dom';
import Coleccion from './componentes/coleccion'
import Favoritos from './componentes/favoritos'
import Informativa from './componentes/informativa'
import Pokemon from './componentes/pokemon'
import Usuario from './componentes/usuario'
import Inicio from './componentes/inicio'
import './App.css'

function App() {
  return (
    <>

     <Router>
      <nav className='c-menu'>
        <Link to="/">Inicio</Link>        
        <Link to="/coleccion">Coleccion</Link>        
        <Link to="/favoritos">favoritos</Link>        
        <Link to="/informativa">informacion</Link>        
        <Link to="/usuario">usuario</Link>        
        <Link to="/pokemon">Pokemon</Link>  
        </nav>

        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Favoritos' element={<Favoritos/>}/>
          <Route path='/Informativa' element={<Informativa/>}/>
          <Route path='/Usuario' element={<Usuario/>}/>
          <Route path='/Pokemon' element={<Pokemon/>}/>
          <Route path='/Coleccion' element={<Coleccion/>}/>
          <Route path='/Pokemon/:name' element={<Pokemon />}/>
        </Routes>        
      </Router>



    </>
  )
}

export default App



