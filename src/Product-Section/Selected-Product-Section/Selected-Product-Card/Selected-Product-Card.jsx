import Card from 'react-bootstrap/Card';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import Delete_Modal from './Delete-Modal';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";

const Selected_Product_Card = ({ SelectedProduct, handleRemoveProduct }) => {

    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);

    const handleClose = () => setShow(false);

    return (
        <>

            <section className="d-flex justify-content-center align-items-center">
                <Card className="bg-white text-dark shadow-lg m-5" style={{ width: '25rem', borderRadius: '10px' }}>

                    <Card.Img variant="top" src={SelectedProduct.image} />

                    <Card.Body>

                        <Card.Title>{SelectedProduct.name}</Card.Title>

                        <hr />

                        <div className="d-grid align-items-center pe-2">
                            <p><b>Product Category:</b> {SelectedProduct.category}</p>
                            <p><b>Product Brand:</b> {SelectedProduct.brand}</p>
                            <p><b>Product Price:</b> ${SelectedProduct.price}</p>
                            <p><b>Product Discount:</b> {SelectedProduct.discount}%</p>
                            <p><b>Product Color:</b> {SelectedProduct.color}</p>
                            <p><b>Product Warranty:</b> {SelectedProduct.warranty}</p>
                        </div>

                    </Card.Body>

                    <center className="p-3 d-grid justify-content-center">
                        <Button variant="success" onClick={''}>
                            <b>Place Order</b>
                        </Button>
                        <div className="ps-1 pt-3">
                            <MdDeleteForever
                                style={{ cursor: "pointer" }}
                                onClick={handleOpen}
                                size={50}
                                color="red"
                            />
                        </div>
                    </center>
                </Card>

                <Delete_Modal
                    show={show}
                    handleClose={handleClose}
                    handleRemoveProduct={handleRemoveProduct}
                    SelectedProduct={SelectedProduct}
                />
            </section>
        </>
    );
};

Selected_Product_Card.propTypes = {
    SelectedProduct: PropTypes.object.isRequired,
    handleRemoveProduct: PropTypes.func.isRequired,
};

export default Selected_Product_Card;