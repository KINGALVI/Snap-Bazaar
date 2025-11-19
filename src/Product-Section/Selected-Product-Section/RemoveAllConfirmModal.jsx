import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RemoveAllConfirmModal = ({ show, handleClose, handleConfirm }) => {
    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
            <Modal.Header>
                <Modal.Title>Confirm Remove All</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to remove all selected products? Your coins will be refunded.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Yes, Remove All
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RemoveAllConfirmModal;