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

      {/* <Nav className="ml-auto">
        <Nav.Link href="#home" className="navLink">
          <Button
            variant="warning"
            style={{ height: "20px;" }}
            data-glf-cuid="7162d6a9-e7a8-4e2f-9c0c-d17ef4bdd899"
            data-glf-ruid="6a11483f-78fc-41ae-b29f-73dd1656fbf2"
          >
            Order Now
          </Button>
        </Nav.Link>
      </Nav> */}
    </Navbar>
  );
}
