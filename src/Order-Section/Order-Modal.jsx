import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import OrderConfirmation from './Order-Confirmation';
import { useSnapBazaar } from '../Context/Context';

const OrderModal = ({ show, handleClose }) => {
    const { handleConfirmOrder } = useSnapBazaar();

    const [manualLocation, setManualLocation] = useState('');
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [useManual, setUseManual] = useState(true);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const validLocations = {
        Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Narsingdi", "Tangail", "Manikganj", "Munshiganj", "Kishoreganj", "Faridpur", "Rajbari", "Gopalganj", "Shariatpur"],
        Chattogram: ["Comilla", "Feni", "Brahmanbaria", "Chandpur", "Lakshmipur", "Noakhali", "Chattogram", "Cox's Bazar", "Khagrachari", "Bandarban", "Rangamati"],
        Khulna: ["Khulna", "Bagerhat", "Satkhira", "Jashore", "Narail", "Magura", "Meherpur", "Chuadanga", "Jhenaidah", "Kushtia"],
        Rajshahi: ["Rajshahi", "Pabna", "Sirajganj", "Bogra", "Joypurhat", "Naogaon", "Natore", "Chapai Nawabganj"],
        Barisal: ["Barisal", "Patuakhali", "Bhola", "Jhalokathi", "Pirojpur", "Barguna"],
        Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
        Rangpur: ["Rangpur", "Dinajpur", "Thakurgaon", "Panchagarh", "Nilphamari", "Lalmonirhat", "Kurigram", "Gaibandha"],
        Mymensingh: ["Mymensingh", "Netrokona", "Sherpur", "Jamalpur"]
    };

    const handleSubmit = () => {
        const location = useManual
            ? manualLocation.trim()
            : `${division}, ${district}`;

        if (!location || (!useManual && (!division || !district))) {
            return alert("Please provide a valid delivery location.");
        }

        if (useManual) {
            const invalidPattern = /[^a-zA-Z\s,]/;
            const tooShort = location.length < 4;
            const hasLetters = /[a-zA-Z]/.test(location);

            if (invalidPattern.test(location) || tooShort || !hasLetters) {
                return alert("Please enter a proper location name (e.g., 'Gulshan, Dhaka').");
            }

            const parts = location.split(',');
            if (parts.length === 2) {
                const districtInput = parts[0].trim().replace(/\b\w/g, c => c.toUpperCase());
                const divisionInput = parts[1].trim().replace(/\b\w/g, c => c.toUpperCase());

                const isValid = validLocations[divisionInput]?.includes(districtInput);
                if (!isValid) {
                    return alert(`Invalid location: ${districtInput} is not in ${divisionInput}.`);
                }
            } else {
                return alert("Please enter location in 'District, Division' format.");
            }
        }

        if (!useManual) {
            const isValid = validLocations[division]?.includes(district);
            if (!isValid) {
                return alert(`Invalid selection: ${district} is not in ${division}.`);
            }
        }

        handleConfirmOrder();
        setOrderConfirmed(true);
    };

    const handleCloseModal = () => {
        setManualLocation('');
        setDivision('');
        setDistrict('');
        setUseManual(true);
        setOrderConfirmed(false);
        handleClose();
    };

    useEffect(() => {
        if (!useManual) setDistrict('');
    }, [division, useManual]);

    return (
        <Modal show={show} onHide={handleCloseModal} centered>
            <Modal.Header>
                <Modal.Title>
                    {orderConfirmed ? "Order Confirmed!" : "Choose Delivery Location"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {orderConfirmed ? (
                    <OrderConfirmation onClose={handleCloseModal} />
                ) : (
                    <Form>
                        <Form.Check
                            type="radio"
                            label={<b>Write Location Manually</b>}
                            checked={useManual}
                            onChange={() => setUseManual(true)}
                        />
                        {useManual && (
                            <Form.Group className="mt-3 mb-4">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your location"
                                    value={manualLocation}
                                    onChange={(e) => setManualLocation(e.target.value)}
                                />
                            </Form.Group>
                        )}
                        <hr />
                        <center><h5><b>OR</b></h5></center>
                        <hr />
                        <Form.Check
                            type="radio"
                            label={<b>Select Division & District</b>}
                            checked={!useManual}
                            onChange={() => setUseManual(false)}
                            className="mt-3"
                        />
                        {!useManual && (
                            <>
                                <Form.Group className="mt-3">
                                    <Form.Label>Select Division</Form.Label>
                                    <Form.Select value={division} onChange={(e) => setDivision(e.target.value)}>
                                        <option value="">Select Division</option>
                                        {Object.keys(validLocations).map((div, idx) => (
                                            <option key={idx} value={div}>{div}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mt-3">
                                    <Form.Label>Select District</Form.Label>
                                    <Form.Select value={district} onChange={(e) => setDistrict(e.target.value)}>
                                        <option value="">Select District</option>
                                        {division && validLocations[division]?.map((dist, idx) => (
                                            <option key={idx} value={dist}>{dist}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </>
                        )}
                    </Form>
                )}
            </Modal.Body>

            {!orderConfirmed && (
                <Modal.Footer>
                    <Button variant="success" onClick={handleSubmit}>
                        Confirm
                    </Button>
                </Modal.Footer>
            )}
        </Modal>
    );
};

export default OrderModal;