import { GET_ALL_USERS , SEARCH, SORT} from "../constants/actionTypes";

const INIT_STATE = {
  users : [],
  searchUserList : [],
  search : "",
  sortValue : "name",
};

const handleUsersFilter = (state, data) => {
    let {sortValue} = state;
    const compare = (a, b) => {
        if (a[sortValue] < b[sortValue] ){
          return -1;
        }
        if ( a[sortValue] > b[sortValue] ){
          return 1;
        }
        return 0;
      }
      return data.sort(compare)
}
 

  const handleFilter = (state, data) => {
   let {users, search, searchUserList} = state;
   let value = data ? data.toLowerCase() : data
   const compare = (a, b) => {
    if (a[value] < b[value] ){
      return -1;
    }
    if ( a[value] > b[value] ){
      return 1;
    }
    return 0;
  }
    let response =  search.length ? searchUserList : users
    return response.sort(compare);
  }

  const handleSearch = ({users}, data) => {
   let response =  users.filter(i => ((i.name.indexOf(data) > -1) || (i.email.indexOf(data) > -1) || (i.username.indexOf(data) > -1)));
    return response
  }
  

export default function Users(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        users: handleUsersFilter(state, action.payload)
      }
    }
    case SEARCH: {
      return {
        ...state,
        search: action.payload,
        searchUserList : handleSearch(state, action.payload)
      }
    }
    case SORT: {
      return {
        ...state,
        sortValue: action.payload,
        users: handleFilter(state, action.payload)
      }
    }
    default:
      return state;
  }
};
