import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { TbCoinFilled } from "react-icons/tb";
import TopLogo from "../../public/Logo-&-OtherPicture/Snap-Bazaar-Brand.png";
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function Header({ Coin, coinPulse }) {
    const location = useLocation();

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

                {/* Mobile Coin Box */}
                <div className={`coin-box d-block d-md-none fs-6 ${coinPulse ? 'coin-pulse' : ''}`}>
                    {Math.round(Coin)} Coin <TbCoinFilled size={20} color="goldenrod" />
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
                </Navbar.Collapse>

                {/* Desktop Coin Box */}
                <div className={`coin-box d-none d-md-flex fs-5 ${coinPulse ? 'coin-pulse' : ''}`}>
                    {Math.round(Coin)} Coin <TbCoinFilled size={28} color="goldenrod" />
                </div>

            </Container>
        </Navbar>
    );
}

Header.propTypes = {
    Coin: PropTypes.number.isRequired,
    coinPulse: PropTypes.bool.isRequired,
};

export default Header;