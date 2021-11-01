import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../Header/header.module.css";

const Header = () => {
  return (
    <>
      <Navbar className={styles.navBar}>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav>
            <Nav.Link className={styles.brand}>
              Bernard Thompson &copy; 2021
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
