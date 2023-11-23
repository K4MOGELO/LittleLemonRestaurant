import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import ConfirmedBooking from "./pages/Bookings/ConfirmedBooking";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import MENU from "./pages/Menu";
import ORDER from "./pages/order-online";
import Login from "./pages/Login";

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
