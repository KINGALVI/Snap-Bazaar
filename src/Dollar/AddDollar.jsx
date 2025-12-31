import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

const AddDollarModal = ({ show, handleClose, handleAdd, triggerPulse }) => {
    const [amount, setAmount] = useState("");

    const handleSubmit = () => {
        const value = parseFloat(amount);
        if (isNaN(value) || value <= 0) {
            toast.error("Please enter a valid amount.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        handleAdd(value);
        triggerPulse();
        toast.success(`💵 $${value} added to your balance!`, {
            position: "top-center",
            autoClose: 3000,
            theme: "colored",
        });

        setAmount("");
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
            <Modal.Header>
                <Modal.Title>Add Money</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    type="text"
                    placeholder="Enter Amount in Dollar $"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit}>Add</Button>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddDollarModal;