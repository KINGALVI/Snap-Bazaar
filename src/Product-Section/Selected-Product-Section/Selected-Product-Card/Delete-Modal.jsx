import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSnapBazaar } from '../../../Context/Context';

const Delete_Modal = ({ show, handleClose, SelectedProduct }) => {
    const { handleRemoveProduct } = useSnapBazaar();

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

export default Delete_Modal;