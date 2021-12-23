import { get } from "lodash";
import {
  GET_ALL_TRANSACTIONS,
  GET_ALL_TRANSACTIONS_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE,
} from "../constants/actionTypes";

const INIT_STATE = {
  transactions: [],
  isLoading: false,
  errorMessage: "",
  count: 0,
};

export default function Transactions(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ALL_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        transactions: get(action, "payload.transactions"),
        count: get(action, "payload.count"),
      };
    }
    case GET_ALL_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        transactions: [],
        count: 0,
        errorMessage: get(action, "payload.message"),
      };
    }
    default:
      return state;
  }
}
