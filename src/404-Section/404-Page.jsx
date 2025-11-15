import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
  return (
    <div className="text-center p-5 not-found-container fade-in-bounce">
      <h1 className="display-4 text-danger fw-bold">404</h1>
      <p className="lead text-muted">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button variant="outline-primary" className="go-home-button">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;