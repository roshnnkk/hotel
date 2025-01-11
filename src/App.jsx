import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Reserve from "./pages/reserveform";
import RoomSlider from "./pages/rooms";
import Gallery from "./pages/gallery";
import PaymentSuccess from "./pages/paymentSuccess";
import PaymentFailed from "./pages/paymentFailed";

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESERVE_ROUTE,
  ROOMS_ROUTE,
  GALLERY_ROUTE,
  FAILED_ROUTE,
  SUCCESS_ROUTE,
  RESERVATION_ROUTE,
} from "./constant/routes";
import ReservationDetails from "./pages/ReservationDetails";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Toaster />
      <Header />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home loggedIn={loggedIn} />} />
        <Route
          path={LOGIN_ROUTE}
          element={<Login setLoggedIn={setLoggedIn} />}
        />
        <Route path={RESERVE_ROUTE} element={<Reserve loggedIn={loggedIn} />} />
        <Route path={ROOMS_ROUTE} element={<RoomSlider />} />
        <Route path={GALLERY_ROUTE} element={<Gallery />} />
        <Route path={SUCCESS_ROUTE} element={<PaymentSuccess />} />
        <Route path={FAILED_ROUTE} element={<PaymentFailed />} />
        <Route path={RESERVATION_ROUTE} element={<ReservationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
