import { get } from "lodash";
import {
  GET_ALL_USERS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN,
} from "../constants/actionTypes";

const INIT_STATE = {
  loggedUser: {
    isLoading: false,
    user: {},
    message: "",
  },
  users: [],
};

export default function Users(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        users: [...action.payload],
      };
    }
    case LOGIN: {
      return {
        ...state,
        loggedUser: { ...state.loginUser, isLoading: true },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggedUser: {
          ...state.loginUser,
          user: { ...action.payload },
          isLoading: false,
          message: "successful",
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loggedUser: {
          isLoading: false,
          user: {},
          message: get(action, "payload.message"),
        },
      };
    }
    default:
      return state;
  }
}
