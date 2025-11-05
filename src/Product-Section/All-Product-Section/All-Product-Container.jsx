import { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import All_Product_Card from './All-Product-Card';
import Selected_Product_Container from '../Selected-Product-Section/Selected-Product-Container';
import { toast } from 'react-toastify'; // ✅ Add this if you want toast feedback

const All_Product_Container = ({ API, handelRemovecoin, Coin }) => {
    const [activeSection, setActiveSection] = useState("available");
    const [AllSelectedProduct, setSelectedProduct] = useState([]);

    const handelSelectedProduct = (AllProduct) => {
        const productWithUniqueId = {
            ...AllProduct,
            selection_id: crypto.randomUUID(), // ✅ Use native UUID if available
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

    return (
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
                    <center><h3>Total {API.length} Product is Available Rignt Now</h3></center>

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
                    {AllSelectedProduct.length > 0 && (
                        <div className="d-flex justify-content-center mb-3">
                            <Button variant="danger" onClick={handleRemoveAllProducts}>
                                <b>Remove All Products</b>
                            </Button>
                        </div>
                    )}

                    <Selected_Product_Container
                        AllSelectedProduct={AllSelectedProduct}
                        handleRemoveProduct={handleRemoveProduct}
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