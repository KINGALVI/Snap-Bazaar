import Selected_Product_Card from './Selected-Product-Card/Selected-Product-Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useSnapBazaar } from '../../Context/Context';

const Selected_Product_Container = () => {
    const {
        AllSelectedProduct,
        handleRemoveProduct,
    } = useSnapBazaar();

    return (
        <>
            {AllSelectedProduct.length === 0 ? (
                <></>
            ) : (
                <>
                    <Row className="g-0 fade-in-bounce" xs={1} md={2}>
                        {AllSelectedProduct.map((SelectedProduct, idx) => (
                            <Col key={idx}>
                                <Selected_Product_Card
                                    SelectedProduct={SelectedProduct}
                                    handleRemoveProduct={handleRemoveProduct}
                                />
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center mt-4">
                        <Button variant="danger">
                            Remove All Selected Products
                        </Button>
                    </div>

                </>
            )}
        </>
    );
};

export default Selected_Product_Container;