import {
  GET_ALL_USERS,
  SHOW_MESSAGE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN,
} from "../constants/actionTypes";
import history from "../utils/history";
import { get, isEmpty } from "lodash";
import API from "../middleware/index";

export const getAllUsers = () => {
  return async (dispatch) => {
    let url = "/user/get-all";
    let method = "GET";
    const headers = {
      "Content-Type": "application/json",
    };
    let response = await API({ url, method, headers });
    const body = response && response.data ? response.data : [];
    if (response.code === 200 && body.length) {
      dispatch({
        type: GET_ALL_USERS,
        payload: body ? body : {},
      });
    } else if (response.code !== 200) {
      dispatch({
        type: SHOW_MESSAGE,
        payload: body && body.data ? body.data : {},
      });
    }
  };
};

export const getPostByUserID = async (id) => {
  let url = `/posts?userId=${id}`;
  let method = "GET";
  const headers = {
    "Content-Type": "application/json",
  };
  let response = await API({ url, method, headers });
  const body = response && response.data ? response.data : [];
  return body;
};

export const getUserDetailsById = async (id) => {
  let url = `/users/${id}`;
  let method = "GET";
  const headers = {
    "Content-Type": "application/json",
  };
  let response = await API({ url, method, headers });
  const body = response && response.data ? response.data : [];
  return body;
};

export const loginUser = (id, c) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN,
    });
    let url = `/user/get-details/${id}`;
    let method = "GET";
    const headers = {
      "Content-Type": "application/json",
    };
    let response = await API({ url, method, headers });
    const body = get(response, "data[0]");
    if (response.code === 200 && !isEmpty(body)) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: body ? body : {},
      });
      localStorage.setItem("walletId", id);
      c();
    } else if (response.code !== 200) {
      dispatch({
        type: LOGIN_FAILED,
        payload: { message: get(response, "message") },
      });
    }
  };
};

export const createUser = (data, c) => {
  return async (dispatch) => {
    let url = `/user/create`;
    let method = "POST";
    const headers = {
      "Content-Type": "application/json",
    };

    let response = await API({ url, method, data, headers });
    const body = get(response, "data");
    if (response.code === 200 && !isEmpty(body)) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: body ? body : {},
      });
      localStorage.setItem("walletId", get(body, "walletId"));
      c();
    } else if (response.code !== 200) {
      dispatch({
        type: LOGIN_FAILED,
        payload: { message: get(response, "message") },
      });
    }
  };
};
