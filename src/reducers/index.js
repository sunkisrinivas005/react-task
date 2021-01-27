import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Users from './users';

export default (history) => combineReducers({
  router: connectRouter(history),
  Users : Users
});
