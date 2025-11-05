import { Routes, Route } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import All_Product_Container from '../Product-Section/All-Product-Section/All-Product-Container';
import About from '../About-Section/About';
import NotFound from '../404/404-Page';
import Footer from '../Footer/Footer';

const AppRoutes = ({ API, handelRemovecoin, Coin, handelSetcoin }) => {
  return (
    <>
      <Routes>
        <Route
          path="/" 
          element={
            <>
              <Carousel handelSetcoin={handelSetcoin} />
              <All_Product_Container
                API={API}
                handelRemovecoin={handelRemovecoin}
                Coin={Coin}
              />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <All_Product_Container
              API={API}
              handelRemovecoin={handelRemovecoin}
              Coin={Coin}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;