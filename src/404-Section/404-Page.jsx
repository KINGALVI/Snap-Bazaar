import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
    return (
        <div className="text-center p-5">
            <h1 className="display-4">404</h1>
            <p className="lead">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">
                <Button variant="primary">Go Back Home</Button>
            </Link>
        </div>
    )
}; 

export default NotFound;