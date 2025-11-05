import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { TbCoinFilled } from "react-icons/tb";
import TopLogo from "../../public/Logo-&-OtherPicture/Snap-Bazaar-Brand.png";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Header({ Coin }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-lg bg-white rounded">

            <Container>

                <Navbar.Brand as={Link} to="/">
                    <Image
                        style={{ maxHeight: '150px' }}
                        src={TopLogo}
                        alt="Football Logo" />
                    <b>Snap Bazaar</b>
                </Navbar.Brand>

                <b className="d-block d-md-none"
                    style={{
                        fontSize: '10px',
                        display: 'flex', 
                        alignItems: 'center',
                        border: '3px solid black',
                        padding: '5.5px',
                        borderRadius: '10px'
                    }}>
                    {Coin} Coin <TbCoinFilled size={25} color="goldenrod" />
                </b>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">

                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="/"><b>Home</b></Nav.Link>
                        <Nav.Link as={Link} to="/cart"><b>Product Cart</b></Nav.Link>
                        <Nav.Link as={Link} to="/about"><b>About Us</b></Nav.Link>
                    </Nav>

                </Navbar.Collapse>

                <b className="d-none d-md-block"
                    style={{
                        border: '3px solid black',
                        padding: '12.5px',
                        borderRadius: '10px'
                    }}>
                    {Coin} Coin <TbCoinFilled size={35} color="goldenrod" />
                </b>

            </Container>

        </Navbar>
    );
}

Header.propTypes = {
    Coin: PropTypes.number.isRequired
};

export default Header;