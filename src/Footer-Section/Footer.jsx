import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import BottomLogo from '../../public/Logo-&-OtherPicture/Snap-Bazaar-Brand.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>

        <Row>

          <Col md={4}>
            <h4>About Us</h4>
            <p>We are a passionate team dedicated to providing the best services to our customers.</p>
          </Col>

          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link as={Link} to="/"><b>Home</b></Link></li>
              <li><Link as={Link} to="/cart"><b>Products</b></Link></li>
              <li><Link as={Link} to="/about"><b>About</b></Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h4>Subscribe</h4>
            <p>Subscribe to our Snap Bazaar for the latest updates.</p>

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
            <img src={BottomLogo} alt="Football Logo" width="100" />
            <p className="mt-2">©2025 Your Company. All Rights Reserved.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;