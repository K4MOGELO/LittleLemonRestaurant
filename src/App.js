import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';
import About from './components/pages/About';
import MENU from './components/pages/Menu';
import ORDER from './components/pages/order-online';
import Login from './components/pages/Login';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MENU />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/order-online" element={<ORDER />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
