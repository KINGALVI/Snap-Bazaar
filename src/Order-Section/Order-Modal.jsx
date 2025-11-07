import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useState } from 'react';
import OrderConfirmation from './Order-Confirmation';

const OrderModal = ({ show, handleClose, handleConfirm }) => {
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

        if (!location || location === '' || (!useManual && (!division || !district))) {
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

        handleConfirm(location);
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
                )
                    :
                    (
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
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Chattogram">Chattogram</option>
                                            <option value="Khulna">Khulna</option>
                                            <option value="Rajshahi">Rajshahi</option>
                                            <option value="Barisal">Barisal</option>
                                            <option value="Sylhet">Sylhet</option>
                                            <option value="Rangpur">Rangpur</option>
                                            <option value="Mymensingh">Mymensingh</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mt-3">
                                        <Form.Label>Select District</Form.Label>
                                        <Form.Select value={district} onChange={(e) => setDistrict(e.target.value)}>
                                            <option value="">Select District</option>
                                            <option value="Bagerhat">Bagerhat</option>
                                            <option value="Bandarban">Bandarban</option>
                                            <option value="Barguna">Barguna</option>
                                            <option value="Barisal">Barisal</option>
                                            <option value="Bhola">Bhola</option>
                                            <option value="Bogra">Bogra</option>
                                            <option value="Brahmanbaria">Brahmanbaria</option>
                                            <option value="Chandpur">Chandpur</option>
                                            <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                                            <option value="Chattogram">Chattogram</option>
                                            <option value="Chuadanga">Chuadanga</option>
                                            <option value="Comilla">Comilla</option>
                                            <option value="Cox's Bazar">Cox's Bazar</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Dinajpur">Dinajpur</option>
                                            <option value="Faridpur">Faridpur</option>
                                            <option value="Feni">Feni</option>
                                            <option value="Gaibandha">Gaibandha</option>
                                            <option value="Gazipur">Gazipur</option>
                                            <option value="Gopalganj">Gopalganj</option>
                                            <option value="Habiganj">Habiganj</option>
                                            <option value="Jamalpur">Jamalpur</option>
                                            <option value="Jashore">Jashore</option>
                                            <option value="Jhalokathi">Jhalokathi</option>
                                            <option value="Jhenaidah">Jhenaidah</option>
                                            <option value="Joypurhat">Joypurhat</option>
                                            <option value="Khagrachari">Khagrachari</option>
                                            <option value="Khulna">Khulna</option>
                                            <option value="Kishoreganj">Kishoreganj</option>
                                            <option value="Kurigram">Kurigram</option>
                                            <option value="Kushtia">Kushtia</option>
                                            <option value="Lakshmipur">Lakshmipur</option>
                                            <option value="Lalmonirhat">Lalmonirhat</option>
                                            <option value="Madaripur">Madaripur</option>
                                            <option value="Magura">Magura</option>
                                            <option value="Manikganj">Manikganj</option>
                                            <option value="Meherpur">Meherpur</option>
                                            <option value="Moulvibazar">Moulvibazar</option>
                                            <option value="Munshiganj">Munshiganj</option>
                                            <option value="Mymensingh">Mymensingh</option>
                                            <option value="Naogaon">Naogaon</option>
                                            <option value="Narail">Narail</option>
                                            <option value="Narayanganj">Narayanganj</option>
                                            <option value="Narsingdi">Narsingdi</option>
                                            <option value="Natore">Natore</option>
                                            <option value="Netrokona">Netrokona</option>
                                            <option value="Nilphamari">Nilphamari</option>
                                            <option value="Noakhali">Noakhali</option>
                                            <option value="Pabna">Pabna</option>
                                            <option value="Panchagarh">Panchagarh</option>
                                            <option value="Patuakhali">Patuakhali</option>
                                            <option value="Pirojpur">Pirojpur</option>
                                            <option value="Rajbari">Rajbari</option>
                                            <option value="Rajshahi">Rajshahi</option>
                                            <option value="Rangamati">Rangamati</option>
                                            <option value="Rangpur">Rangpur</option>
                                            <option value="Satkhira">Satkhira</option>
                                            <option value="Shariatpur">Shariatpur</option>
                                            <option value="Sherpur">Sherpur</option>
                                            <option value="Sirajganj">Sirajganj</option>
                                            <option value="Sunamganj">Sunamganj</option>
                                            <option value="Sylhet">Sylhet</option>
                                            <option value="Tangail">Tangail</option>
                                            <option value="Thakurgaon">Thakurgaon</option>
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

OrderModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
};

export default OrderModal;