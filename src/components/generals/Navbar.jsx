import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavbarComponent() {
  const categories = [
    {
      id: "Action",
      name: "Acción",
    },
    {
      id: "Comedy",
      name: "Comedia",
    },
    {
      id: "Magic",
      name: "Magia",
    },
    {
      id: "Science",
      name: "Ciencia",
    },
    {
      id: "SuperNatural",
      name: "Sobre Natural",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav>
          <Link to={"/"} className="text-decoration-none text-white">
            Manga Spot
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="category-nav-dropdown">
          <Nav className="me-auto">
            <NavDropdown
              title="Categorias"
              id="nav-dropdown"
              menuVariant="dark"
              active={false}
            >
              {categories.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="text-white font-weight-bold text-decoration-none dropdown-item"
                >
                  {category.name}
                </NavLink>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className="text-right">
          <Link to={"/cart"} className="text-decoration-none text-white">
            <CartWidget></CartWidget>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
