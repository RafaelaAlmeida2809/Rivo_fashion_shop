import {
  Container,
  Nav,
  Navbar,
  Col,
  Button,
  Form,
  InputGroup
} from "react-bootstrap";
import "./footer.css";

export default function BaseFooter() {
  return (
    <footer className="footer">
      <Container className=" row pt-2 p-lg-4 text-left  d-flex justify-content-evenly">
        <Col className="col-lg-4 text-lg-start px-lg-5">
          <h3 className="title">
            <b>Rivo</b>
          </h3>
          <p>Social Media</p>
          <div className="d-flex justify-content-center  justify-content-lg-start">
            <i className="bi bi-facebook me-2"></i>
            <i className="bi bi-twitter me-2"></i>
            <i className="bi bi-instagram me-2"></i>
          </div>
        </Col>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="col-lg-2 sticky-top d-flex justify-content-center "
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-shop"
            className="btn-toogle title"
          >
            Shop
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-shop"
            className="justify-content-center"
          >
            <Nav className="d-lg-block">
              <Nav.Link
                href="#home"
                className="title d-none d-lg-block text-white"
              >
                <b>Shop</b>
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                Products
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                Overview
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                Pricing
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                Releases
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="col-lg-2 sticky-top  d-flex justify-content-center"
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-company"
            className="btn-toogle title"
          >
            Company
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-company"
            className="justify-content-center"
          >
            <Nav className=" d-lg-block">
              <Nav.Link
                href="#home"
                className="title d-none d-lg-block text-white"
              >
                <b>Company</b>
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                About us
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                Contact
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                News
              </Nav.Link>
              <Nav.Link className="text-white item-link" href="#home">
                Support
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Col className="col-lg-4 col-10">
          <p>Stay up to date</p>
          <InputGroup className="d-flex">
            <Form.Control
              className="inp-base-third"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <Button className="btn-base-third">Button</Button>
          </InputGroup>
        </Col>
      </Container>

      <div className="text-center p-4 pt-lg-0">
        <hr />
        <a className="text-reset fw-bold p-2" href="#terms">
          Terms
        </a>
        <a className="text-reset fw-bold p-2" href="#privacy">
          Privacy
        </a>
        <a className="text-reset fw-bold p-2" href="#cookies">
          Cookies
        </a>
      </div>
    </footer>
  );
}
