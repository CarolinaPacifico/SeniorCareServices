import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../img/LOGO.svg'

function NavBar() {
    return (
      <>
      <Navbar className='cor'>
          <Container>
            <Navbar.Brand href="/home"><img
          className="d-block w-100"
          width={15}
          height={60}
          src={img}
          alt="First slide"
        /></Navbar.Brand>
            <Nav className="me-auto aa">
            <div>
                <Nav.Link href="/">Sobre Nós</Nav.Link>
                <Nav.Link href="#features">Nossos Serviços</Nav.Link>
                <Nav.Link href="#pricing">Contato</Nav.Link>
            </div>
            <div>
                <Container className='LoginBTN'>
                <Nav.Link href="/Login">Login</Nav.Link>
                </Container> 
                <Container className='CadastroBTN'>
                <Nav.Link href="/Cadastro">Cadastre-se</Nav.Link>
                </Container>
                  
            </div>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavBar;