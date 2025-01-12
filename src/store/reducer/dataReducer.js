import { SAVE_USER_DATA } from "../actions/dataAction";

const initialState = {
  items: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      const updatedState = {
        ...state,
        items: [...state.items, action.payload],
      };

      return updatedState;
    default:
      return state;
  }
};

export default dataReducer;
