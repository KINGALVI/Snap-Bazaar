// src/pages/About.jsx
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="py-5 text-center">
            <h2 className="mb-4">🛍️ About Snap Bazaar</h2>

            <Row className="justify-content-center">
                <Col md={8}> 
                    <p className="lead">
                        Snap Bazaar is a modern e-commerce platform built for curious shoppers and passionate creators.
                        We curate a diverse catalog of high-quality products—from cutting-edge electronics to cozy home essentials—
                        designed to elevate everyday life.
                    </p>

                    <h4 className="mt-5">🚀 What Makes Us Different</h4>
                    <ul className="text-start mt-3">
                        <li><b>Curated Experience:</b> Every product is handpicked for quality, usefulness, and aesthetic appeal.</li>
                        <li><b>Interactive Shopping:</b> Earn coins, select favorites, and build your cart with engaging UI features.</li>
                        <li><b>Clean Design:</b> Built with React, Bootstrap, and Tailwind for a seamless, responsive experience.</li>
                        <li><b>Smart Filtering:</b> Tags, categories, and ratings help you find exactly what you need—fast.</li>
                        <li><b>Modular Architecture:</b> Designed for scalability and future features like checkout, search, and user accounts.</li>
                    </ul>

                    <h4 className="mt-5">🧠 Built by Passion</h4>
                    <p>
                        Snap Bazaar is crafted by a team that blends technical precision with creative flair.
                        We believe great design isn’t just visual—it’s functional, intuitive, and memorable.
                    </p>

                    <h4 className="mt-5">🌐 Stay Connected</h4>
                    <p>
                        Follow us for updates, new arrivals, and exclusive offers.
                        Subscribe to our newsletter in the footer and never miss a drop.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;