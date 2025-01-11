import { SAVE_USER_DATA } from "../actions/dataAction";

const initialState = {
  item: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      const updatedState = {
        ...state,
        item: [...state, item, action.payload],
      };

      return updatedState;
    default:
      return state;
  }
};

export default dataReducer;
