import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";
import { useSnapBazaar } from '../../Context/Context';

const All_Product_Card = ({ AllProduct }) => {
    const {
        Coin,
        handelRemovecoin,
        handelSelectedProduct,
        AllSelectedProduct,
        triggerCoinPulse,
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

    const handelSingelPlayer = () => {
        if (isOutOfStock) {
            toast.error("Sorry! This product is out of stock.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        if (Coin === 0) {
            toast.error("You don't have enough Coins. Please add Credit to purchase a product.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        handelSelectedProduct(AllProduct);
        handelRemovecoin();
        triggerCoinPulse();
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
                        style={{
                            height: "300px",
                            width: "300px",
                            filter: isOutOfStock ? "grayscale(100%)" : "none",
                            transition: "transform 0.4s ease",
                        }}
                        variant="top"
                        src={image}
                        className="product-image"
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
                        <span className="d-flex justify-content-center gap-3">
                            {tags.map((tag, idx) => (
                                <p
                                    key={idx}
                                    style={{ cursor: "pointer" }}
                                    className="text-decoration-underline text-primary tag-hover"
                                >
                                    #{tag}
                                </p>
                            ))}
                        </span>

                        <div className={isOutOfStock ? "d-grid justify-content-center pb-3" : "d-flex justify-content-between"}>
                            {isOutOfStock ? (
                                <p className="text-danger"><b>Sorry! This product is out of stock.</b></p>
                            ) : (
                                <span><b>In Stock:</b> {stock - totalCount}</span>
                            )}
                            <span className="d-flex align-items-center">
                                <b>Rating:</b> <FaStar className="text-warning ms-1" /> {rating}
                            </span>
                        </div>
                    </div>

                    <center>
                        <Button
                            variant="success"
                            onClick={handelSingelPlayer}
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