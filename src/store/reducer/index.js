import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import authReducer from "./authReducer";
import reservationReducer from "./reservationReducer";
const rootReducer = combineReducers({
  userData: dataReducer,
  auth: authReducer,
  reservation: reservationReducer,
});

export default rootReducer;
