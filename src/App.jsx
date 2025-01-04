import { Route, Routes } from "react-router";
import Header from "./components/header";
import Home from "./pages/home";
import { HOME_ROUTE, LOGIN_ROUTE, RESERVE_FORM_ROUTE, ROOMS_ROUTE, CONTACT_ROUTE } from './constant/routes.js';

function App() {
  return (
    <div>
      <Home />
      <Header />

    </div>
  );
}

export default App;
