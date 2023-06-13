import NavBar from '../componentes/NavBar'
import CardSobre from '../componentes/Cards-Sobre';
import Footer from '../componentes/Footer';
import CardCriadores from '../componentes/Cards-Criadores';
import foto from '../img/Union.svg'
import Carrossel from '../componentes/Carrossel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
      <>
      <div>
          <NavBar/>
          <h1>Sobre Nós</h1>
          <p>Tudo sobre a nossa empresa</p>
          <CardSobre/>

          <h2>O que oferecemos?</h2>
          <p>Nossa empresa promete uma gama de cuidados a seus familiares e amados</p>
            <ul>
              <li>Fácil contratação de cuidadores</li>
              <li>Segurança garantida</li>
              <li>Serviços de ajuda de enfermagem</li>
              <li>Serviços de cuidados à saúde</li>
              <li>Bem-estar físico e mental garantido</li>
            </ul>
            <img
            className="d-block w-100"
            width={200}
            height={245}
            src={foto}></img>
            <CardCriadores/>
            <Footer/>
       </div>
      </>
    )
  }
  
  export default Home;