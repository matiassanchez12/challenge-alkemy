import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="new">
            <p style={{ color: "white" }}> App</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
