import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const Delete_Modal = ({ show, handleClose, handleRemoveProduct, SelectedProduct }) => {
    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>Remove Product</Modal.Title>
            </Modal.Header>

            <Modal.Body> 
                Are you sure you want to remove <b>{SelectedProduct.name}</b> from the product list?
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
                <Button
                    variant="danger"
                    onClick={() => {
                        handleRemoveProduct(SelectedProduct);
                        handleClose();
                    }}
                >
                    Delete
                </Button>

                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>

        </Modal>
    );
};

Delete_Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleRemoveProduct: PropTypes.func.isRequired,
    SelectedProduct: PropTypes.object.isRequired,
};

export default Delete_Modal;