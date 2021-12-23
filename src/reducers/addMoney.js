import { get } from "lodash";
import {
  ADD_MONEY,
  ADD_MONEY_FAILURE,
  ADD_MONEY_SUCCESS,
  CLOSE_MESSAGE,
} from "../constants/actionTypes";

const INIT_STATE = {
  isLoading: false,
  errorMessage: "",
  successMessage: "",
};

export default function Transactions(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_MONEY: {
      return {
        isLoading: true,
        successMessage: "",
        errorMessage: "",
      };
    }
    case ADD_MONEY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        successMessage: get(action, "payload.message"),
      };
    }
    case ADD_MONEY_FAILURE: {
      return {
        ...state,
        isLoading: false,
        successMessage: "",
        errorMessage: get(action, "payload.message"),
      };
    }
    case CLOSE_MESSAGE: {
      return {
        ...state,
        isLoading: false,
        successMessage: "",
        errorMessage: "",
      };
    }
    default:
      return state;
  }
}
