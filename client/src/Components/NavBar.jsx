import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-header" {...args}>
        <NavbarBrand className="Brand" href="/">Musicon</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav me-auto" color="info" navbar>
            <NavItem>
              <NavLink className='nav-link' activeclassname="active" to="/register">
                Register
              </NavLink>
            </NavItem>
            <NavItem  >
              <NavLink className='nav-link' activeclassname="active" to="/">
                Login
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Write in Hebrew Search in Arabic</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
