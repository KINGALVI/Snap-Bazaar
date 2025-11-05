import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const All_Product_Card = ({ AllProduct, handelRemovecoin, handelSelectedProduct, Coin }) => {

    const { image, name, description, category, brand, price, discount, color, warranty, stock, rating, tags } = AllProduct;

    const handelSingelPlayer = () => {

        if (Coin === 0) {
            toast.error("You don't have enough Coins. Please add Credit to purchase a product.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: "colored",
            });
            return;
        }

        handelSelectedProduct(AllProduct);
        handelRemovecoin();
    };

    return (
        <>

            <section className="d-flex justify-content-center align-items-center">
                <Card className="bg-white text-dark shadow-lg m-5" style={{ width: "25rem", borderRadius: "10px" }}>

                    <center><Card.Img style={{ height: "300px", width: "300px" }} variant="top" src={image} /></center>

                    <Card.Body>

                        <Card.Title>{name}</Card.Title>

                        <Card.Text>{description}</Card.Text>

                        <hr />

                        <h4><b>Product Detail</b></h4>

                        <hr />

                        <div className="d-grid pb-2">
                            <span><b>Category:</b> {category} </span>
                            <span><b>Brand:</b> {brand} </span>
                            <span><b>Price:</b> ${price} </span>

                            {
                                discount === 0 ?
                                    <span><b>Product Discount:</b> Sorry !! Thish Product don't have any discount</span>
                                    :
                                    <span><b>Product Discount:</b> {discount}%</span>
                            }
                            <span><b>Color:</b> {color} </span>
                            <span><b>Warranty:</b> {warranty} </span>
                            <br />
                            <center><h4>Tags</h4></center>
                            <span className="d-flex justify-content-center gap-3">
                                {tags.map((tags, idx) => (
                                    <p style={{ cursor: "pointer" }} className="text-decoration-underline text-primary" key={idx}>#{tags}</p>
                                ))}
                            </span> 
                            <div className="d-flex justify-content-between">
                                <span><b>in Stock:</b> {stock} </span>
                                <span className="d-flex align-items-center gap-1"><b>Rating:</b> <FaStar className="text-warning" />{rating} </span>
                            </div>
                        </div>

                        <center>
                            <Button variant="success" onClick={handelSingelPlayer}>
                                <b>Add to Cart</b>
                            </Button>
                        </center>

                    </Card.Body>
                </Card>
            </section>

        </>
    );
};

All_Product_Card.propTypes = {
    AllProduct: PropTypes.object.isRequired,
    handelRemovecoin: PropTypes.func.isRequired,
    handelSelectedProduct: PropTypes.func.isRequired,
    AllSelectedProduct: PropTypes.array.isRequired,
    Coin: PropTypes.number.isRequired,
};

export default All_Product_Card;