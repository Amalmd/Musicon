import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Api } from "../api/Api";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const logout = async (e) => {
     e.preventDefault();
     try {
         await Api.get("/logout");
        localStorage.removeItem("userValues");
        navigate("/login");
     } catch {
        console.log("error");
     }
  };

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
              <NavLink className='nav-link' activeclassname="active" to="/about">
                About
              </NavLink>
            </NavItem> 
            <NavItem className="nav-link" onClick={logout} >
              Logout
            </NavItem>
          </Nav>
          <NavbarText>Write in Hebrew Search in Arabic</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
