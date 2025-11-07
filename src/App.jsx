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

  useEffect(() => {
    fetch('/Snap_Bazaar.json')
      .then(response => response.json())
      .then(data => setAPI(data));
  }, []);

  const handelSetcoin = () => {
    SetCoin(Coin + 5000);
  };

  const handelRemovecoin = () => {
    SetCoin(Coin - 5000);
    toast.success(`Product purchased successfully! Now you have ${Coin - 5000} coins.`, {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
    });
  };

  return (
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
        <Header Coin={Coin} />
        <AppRoutes
          API={API}
          Coin={Coin}
          handelRemovecoin={handelRemovecoin}
          handelSetcoin={handelSetcoin}
        />
      </div>
    </Router>
  );
}

export default App;