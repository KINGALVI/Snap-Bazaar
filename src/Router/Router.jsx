import { Routes, Route } from 'react-router-dom';
import Carousel from '../Carousel-Section/Carousel';
import All_Product_Container from '../Product-Section/All-Product-Section/All-Product-Container';
import About from '../About-Section/About';
import NotFound from '../404-Section/404-Page';
import Footer from '../Footer-Section/Footer';

const AppRoutes = ({ API }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <All_Product_Container API={API} />
            </>
          }
        />
        <Route
          path="/cart"
          element={<All_Product_Container API={API} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;