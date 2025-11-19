import Card from 'react-bootstrap/Card';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import Delete_Modal from './Delete-Modal';
import { useSnapBazaar } from '../../../Context/Context';

const Selected_Product_Card = ({ SelectedProduct }) => {
    const [show, setShow] = useState(false);
    const { handleRemoveProduct } = useSnapBazaar();

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const hasDiscount = SelectedProduct.discount > 0;
    const discountedPrice = SelectedProduct.price * (1 - SelectedProduct.discount / 100);

    return (
        <section className="d-flex justify-content-center align-items-center">
            <Card className="bg-white text-dark shadow-lg m-5 product-card" style={{ width: '25rem', borderRadius: '10px' }}>
                <Card.Img
                    variant="top"
                    src={SelectedProduct.image}
                    className={"product-image img-fluid grayscale"}
                    style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "300px",
                        objectFit: "contain",
                        transition: "transform 0.4s ease",
                    }}
                />

                <Card.Body>
                    <Card.Title>{SelectedProduct.name}</Card.Title>
                    <hr />

                    <div className="d-grid align-items-center pe-2">
                        <p><b>Product Category:</b> {SelectedProduct.category}</p>
                        <p><b>Product Brand:</b> {SelectedProduct.brand}</p>
                        <p><b>Product Price:</b>{' '}
                            {hasDiscount ? (
                                <>
                                    <span className="text-muted text-decoration-line-through">${SelectedProduct.price.toFixed(2)}</span>{' '}
                                    <span className="text-success fw-bold">${discountedPrice.toFixed(2)}</span>
                                </>
                            ) : (
                                <span className="text-dark fw-bold">${SelectedProduct.price.toFixed(2)}</span>
                            )}
                        </p>
                        {SelectedProduct.discount === 0 ? (
                            <p><b>Product Discount:</b> Sorry! This product doesn't have any discount.</p>
                        ) : (
                            <p><b>Product Discount:</b> {SelectedProduct.discount}%</p>
                        )}
                        <p><b>Product Color:</b> {SelectedProduct.color}</p>
                        <p><b>Product Warranty:</b> {SelectedProduct.warranty}</p>
                    </div>
                </Card.Body>

                <center className="p-3 d-grid justify-content-center">
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
    );
};

export default Selected_Product_Card;