import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Container fluid>
      <nav className="navbar">
        <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/map"
        >
          Bản đồ Việt Nam
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/stats"
        >
          Đồ thị số ca mắc Covid
        </NavLink>
      </nav>
    </Container>
  );
};

export default Navigation;
