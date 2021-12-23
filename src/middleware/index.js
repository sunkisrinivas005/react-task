import axios from "axios";
import { get } from "lodash";
let urlConfig = "http://evening-eyrie-99177.herokuapp.com/";
const instance = axios.create({
  baseURL: urlConfig,
});

const API = async (reqObj) => {
  return await new Promise(async (resolve) => {
    let response;
    try {
      response = await instance(reqObj);
      let responseObj = {
        code: response.status,
        data: get(response, "data.data"),
        message: get(response, "data.message"),
      };
      resolve(responseObj);
    } catch (error) {
      let { response } = error;
      let errorObj = {
        code: get(response, "status"),
        status: get(response, "data.status"),
        message: get(response, "data.message"),
        data: get(response, "data.data"),
      };
      resolve(errorObj);
    }
  });
};

export default API;
