import React from "react";
import Image from "react-bootstrap/Image";
import icon from "../../Images/icon.png";

import { Navbar, Nav, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="#home">
        <Image src={icon} className="iconImage"></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="navLink">
            <Button variant="warning" style={{ height: "20px;" }}>
              Buy Now
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
