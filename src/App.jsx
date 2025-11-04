import './App.CSS';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import All_Product_Container from './Product-Section/All-Product-Section/All-Product-Container';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function App() {

  const [API, setAPI] = useState([]);

  useEffect(() => {
    fetch('/Snap_Bazaar.json')
      .then(response => response.json())
      .then(data => setAPI(data));
  }, []);

  const [Coin, SetCoin] = useState(0);

  const handelSetcoin = () => {
    SetCoin(Coin + 5000);
  };

  const handelRemovecoin = () => {
    SetCoin(Coin - 5000);
    displaySuccessMsg();
  };

  const displaySuccessMsg = () => {
    toast.success(`Product purchased successfully! Now you have ${Coin - 5000} coins.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        draggable
        theme="colored"
      />

      <Header Coin={Coin} />

      <Carousel handelSetcoin={handelSetcoin} />

      <All_Product_Container API={API} handelRemovecoin={handelRemovecoin} Coin={Coin} />

      <Footer />

    </>
  );
}

App.propTypes = {
  API: PropTypes.array,
  Coin: PropTypes.number,
  handelRemovecoin: PropTypes.func,
  handelSetcoin: PropTypes.func,
};

export default App;