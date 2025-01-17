import { ADD_RESERVATION } from "../actions/reservationAction";

const initialState = [];

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reservationReducer;
