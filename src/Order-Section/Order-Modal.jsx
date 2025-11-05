import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useState } from 'react';

const OrderModal = ({ show, handleClose, handleConfirm }) => {
    const [manualLocation, setManualLocation] = useState('');
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [useManual, setUseManual] = useState(true);

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
        }

        handleConfirm(location);
        handleClose();
        setManualLocation('');
        setDivision('');
        setDistrict('');
        setUseManual(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Choose Delivery Location</Modal.Title>
            </Modal.Header>

            <Modal.Body>
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
                                    {/* ✅ Your full district list remains unchanged */}
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