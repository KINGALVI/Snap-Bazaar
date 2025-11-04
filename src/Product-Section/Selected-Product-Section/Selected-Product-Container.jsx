import Selected_Product_Card from './Selected-Product-Card/Selected-Product-Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

const Selected_Product_Container = ({ AllSelectedProduct, handleRemoveProduct }) => {
    return (
        <>

            <center><h3>Total Selected Product: {AllSelectedProduct.length}</h3></center>

            {AllSelectedProduct.length === 0 ? (
                <center className="p-5">
                    <h4>Please Select Your Favorite Product!</h4>
                </center>
            )
                : (
        
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
                )}
        </>
    );
};

Selected_Product_Container.propTypes = {
    AllSelectedProduct: PropTypes.array.isRequired,
    handleRemoveProduct: PropTypes.func.isRequired,
};

export default Selected_Product_Container;