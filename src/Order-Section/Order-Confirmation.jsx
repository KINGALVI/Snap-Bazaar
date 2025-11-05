import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const OrderConfirmation = ({ onClose }) => {
    return (
        <div className="text-center py-4">
            <h4 className="text-success">✅ Order Confirmed!</h4>
            <p>Your delivery location has been saved successfully !! You will get your product on time !!</p>
            <Button variant="primary" onClick={onClose}>Close</Button>
        </div>
    );
};

OrderConfirmation.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default OrderConfirmation;