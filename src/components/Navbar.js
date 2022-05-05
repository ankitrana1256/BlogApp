import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export const AppNavbar = () => {
  return (
    <Navbar color="dark" dark expand fixed="top" light className="navbar">
      <NavbarBrand href="#">Blog</NavbarBrand>
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/create">Create</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
