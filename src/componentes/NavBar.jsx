//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <>

      <header class="navbar-bg">
        <div class="nav-container">
            <a href=""><img src="./images/LOGO.svg" alt="logo"></img></a>
            <li><a href="/">Sobre Nós</a></li>
            <li><a href="/">Nossos Serviços</a></li>
            <li><a href="/">Contato</a></li>

        <li class='links'>
        <li><a href="/login">Login</a></li>
        <li><a href="/Cadastro">Cadastro</a></li>
        </li>
        </div>

      </header>

       {/* <Navbar className='cor'>
          <Container>
            <Navbar.Brand href="/LOGO.svg"></Navbar.Brand>
            <Nav className="me-auto aa">
            <div>
                <Nav.Link href="/">Sobre Nós</Nav.Link>
                <Nav.Link href="#features">Nossos Serviços</Nav.Link>
                <Nav.Link href="#pricing">Contato</Nav.Link>
            </div>
            <div>
                <Container className='LoginBTN'>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Cadastro">Cadastre-se</Nav.Link>
                </Container>   
            </div>
            </Nav>
          </Container>
        </Navbar>
    <br />*/}
      </>
    );
  }
  
  export default NavBar;