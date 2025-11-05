import Selected_Product_Card from './Selected-Product-Card/Selected-Product-Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

const Selected_Product_Container = ({ AllSelectedProduct, handleRemoveProduct }) => {
    // ✅ Calculate total price with discount applied
    const totalPrice = AllSelectedProduct.reduce((sum, product) => {
        const discountedPrice = product.price * (1 - product.discount / 100);
        return sum + discountedPrice;
    }, 0);

    // ✅ Format price as currency
    const formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalPrice);

    return (
        <>
            {AllSelectedProduct.length === 0 ? (
                <>
                    <center><h3>No Product is Selected</h3></center>
                    <center className="p-5">
                        <h4>Please Select Your Favorite Product!</h4>
                    </center>
                </>
            ) : (
                <>
                    <center><h3>Total Selected Product is {AllSelectedProduct.length}</h3></center>

                    {/* ✅ Stylish Total Price Section */}
                    <div className="d-flex justify-content-center my-4">
                        <div className="bg-light border rounded shadow-lg px-4 py-3 text-center" style={{ maxWidth: "400px" }}>
                            <h5 className="mb-2 text-uppercase text-secondary">Total Price</h5>
                            <h3 className="text-success fw-bold">{formattedTotal}</h3>
                            <p className="text-muted small">Including all discounts</p>
                        </div>
                    </div>

                    <Row className="g-0" xs={1} md={2}>
                        {AllSelectedProduct.map((SelectedProduct, idx) => (
                            <Col key={idx}>
                                <Selected_Product_Card
                                    key={idx}
                                    SelectedProduct={SelectedProduct}
                                    handleRemoveProduct={handleRemoveProduct}
                                />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </>
    );
};

Selected_Product_Container.propTypes = {
    AllSelectedProduct: PropTypes.array.isRequired,
    handleRemoveProduct: PropTypes.func.isRequired,
};

export default Selected_Product_Container;