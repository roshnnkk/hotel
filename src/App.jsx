import { Route, Routes } from "react-router";
import Header from "./components/header";
import Home from "./pages/home";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESERVE_ROUTE,
  ROOMS_ROUTE,
  GALLERY_ROUTE,
} from "./constant/routes.js";
import Login from "./pages/login.jsx";
import RoomSlider from "./pages/rooms.jsx";
import Reserve from "./pages/reserveform.jsx";
import Gallery from "./pages/gallery.jsx";

function App() {
  return (
    <div>
      <Home />
      <Header />

      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={RESERVE_ROUTE} element={<Reserve />} />
        <Route path={ROOMS_ROUTE} element={<RoomSlider />} />
        <Route path={GALLERY_ROUTE} element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
