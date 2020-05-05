import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState();
  const onClickHandler = (selectedKey) => {
    setSelectedNav(selectedKey);
  };
  useEffect(() => {
    setSelectedNav("/map");
  }, [selectedNav]);
  return (
    <Container>
      <Nav justify variant="tabs" defaultActiveKey={selectedNav}>
        <Nav.Item>
          <Nav.Link href="/map">Bản đồ Việt Nam</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/stats">Đồ thị số ca mắc Covid</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Navigation;
