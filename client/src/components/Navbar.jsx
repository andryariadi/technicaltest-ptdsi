import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavbarPage() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>TechnicalTest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <NavLink to={"/"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                Home
              </NavLink>
              <NavLink to={"/login"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
