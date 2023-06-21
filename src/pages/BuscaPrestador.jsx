import NavBarPrestador from '../componentes/NavBarPrestador'
import CardsPrestador1 from '../componentes/Cards-Prestadores'
import CardsPrestador2 from '../componentes/Cards-Prestadores2'
import CardsPrestador3 from '../componentes/Cards-Prestadores3'
import Footer from '../componentes/Footer'

function BuscaPrestador() {
  return (
    <div>
      <NavBarPrestador/>
      <h1>Prestadores de Serviço Disponíveis</h1>
      <CardsPrestador1/>
      <CardsPrestador2/>
      <CardsPrestador3/>
      <br/>
      <Footer/>
    </div>
  );
}

export default BuscaPrestador;