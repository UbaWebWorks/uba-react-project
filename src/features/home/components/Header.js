import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Container,
} from "react-bootstrap";
import iitrlogo from "assets/images/iitrlogo.png";
import ubalogo from "assets/images/ubalogo.png";
import "./css/Header.css";


export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header className="kuchbhi2" style = {{justifyContent:"center"}}>
        <Container className="kuchbhi2" fluid>
          <Row
            className="header-part"
            style={{ background: "#03506f", height: "1rem" }}
          ></Row>
          <Container className="my-3">
            <Row>
              <Col className="text-center" md={3}>
                <a href="https://www.iitr.ac.in/">
                  <img src={iitrlogo} alt="logo img" />
                </a>
              </Col>
              <Col md={6}>
                <Row className="text-center">
                  <h3>UNNAT BHARAT ABHIYAN</h3>{" "}
                </Row>
                <Row className="text-center">
                  <h3>IIT Roorkee</h3>{" "}
                </Row>
              </Col>
              <Col className="text-center" md={3}>
                <a to="/home">
                  <img src={ubalogo} alt="logo img" />
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
        <Navbar
          className="navBar"
          style={{ background: "#ecc731" ,justifyContent: "center" ,margin:"0 auto" }}
          expand="lg"
          expanded={expanded}
        >
          <Container className="navContainer">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="mx-3" href="/">
                  Home
                </Nav.Link>
                <NavDropdown
                  className="mx-3"
                  title="Initiatives"
                  id="initiatives-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/education">Education</NavDropdown.Item>
                  <NavDropdown.Item href="/health">Health</NavDropdown.Item>
                  <NavDropdown.Item href="/agriculture">Agriculture</NavDropdown.Item>
                  <NavDropdown.Item href="/waste_management">Waste Management</NavDropdown.Item>
                  <NavDropdown.Item href="/shgs">SHGs</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="mx-3"
                  title="Clusters"
                  id="clusters-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/beladi">Beladi</NavDropdown.Item>
                  <NavDropdown.Item href="/rithaura">Rithaura-Grunt</NavDropdown.Item>
                  <NavDropdown.Item href="/gopalpur">Gopalpur</NavDropdown.Item>
                  <NavDropdown.Item href="/meerpur">Meerpur</NavDropdown.Item>
                  <NavDropdown.Item href="/puranpur">Puranpur</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-3" href="/events">
                  Events
                </Nav.Link>
                <NavDropdown
                  className="mx-3"
                  title="Teams"
                  id="teams-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/faculty">Faculty</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown title="Student Teams" id="nested-dropdown">
                    <NavDropdown.Item href="/Studentteam25_26">Team 2025-26</NavDropdown.Item>
                    <NavDropdown.Item href="/studentteam">Team 2023-24</NavDropdown.Item>
                    <NavDropdown.Item href="/Studentteam22_23">Team 2022-23</NavDropdown.Item>
                    <NavDropdown.Item href="/Studentteam21_22">Team 2021-22</NavDropdown.Item>
                    <NavDropdown.Item href="/Studentteam20_21">Team 2020-21</NavDropdown.Item>
                  </NavDropdown>
                  </NavDropdown>
                <Nav.Link className="mx-3" href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
