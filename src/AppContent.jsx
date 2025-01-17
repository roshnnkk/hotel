import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Reserve from "./pages/reserveform";
import RoomSlider from "./pages/rooms";
import Gallery from "./pages/gallery";

import ReservationDetails from "./pages/ReservationDetails";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESERVE_ROUTE,
  ROOMS_ROUTE,
  GALLERY_ROUTE,

  RESERVATION_ROUTE,
  MORE_INFO_ROUTE,
  LIST_ROUTE,
  EDIT_ROUTE,
} from "./constant/routes";
import MoreInfo from "./pages/moreInfo";
import ReservationList from "./pages/reservationList";
import EditReservation from "./pages/editReservation";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const isUserLoggedIn = location.pathname.includes(LOGIN_ROUTE);

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem("isLoggedIn"));
    setLoggedIn(!!isAuthenticated);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      {!isUserLoggedIn && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path={HOME_ROUTE} element={<Home loggedIn={loggedIn} />} />
          <Route
            path={LOGIN_ROUTE}
            element={<Login setLoggedIn={setLoggedIn} />}
          />
          <Route
            path={RESERVE_ROUTE}
            element={<Reserve loggedIn={loggedIn} />}
          />
          <Route path={ROOMS_ROUTE} element={<RoomSlider />} />
          <Route path={`${ROOMS_ROUTE}/:roomId`} element={<MoreInfo />} />
          <Route path={GALLERY_ROUTE} element={<Gallery />} />

          <Route path={RESERVATION_ROUTE} element={<ReservationDetails />} />
          <Route element={<PrivateRoute loggedIn={loggedIn} />}>
            <Route path={LIST_ROUTE} element={<ReservationList />} />
          </Route>
          <Route path={MORE_INFO_ROUTE} element={<MoreInfo />} />
          <Route path={EDIT_ROUTE} element={<EditReservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isUserLoggedIn && <Footer />}
    </div>
  );
}

export default App;
