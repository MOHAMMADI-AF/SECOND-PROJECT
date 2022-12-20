import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Afghani Rug Store
            <br></br>
            This is a Software Engineering Class Project NOT A REAL STORE
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
