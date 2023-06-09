import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import BuscaPrestador from './pages/BuscaPrestador'
import NotificacaoPrestador from './pages/NotificacaoPrestador'
import PerfilPrestador from './pages/PerfilPrestador'
import HomePrestador from './pages/HomePrestador'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/buscaprestador" element={<BuscaPrestador/>}/>
        <Route path="/notificacaoprestador" element={<NotificacaoPrestador/>}/>
        <Route path="/perfilprestador" element={<PerfilPrestador/>}/>
        <Route path="/homeprestador" element={<HomePrestador/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
