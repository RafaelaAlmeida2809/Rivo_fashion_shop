import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./topMenu.css";

export default function TopMenu() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="sticky-top bg-body-tertiary topMenu"
    >
      <Container>
        <Navbar.Brand href="#home" className="col-4 title">
          Rivo
        </Navbar.Brand>
        <Nav className="d-lg-none d-block">
          <Button variant="">
            <i className="bi bi-bag"></i>
          </Button>
          <Button variant="outline-success">Search</Button>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#shop">SHOP</Nav.Link>
            <Nav.Link href="#offer">OFFER</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="d-none d-lg-block">
          <Button variant="">
            <i className="bi bi-bag"></i>
          </Button>
          <Button variant="outline-success">Search</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
