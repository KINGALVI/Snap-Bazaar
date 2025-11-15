import Button from 'react-bootstrap/Button';

const OrderConfirmation = ({ onClose }) => {
    return (
        <div className="text-center py-4 fade-in-bounce">
            <h4 className="text-success fw-bold">✅ Order Confirmed!</h4>
            <p className="text-muted">
                Your delivery location has been saved successfully. Your products will arrive on time!
            </p>
            <Button variant="primary" onClick={onClose}>
                Close
            </Button>
        </div>
    );
};

export default OrderConfirmation;