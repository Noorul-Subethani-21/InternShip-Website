import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import "./Navbar2.css";
function Navbar2() {
  return (
    <Navbar expand="lg" className="logo bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ position: "relative", left: "50%" }}
          >
            <NavLinkTransparentHover href="#home">Home</NavLinkTransparentHover>
            <NavLinkSmoothHover href="#link">Service</NavLinkSmoothHover>
            <NavLinkSmoothHover href="#link">Portfolio</NavLinkSmoothHover>
            <NavLinkSmoothHover href="#link">Process</NavLinkSmoothHover>

            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavLinkSmoothHoverDropdownItem href="#action/3.1">
                Company OverView
              </NavLinkSmoothHoverDropdownItem>
              <NavLinkSmoothHoverDropdownItem href="#action/3.2">
                Our Vision & Mission
              </NavLinkSmoothHoverDropdownItem>
              <NavLinkSmoothHoverDropdownItem href="#action/3.3">
                Why choose us?
              </NavLinkSmoothHoverDropdownItem>
              <NavLinkSmoothHoverDropdownItem href="#action/3.4">
                Message from CEO
              </NavLinkSmoothHoverDropdownItem>
            </NavDropdown>
            <NavLinkSmoothHover href="#link">Careers</NavLinkSmoothHover>
            <NavLinkSmoothHover href="#link">Contact</NavLinkSmoothHover>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Custom NavLink component with transparent hover effect for "Home"
const NavLinkTransparentHover = ({ children, ...props }) => (
  <Nav.Link {...props} className="transparent-hover-btn">
    {children}
  </Nav.Link>
);

// Custom NavLink component with smooth hover effect
const NavLinkSmoothHover = ({ children, ...props }) => (
  <Nav.Link {...props} className="smooth-hover-btn">
    {children}
  </Nav.Link>
);

// Custom NavDropdown.Item component with smooth hover effect
const NavLinkSmoothHoverDropdownItem = ({ children, ...props }) => (
  <NavDropdown.Item {...props} className="smooth-hover-btn">
    {children}
  </NavDropdown.Item>
);

export default Navbar2;
