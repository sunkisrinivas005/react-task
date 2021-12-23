import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Users from "./users";
import Transactions from "./transactions";
import AddMoney from "./addMoney";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    Users: Users,
    Transactions: Transactions,
    AddMoney: AddMoney,
  });
