import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Professional_Players from "../../public/Logo-&-OtherPicture/E-commerce-Carousel-Picture.jpg";
import PropTypes from 'prop-types';

const Carousel = ({ handelSetcoin }) => {
    return (
        <>
            <br />

            <Card className="bg-dark text-white m-2" style={{ borderRadius: '10px' }}>

                <div className='d-flex justify-content-center align-items-center'>
                    <Card.Img
                        className='w-100 h-100'
                        src={Professional_Players}
                        alt="Card image"
                        style={{ filter: 'brightness(35%)', opacity: 0.8 }} />
                </div>

                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>

                    <div>

                        <div className='text-center pb-2'>

                            <Card.Title>

                                <h1 className="d-none d-md-block pb-3">
                                    <b>Discover Deals That Elevate Your Everyday!</b>
                                </h1>

                                <h1 className="d-block d-md-none pt-2" style={{ fontSize: '20.5px' }}>
                                    <b>Discover Deals That Elevate Your Everyday!</b>
                                </h1>

                            </Card.Title>

                            <Card.Text>

                                {/* 🔹 Desktop version */}
                                <span className="d-none d-md-block pb-1">
                                    <b>
                                        Shop top-rated products across fashion, tech, home, and wellness—all in one place.<br />
                                        From exclusive launches to limited-time discounts, explore curated collections<br />
                                        designed to fit your lifestyle and budget. Fast delivery, secure checkout,<br />
                                        and unbeatable value await. Start your shopping journey now!
                                    </b>
                                </span>

                                {/* 🔹 Mobile version */}
                                <span className="d-block d-md-none" style={{ fontSize: '11.5px' }}>
                                    Shop fashion, tech, home, and more—all in one place. Discover exclusive launches,
                                    limited-time deals, and curated collections that match your lifestyle and budget.
                                    Fast delivery and secure checkout included!
                                </span>

                            </Card.Text>

                        </div>

                        <div className='d-flex justify-content-center pt-2'>

                            <Button className="d-none d-md-block" variant="outline-light m-1" onClick={handelSetcoin}>
                                <b>Claim Free Credit</b>
                            </Button>

                            <span className="d-block d-md-none" style={{ paddingBottom: '8px' }}>
                                <Button variant="outline-light m-1" onClick={handelSetcoin}>
                                    <b style={{ fontSize: '10px', display: 'flex', alignItems: 'center' }}>Start Shopping</b>
                                </Button>
                            </span>

                        </div>

                    </div>

                </Card.ImgOverlay>

            </Card>
        </>
    );
};

Carousel.propTypes = {
    handelSetcoin: PropTypes.func.isRequired,
};

export default Carousel;