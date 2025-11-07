import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Professional_Players from "../../public/Logo-&-OtherPicture/E-commerce-Carousel-Picture.jpg";
import PropTypes from 'prop-types';

const Carousel = ({ handelSetcoin }) => {
    const handleClick = () => {
        handelSetcoin();
    };

    return (
        <>
            <br />
            <Card className="bg-dark text-white m-2 shadow-lg" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <div className="d-flex justify-content-center align-items-center">
                    <Card.Img
                        className="w-100 h-100"
                        src={Professional_Players}
                        alt="Snap Bazaar Hero"
                        style={{ filter: 'brightness(35%)', opacity: 0.85 }}
                    />
                </div>

                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                    <div className="text-center carousel-fade-in">

                        {/* Title */}
                        <Card.Title>
                            <h1 className="d-none d-md-block pb-3 fw-bold">
                                Discover Deals That Elevate Your Everyday!
                            </h1>
                            <h2 className="d-block d-md-none pt-2 fw-bold" style={{ fontSize: '20.5px' }}>
                                Discover Deals That Elevate Your Everyday!
                            </h2>
                        </Card.Title>

                        {/* Description */}
                        <Card.Text>
                            <span className="d-none d-md-block pb-1">
                                <b>
                                    Shop top-rated products across fashion, tech, home, and wellness—all in one place.<br />
                                    From exclusive launches to limited-time discounts, explore curated collections<br />
                                    designed to fit your lifestyle and budget. Fast delivery, secure checkout,<br />
                                    and unbeatable value await. Start your shopping journey now!
                                </b>
                            </span>

                            <span className="d-block d-md-none" style={{ fontSize: '11.5px' }}>
                                Shop fashion, tech, home, and more—all in one place. Discover exclusive launches,
                                limited-time deals, and curated collections that match your lifestyle and budget.
                                Fast delivery and secure checkout included!
                            </span>
                        </Card.Text>

                        {/* CTA Button */}
                        <div className="d-flex justify-content-center pt-3">
                            <Button
                                variant="outline-light"
                                className="m-1 px-4 py-2 fw-bold shadow-sm"
                                onClick={handleClick}
                            >
                                Claim Free Credit
                            </Button>
                        </div>

                    </div>
                </Card.ImgOverlay>
            </Card>
        </>
    );
};

Carousel.propTypes = {
    handelSetcoin: PropTypes.func.isRequired,
    triggerCoinPulse: PropTypes.func.isRequired,
};

export default Carousel;