import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import BottomLogo from '../../public/Logo-&-OtherPicture/Snap-Bazaar-Brand.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>

        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h4>About Us</h4>
            <p>
              We are a passionate team dedicated to delivering curated products and delightful shopping experiences.
            </p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none"><b>Home</b></Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none"><b>Products</b></Link></li>
              <li><Link to="/about" className="text-light text-decoration-none"><b>About</b></Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h4>Subscribe</h4>
            <p>Stay updated with Snap Bazaar’s latest drops and exclusive offers.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="warning">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4 text-center">
          <Col>
            <img src={BottomLogo} alt="Snap Bazaar Logo" width="100" />
            <p className="mt-2 mb-0">©2025 Snap Bazaar. All Rights Reserved.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;