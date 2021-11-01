import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Container } from "react-bootstrap";
import GiphyLogo from "../../Images/giphy.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <Navbar className={styles.navBar}>
        <Link className={styles.skipLink} to='#landing-page'>
          {" "}
          Skip to main content{" "}
        </Link>
        <Container>
          <Navbar.Brand className={styles.brand}>
            <img
              alt='giphy-logo'
              src={GiphyLogo}
              width='25'
              height='30'
              className='d-inline-block align-top'
            />{" "}
            Giphy App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
