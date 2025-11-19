import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";
import { useSnapBazaar } from '../../Context/Context';

const All_Product_Card = ({ AllProduct }) => {
    const {
        Dollar,
        deductDollar,
        triggerDollarPulse,
        handelSelectedProduct,
        AllSelectedProduct,
        productStockMap,
    } = useSnapBazaar();

    const {
        image, name, description, category, brand, price, discount,
        color, warranty, stock, rating, tags, id
    } = AllProduct;

    const selectedCount = AllSelectedProduct.filter(p => p.id === id).length;
    const orderedCount = productStockMap?.[id] || 0;
    const totalCount = selectedCount + orderedCount;
    const isOutOfStock = totalCount >= stock;

    const discountedPrice = price * (1 - discount / 100);

    const handleAddToCart = () => {
        if (isOutOfStock) {
            toast.error("Sorry! This product is out of stock.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        if (Dollar < discountedPrice) {
            toast.error("❌ Not enough balance. Please add more dollars.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        handelSelectedProduct(AllProduct);
        deductDollar(discountedPrice);
        triggerDollarPulse();

        toast.success("✅ Product added to cart!", {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });
    };

    const cardClass = `bg-white text-dark shadow-lg m-5 ${isOutOfStock ? "border-danger opacity-75" : ""}`;

    return (
        <section className="d-flex justify-content-center align-items-center">
            <Card
                className={`${cardClass} product-card ${isOutOfStock ? "out-of-stock-pulse" : "fade-in-up"}`}
                style={{ width: "25rem", borderRadius: "10px" }}
            >
                <center>
                    <Card.Img
                        variant="top"
                        src={image}
                        className={`product-image img-fluid ${isOutOfStock ? "grayscale" : ""}`}
                        style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "300px",
                            objectFit: "contain",
                            transition: "transform 0.4s ease",
                        }}
                    />
                </center>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>

                    <hr />
                    <h4><b>Product Detail</b></h4>
                    <hr />

                    <div className="d-grid pb-2">
                        <span><b>Category:</b> {category}</span>
                        <span><b>Brand:</b> {brand}</span>
                        <span><b>Price:</b> ${price}</span>

                        {discount === 0 ? (
                            <span><b>Product Discount:</b> Sorry! This product doesn't have any discount.</span>
                        ) : (
                            <span><b>Product Discount:</b> {discount}%</span>
                        )}

                        <span><b>Color:</b> {color}</span>
                        <span><b>Warranty:</b> {warranty}</span>

                        <br />
                        <center><h4>Tags</h4></center>
                        <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
                            {tags.map((tag, idx) => (
                                <p
                                    key={idx}
                                    style={{ cursor: "pointer" }}
                                    className="text-decoration-underline text-primary tag-hover mb-1"
                                >
                                    #{tag}
                                </p>
                            ))}
                        </div>

                        <div className={`pb-3 ${isOutOfStock ? "d-grid justify-content-center" : "d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"}`}>
                            {isOutOfStock ? (
                                <p className="text-danger text-center"><b>Sorry! This product is out of stock.</b></p>
                            ) : (
                                <>
                                    <span className="text-center text-md-start"><b>In Stock:</b> {stock - totalCount}</span>
                                    <span className="d-flex align-items-center justify-content-center justify-content-md-start">
                                        <b>Rating:</b> <FaStar className="text-warning ms-1" /> {rating}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    <center>
                        <Button
                            variant="success"
                            onClick={handleAddToCart}
                            disabled={isOutOfStock}
                            className="add-to-cart-btn"
                        >
                            <b>{isOutOfStock ? "Out of Stock" : "Add to Cart"}</b>
                        </Button>
                    </center>
                </Card.Body>
            </Card>
        </section>
    );
};

export default All_Product_Card;