import React, { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Division from "./Division";
import Home from "./Home";
import About from "./About";
import Event from "./Event";
import Team from "./Team";

const NavbarComp = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Router>
      <div>
        <Navbar bg="dark" variasnt={"dark"} expand="lg">
          <Container>
            <Navbar.Brand href={"/"}>
              <Image src={"logo192.png"} className="w-25" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fw-semibold">
                <Nav.Link as={Link} to="/" className="mx-2">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} className="mx-2">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to={"/division"} className="mx-2">
                  Our Division
                </Nav.Link>
                <Nav.Link className="mx-2" id="event" onClick={handleClick}>
                  {active ? "Yudha" : "Event"}
                </Nav.Link>
                <Nav.Link as={Link} to={"/team"} className="mx-2">
                  Team
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/division" element={<Division />}></Route>
          <Route path="/event" element={<Event />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

// NavbarComp.defaultProps = {
//   name: "Event",
// };

export default NavbarComp;
