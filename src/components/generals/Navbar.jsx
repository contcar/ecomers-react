import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../CartWidget";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Manga Spot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="text-right">
          <Nav.Link href="">
            <CartWidget></CartWidget>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
