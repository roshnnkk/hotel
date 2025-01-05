import { Route, Routes } from "react-router";
import Header from "./components/header";
import Home from "./pages/home";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESERVE_ROUTE,
  ROOMS_ROUTE,
  CONTACT_ROUTE,
} from "./constant/routes.js";


function App() {
  return (
    <div>
    
      <Home />
      <Header />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        {/* <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={RESERVE_ROUTE} element={<Reserve />} />
        <Route path={ROOMS_ROUTE} element={<Rooms />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} /> */}

      </Routes>
    </div>
  );
}

export default App;
