import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header-Section/Header';
import AppRoutes from './Router/Router';
import { useEffect, useState } from 'react';
import { SnapBazaarProvider } from './Context/Context';

function App() {
  const [API, setAPI] = useState([]);

  useEffect(() => {
    fetch('/Snap_Bazaar.json')
      .then(response => response.json())
      .then(data => setAPI(data));
  }, []);

  return (
    <SnapBazaarProvider>
      <section className="fade-in-bounce">
        <Router>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div className="fade-in">
            <Header />
            <AppRoutes API={API} />
          </div>
        </Router>
      </section>
    </SnapBazaarProvider>
  );
}

export default App;