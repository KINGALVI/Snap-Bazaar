import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaDollarSign } from "react-icons/fa6";
import TopLogo from "../../public/Logo-&-OtherPicture/Snap-Bazaar-Brand.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSnapBazaar } from '../Context/Context';
import LoginModal from '../Authentication/Authentication';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    Dollar,
    dollarPulse,
    isLoggedIn,
    loginUser,
  } = useSnapBazaar();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    window.location.reload();
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/cart?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
      <Container>

        {/* Brand Logo + Name */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 logo-hover">
          <Image
            src={TopLogo}
            alt="Snap Bazaar Logo"
            style={{ maxHeight: '60px', borderRadius: '8px' }}
            fluid
          />
          <span className="fw-bold fs-4 text-primary">Snap Bazaar</span>
        </Navbar.Brand>

        {/* Mobile Dollar Box */}
        <div className={`d-block d-md-none fs-6 dollar-box ${dollarPulse ? 'coin-pulse' : ''}`}>
          ${Dollar.toFixed(2)} <FaDollarSign size={18} color="green" />
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 nav-links" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'nav-active' : ''}>
              <b>Home</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className={location.pathname === '/cart' ? 'nav-active' : ''}>
              <b>Product Cart</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'nav-active' : ''}>
              <b>About Us</b>
            </Nav.Link>
          </Nav>

          {/* Search Input */}
          <InputGroup className="me-3" style={{ maxWidth: '250px' }}>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </InputGroup>

          {/* Login / Logout Button */}
          <div className="d-flex align-items-center gap-3">
            <div className={`d-none d-md-flex fs-5 dollar-box ${dollarPulse ? 'coin-pulse' : ''}`}>
              ${Dollar.toFixed(0)} <FaDollarSign size={24} color="green" />
            </div>
            {isLoggedIn ? (
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="outline-primary" onClick={() => setShowLoginModal(true)}>
                Login
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>

      {/* Login Modal */}
      <LoginModal
        show={showLoginModal}
        handleClose={() => setShowLoginModal(false)}
        handleLogin={loginUser}
      />
    </Navbar>
  );
}

export default Header;