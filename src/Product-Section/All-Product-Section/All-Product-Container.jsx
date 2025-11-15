import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import All_Product_Card from './All-Product-Card';
import Selected_Product_Container from '../Selected-Product-Section/Selected-Product-Container';
import OrderModal from '../../Order-Section/Order-Modal';
import { toast } from 'react-toastify';
import { useSnapBazaar } from '../../Context/Context';

const All_Product_Container = ({ API }) => {
    const {
        Coin,
        handelRemovecoin,
        handelSelectedProduct,
        AllSelectedProduct,
        handleRemoveProduct,
        handleRemoveAllProducts,
    } = useSnapBazaar();

    const [activeSection, setActiveSection] = useState("available");
    const [showModal, setShowModal] = useState(false);
    const [productStockMap, setProductStockMap] = useState({});

    const handleConfirmOrder = () => {
        const updatedStockMap = { ...productStockMap };

        AllSelectedProduct.forEach(product => {
            const currentCount = updatedStockMap[product.id] || 0;
            updatedStockMap[product.id] = currentCount + 1;
        });

        setProductStockMap(updatedStockMap);
        handleRemoveAllProducts();

        toast.success("🎉 Order placed successfully! Your products are on the way.", {
            position: "top-center",
            autoClose: 4000,
            theme: "colored",
        });
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
            <center className='m-5 p-5'>Loading...</center>
            :
            <>
                <br />

                {/* Section Toggle */}
                <section className="d-flex justify-content-center mb-3 fade-in-bounce">
                    <span className="pe-2">
                        <Button
                            variant={activeSection === "available" ? "primary" : "outline-primary"}
                            className="section-toggle-btn"
                            onClick={() => setActiveSection("available")}
                        >
                            🛍️ {API.length} Available Products
                        </Button>
                    </span>
                    <span className="ps-2">
                        <Button
                            variant={activeSection === "selected" ? "success" : "outline-success"}
                            className="section-toggle-btn"
                            onClick={() => setActiveSection("selected")}
                        >
                            ✅ {AllSelectedProduct.length} Selected Products
                        </Button>
                    </span>
                </section>

                {/* Available Products */}
                {activeSection === "available" ? (
                    <section>
                        <center><h3 className="mb-4 fade-in-bounce">Total {API.length} Products Available</h3></center>
                        <Row className="g-4" xs={1} md={2}>
                            {API.map((AllProduct, idx) => (
                                <Col key={idx} className="fade-in-bounce">
                                    <All_Product_Card
                                        AllProduct={AllProduct}
                                        handelRemovecoin={handelRemovecoin}
                                        handelSelectedProduct={handelSelectedProduct}
                                        Coin={Coin}
                                        handleRemoveProduct={handleRemoveProduct}
                                        AllSelectedProduct={AllSelectedProduct}
                                        productStockMap={productStockMap}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </section>
                ) : (
                    <>
                        {AllSelectedProduct.length === 0 ? (
                            <div className="text-center empty-state fade-in-bounce">
                                <h3>No Products Selected</h3>
                                <h4 className="mt-3">🧺 Start selecting your favorites!</h4>
                            </div>
                        ) : (
                            <>
                                <center><h3 className="fade-in">Total Selected: {AllSelectedProduct.length}</h3></center>

                                <div className="d-flex justify-content-center my-4">
                                    <div className="bg-light border rounded shadow-lg px-4 py-3 text-center total-price-box scale-in">
                                        <h5 className="mb-2 text-uppercase text-secondary">Total Price</h5>
                                        <h3 className="text-success fw-bold">{formattedTotal}</h3>
                                        <p className="text-muted small">Including all discounts</p>
                                    </div>
                                </div>

                                <div className="d-grid justify-content-center mb-3 button-stagger">
                                    <Button variant="danger" className="stagger-item" onClick={handleRemoveAllProducts}>
                                        🗑️ <b>Remove All</b>
                                    </Button>
                                    <Button className="mt-3 stagger-item" variant="success" onClick={() => setShowModal(true)}>
                                        🧾 <b>Place Order</b>
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

export default All_Product_Container;