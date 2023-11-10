import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavbarPage() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgrounColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgrounColor();
    window.addEventListener("scroll", changeBackgrounColor);
  });

  return (
    <>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand className="fw-bold fs-4">TechnicalTest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <div className="navlink">
                <NavLink to={"/"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                  Home
                </NavLink>
                <NavLink to={"/login"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                  Login
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
