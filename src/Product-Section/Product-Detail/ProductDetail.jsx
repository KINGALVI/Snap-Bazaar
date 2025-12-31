import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { GoProjectSymlink } from "react-icons/go";
import './ProductDetail.css';

const ProductDetail = ({ API }) => {
    const { id } = useParams();
    const product = API.find(p => p.id === parseInt(id));

    if (!product) {
        return <p className="text-muted">Product Detail not found.</p>;
    }

    const { image, name, category, brand, price, color, warranty, detail } = product;

    return (
        <Card className="bg-dark text-white shadow rounded p-4">
            <Card.Img variant="top" src={image} className="img-fluid rounded responsive-img mx-auto d-block" />
            <Card.Body>
                <Card.Title className="h3 fw-bold mt-3"><h2>{name}</h2></Card.Title>
                <Card.Subtitle className="text-primary fw-semibold mt-2"><h3>Product Detail</h3></Card.Subtitle>
                <div className="mt-2">
                    <span><b>Category:</b> {category}</span><br />
                    <span><b>Brand:</b> {brand}</span><br />
                    <span><b>Price:</b> ${price}</span><br />
                    <span><b>Color:</b> {color}</span><br />
                    <span><b>Warranty:</b> {warranty}</span>
                </div>
                <Card.Text className="text-white mt-3">{detail}</Card.Text>
                <Link to="/">
                    <Button variant="outline-primary" className="mt-3">
                        <GoProjectSymlink size={21} /> Back to Home
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ProductDetail;