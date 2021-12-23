import {
  GET_ALL_TRANSACTIONS_FAILURE,
  LOGIN_SUCCESS,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE,
  GET_ALL_TRANSACTIONS_SUCCESS,
  ADD_MONEY_SUCCESS,
  ADD_MONEY,
  ADD_MONEY_FAILURE,
} from "../constants/actionTypes";
import { get, isEmpty } from "lodash";
import API from "../middleware/index";

export const createTransaction = (data, c) => {
  return async (dispatch) => {
    let url = `/transaction/create`;
    let method = "POST";
    const headers = {
      "Content-Type": "application/json",
    };

    let response = await API({ url, method, data, headers });
    const body = get(response, "data.data");
    console.log(body, response, "body");
    if (response.code === 200 && !isEmpty(body)) {
      dispatch({
        type: CREATE_TRANSACTION_SUCCESS,
        payload: body ? body : {},
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: get(body, "data.user"),
      });
      c();
    } else if (response.code !== 200) {
      dispatch({
        type: CREATE_TRANSACTION_FAILURE,
        payload: { message: get(response, "message") },
      });
    }
  };
};

export const getAllTransactions = (params, c) => {
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_TRANSACTIONS_SUCCESS,
    });
    let url = `/transaction/get-all-transactions`;
    let method = "GET";
    const headers = {
      "Content-Type": "application/json",
    };

    let response = await API({ url, method, headers, params });
    const body = get(response, "data");
    if (response.code === 200 && !isEmpty(body)) {
      dispatch({
        type: GET_ALL_TRANSACTIONS_SUCCESS,
        payload: {
          transactions: get(response, "data.transactions"),
          count: get(response, "data.total"),
        },
      });
    } else if (response.code !== 200) {
      dispatch({
        type: GET_ALL_TRANSACTIONS_FAILURE,
        payload: { message: get(response, "message") },
      });
    }
  };
};

export const addMoney = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_MONEY,
    });
    let url = `/transaction/add-money`;
    let method = "POST";
    const headers = {
      "Content-Type": "application/json",
    };

    let response = await API({ url, method, data, headers });
    const body = get(response, "data");
    if (response.code === 200 && !isEmpty(body)) {
      dispatch({
        type: ADD_MONEY_SUCCESS,
        payload: {
          message: "successful",
        },
      });
    } else if (response.code !== 200) {
      dispatch({
        type: ADD_MONEY_FAILURE,
        payload: { message: get(response, "message") },
      });
    }
  };
};
