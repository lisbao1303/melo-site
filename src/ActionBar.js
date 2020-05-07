import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function ActionBar(props) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const path = () => {
    switch (props.text) {
      case "Ferramentas":
        return "/ferramentas";
      case "Contato":
        return "/contato";
      case "Localização":
        return "/sobre";
      default:
        return "/";
    }
  };
  return (
    <Navbar className="" color=" shadow  bg-primary" dark expand="md">
      <NavbarBrand className="text-warning" href={path}>
        <FontAwesomeIcon icon={props.icon} /> {props.text}
      </NavbarBrand>
      <div className="space"></div>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={!isOpen} navbar>
        <Nav className="mr-auto " navbar>
          <NavItem>
            <NavLink className="text-white" href="/ferramentas">
              Ferramentas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="/sobre">
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="/contato">
              Contato
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default ActionBar;
