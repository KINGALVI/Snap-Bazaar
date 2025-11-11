import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const SnapBazaarCarousel = ({ handelSetcoin, triggerCoinPulse }) => {
    const handleClick = () => {
        handelSetcoin();
        triggerCoinPulse();
    };

    const slides = [
        {
            image: "/Logo-&-OtherPicture/E-commerce-Carousel-Picture-1.jpg",
            title: "Discover Deals That Elevate Your Everyday!",
            description: (
                <b>
                    Shop top-rated products across fashion, tech, home, and wellness—all in one place.
                    From exclusive launches to limited-time discounts, explore curated collections
                    designed to fit your lifestyle and budget. Fast delivery, secure checkout,
                    and unbeatable value await. Start your shopping journey now!
                </b>
            ),
            button: "Claim Free Credit",
        },
        {
            image: "/Logo-&-OtherPicture/E-commerce-Carousel-Picture-2.jpeg",
            title: "Inside Look at Life-Changing Deals!",
            description: (
                <b>
                    Discover exclusive launches, limited-time deals, and curated collections
                    tailored to your lifestyle and budget. Whether you're upgrading your tech,
                    refreshing your wardrobe, or redecorating your space—Snap Bazaar has it all.
                    Shop smarter,<br /> live better.
                </b>
            ),
            button: "Claim Free Credit",
        },
        {
            image: "/Logo-&-OtherPicture/E-commerce-Carousel-Picture-3.jpeg",
            title: "Snap Bazaar: Where Style Meets Savings!",
            description: (
                <b>
                    From essentials to indulgence, find everything you need with exclusive rewards and coin bonuses.
                    Enjoy seamless shopping, curated collections, and personalized recommendations.
                    Your next favorite product is just a click away—explore Snap Bazaar today!
                </b>
            ),
            button: "Claim Free Credit",
        },
    ];

    return (
        <Carousel fade interval={6000} className="carousel-wrapper fade-in-bounce">
            {slides.map((slide, index) => (
                <Carousel.Item className="fade-in-bounce" key={index}>
                    <div
                        className="bg-dark text-white m-2 shadow-lg"
                        style={{ borderRadius: '12px', overflow: 'hidden' }}
                    >
                        <img
                            className="d-block w-100 carousel-hero-img"
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                filter: 'brightness(35%)',
                                opacity: 0.85,
                                maxHeight: '600px',
                                objectFit: 'cover',
                            }}
                        />
                        <Carousel.Caption>
                            {/* Desktop / Large Screens */}
                            <div className="d-none d-lg-flex carousel-caption-center">
                                <div className="text-center">
                                    <h1 className="pb-3 fw-bold">{slide.title}</h1>
                                    <div>{slide.description}</div>
                                    <div className="d-flex justify-content-center pt-3">
                                        <Button
                                            variant="outline-light"
                                            className="m-1 px-4 py-2 fw-bold shadow-sm"
                                            onClick={handleClick}
                                        >
                                            {slide.button}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile / Tablet */}
                            <div className="d-flex d-lg-none flex-column align-items-center text-center">
                                <h2 className="pt-2 fw-bold" style={{ fontSize: '20.5px' }}>{slide.title}</h2>
                                <div style={{ fontSize: '10.5px', lineHeight: '1.4' }}>{slide.description}</div>
                                <Button
                                    variant="outline-light"
                                    className="mt-2 px-2 py-1 fw-semibold shadow-sm mobile-carousel-button"
                                    style={{ fontSize: '13px' }}
                                    onClick={handleClick}
                                >
                                    {slide.button}
                                </Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

SnapBazaarCarousel.propTypes = {
    handelSetcoin: PropTypes.func.isRequired,
    triggerCoinPulse: PropTypes.func.isRequired,
};

export default SnapBazaarCarousel;