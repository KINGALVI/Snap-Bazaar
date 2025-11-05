import { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import All_Product_Card from './All-Product-Card';
import Selected_Product_Container from '../Selected-Product-Section/Selected-Product-Container';
import OrderModal from '../../Order-Section/Order-Modal';
import { toast } from 'react-toastify';

const All_Product_Container = ({ API, handelRemovecoin, Coin }) => {
    const [activeSection, setActiveSection] = useState("available");
    const [AllSelectedProduct, setSelectedProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handelSelectedProduct = (AllProduct) => {
        const productWithUniqueId = {
            ...AllProduct,
            selection_id: crypto.randomUUID(),
        };
        setSelectedProduct([...AllSelectedProduct, productWithUniqueId]);
    };

    const handleRemoveProduct = (ProductToRemove) => {
        const UpdatedProductList = AllSelectedProduct.filter(
            SelectedProduct => SelectedProduct.selection_id !== ProductToRemove.selection_id
        );
        setSelectedProduct(UpdatedProductList);
    };

    const handleRemoveAllProducts = () => {
        setSelectedProduct([]);
        toast.info("All selected products have been removed.", {
            position: "top-center",
            autoClose: 3000,
            theme: "colored",
        });
    };

    const handleConfirmOrder = () => {
        setSelectedProduct([]);
    };

    const totalPrice = AllSelectedProduct.reduce((sum, product) => {
        const discountedPrice = product.price * (1 - product.discount / 100);
        return sum + discountedPrice;
    }, 0);

    const formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalPrice);

    return (
        API.length === 0 ?
            <> <center className='m-5 p-5'>Loading...</center> </>
            :
            <>
                <br />

                <section className="d-flex justify-content-center mb-3">
                    <span className="pe-2">
                        <Button variant={activeSection === "available" ? "primary" : "outline-primary"} onClick={() => setActiveSection("available")}>
                            {API.length} Available Product
                        </Button>
                    </span>

                    <span className="ps-2">
                        <Button variant={activeSection === "selected" ? "success" : "outline-success"} onClick={() => setActiveSection("selected")}>
                            {AllSelectedProduct.length} Selected Product
                        </Button>
                    </span>
                </section>

                {activeSection === "available" ? (
                    <section>
                        <center><h3>Total {API.length} Product is Available Right Now</h3></center>

                        <Row className="g-0" xs={1} md={2}>
                            {API.map((AllProduct, idx) => (
                                <Col key={idx}>
                                    <All_Product_Card
                                        key={idx}
                                        AllProduct={AllProduct}
                                        handelRemovecoin={handelRemovecoin}
                                        handelSelectedProduct={handelSelectedProduct}
                                        Coin={Coin}
                                        handleRemoveProduct={handleRemoveProduct}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </section>
                ) : (
                    <>
                        {AllSelectedProduct.length === 0 ? (
                            <>
                                <br /><br />
                                <center><h3>No Product is Selected</h3></center>
                                <center className="p-5">
                                    <h4>Please Select Your Favorite Product!</h4>
                                </center>
                            </>
                        ) : (
                            <center><h3>Total Selected Product is {AllSelectedProduct.length}</h3></center>
                        )}

                        {AllSelectedProduct.length > 0 && (
                            <>
                                <div className="d-flex justify-content-center my-4">
                                    <div className="bg-light border rounded shadow-lg px-4 py-3 text-center" style={{ maxWidth: "400px" }}>
                                        <h5 className="mb-2 text-uppercase text-secondary">Total Price</h5>
                                        <h3 className="text-success fw-bold">{formattedTotal}</h3>
                                        <p className="text-muted small">Including all discounts</p>
                                    </div>
                                </div>

                                <div className="d-grid justify-content-center mb-3">
                                    <Button variant="danger" onClick={handleRemoveAllProducts}>
                                        <b>Remove All Products</b>
                                    </Button>
                                    <Button className='mt-3' variant="success" onClick={() => setShowModal(true)}>
                                        <b>Place Order</b>
                                    </Button>
                                </div>
                            </>
                        )}

                        <Selected_Product_Container
                            AllSelectedProduct={AllSelectedProduct}
                            handleRemoveAllProducts={handleRemoveAllProducts}
                            handleRemoveProduct={handleRemoveProduct}
                        />

                        <OrderModal
                            show={showModal}
                            handleClose={() => setShowModal(false)}
                            handleConfirm={handleConfirmOrder}
                        />
                    </>
                )}
            </>
    );
};

All_Product_Container.propTypes = {
    API: PropTypes.array.isRequired,
    handelRemovecoin: PropTypes.func.isRequired,
    Coin: PropTypes.number.isRequired,
};

export default All_Product_Container;