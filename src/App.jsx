import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header-Section/Header';
import AppRoutes from './Router/Router';
import { useEffect, useState } from 'react';

function App() {
  const [API, setAPI] = useState([]);
  const [Coin, SetCoin] = useState(0);
  const [coinPulse, setCoinPulse] = useState(false);

  useEffect(() => {
    fetch('/Snap_Bazaar.json')
      .then(response => response.json())
      .then(data => setAPI(data));
  }, []);

  const triggerCoinPulse = () => {
    setCoinPulse(true);
    setTimeout(() => setCoinPulse(false), 400); // match animation duration
  };

  const handelSetcoin = () => {
    SetCoin(Coin + 5000);
    triggerCoinPulse();
  };

  const handelRemovecoin = () => {
    triggerCoinPulse();
    SetCoin(Coin - 5000);
    toast.success(`Product purchased successfully! Now you have ${Coin - 5000} coins.`, {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
    });
  };

  return (
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
          <Header Coin={Coin} coinPulse={coinPulse} />
          <AppRoutes
            API={API}
            Coin={Coin}
            handelRemovecoin={handelRemovecoin}
            handelSetcoin={handelSetcoin}
          />
        </div>
      </Router>
    </section>
  );
}

export default App;