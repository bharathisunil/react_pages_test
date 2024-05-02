import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar_T.css';

function Tehran_Navbar() {
  return (
    <Navbar expand="lg" className="navbar-dark navbar-box menu-text-color">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="justify-content-center" className="menu-text-color justify-content-center">
          <Nav className="menu-text-color">
            <Nav.Link href="#home" className="menu-text-color">Home</Nav.Link>
            <Nav.Link href="#link" className="menu-text-color">Menu</Nav.Link>
            <Nav.Link href="#link" className="menu-text-color">Hookah</Nav.Link>
            <div className='center-image'></div>
            <Nav.Link href="#link" className="menu-text-color">Happy Hour</Nav.Link>
            <Nav.Link href="#link" className="menu-text-color">Big Party</Nav.Link>
            <Nav.Link href="#link" className="menu-text-color">Book A Table</Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Etc...</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Tehran_Navbar;