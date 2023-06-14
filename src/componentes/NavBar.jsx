import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../img/LOGO.svg'

function NavBar() {
    return (
      <>
      <div className='header'>
          <Container>
            <Navbar.Brand href="/home"><img
          className="d-block w-100"
          width={15}
          height={60}
          src={img}
          alt="First slide"
        /></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Sobre Nós</Nav.Link>
                <Nav.Link href="#features">Nossos Serviços</Nav.Link>
                <Nav.Link href="#pricing">Contato</Nav.Link>   
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Cadastro">Cadastre-se</Nav.Link> 
            </Nav>
          </Container>
        </div>
      </>
    );
  }
  
  export default NavBar;