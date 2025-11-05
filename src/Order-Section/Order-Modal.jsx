import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useState } from 'react';

const OrderModal = ({ show, handleClose, handleConfirm }) => {
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [manualLocation, setManualLocation] = useState('');
    const [useManual, setUseManual] = useState(false);

    const handleSubmit = () => {
        const location = useManual ? manualLocation : `${district}, ${city}`;
        handleConfirm(location);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delivery Location</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Check
                        type="radio"
                        label="Select District & City"
                        checked={!useManual}
                        onChange={() => setUseManual(false)}
                    />
                    {!useManual && (
                        <>
                            <Form.Group className="mt-3">
                                <Form.Label>District</Form.Label>
                                <Form.Select value={district} onChange={(e) => setDistrict(e.target.value)}>
                                    <option value="">Select District</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattogram">Chattogram</option>
                                    <option value="Khulna">Khulna</option>
                                    {/* Add more districts */}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mt-3">
                                <Form.Label>City</Form.Label>
                                <Form.Select value={city} onChange={(e) => setCity(e.target.value)}>
                                    <option value="">Select City</option>
                                    <option value="Mirpur">Mirpur</option>
                                    <option value="Gulshan">Gulshan</option>
                                    <option value="Banani">Banani</option>
                                    {/* Add more cities */}
                                </Form.Select>
                            </Form.Group>
                        </>
                    )}

                    <Form.Check
                        type="radio"
                        label="Write Location Manually"
                        checked={useManual}
                        onChange={() => setUseManual(true)}
                        className="mt-4"
                    />
                    {useManual && (
                        <Form.Group className="mt-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter your location"
                                value={manualLocation}
                                onChange={(e) => setManualLocation(e.target.value)}
                            />
                        </Form.Group>
                    )}
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

OrderModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
};

export default OrderModal;