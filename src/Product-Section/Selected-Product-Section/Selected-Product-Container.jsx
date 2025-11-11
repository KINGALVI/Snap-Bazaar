import Selected_Product_Card from './Selected-Product-Card/Selected-Product-Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

const Selected_Product_Container = ({ AllSelectedProduct, handleRemoveProduct }) => {

    return (
        <>
            {AllSelectedProduct.length === 0 ? (
                <> </>
            ) : (
                <>

                    <Row className="g-0 fade-in-bounce" xs={1} md={2}>
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