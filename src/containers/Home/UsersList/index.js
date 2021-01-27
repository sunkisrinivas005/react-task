import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserInfoCard from "./userInfoCard";
import { getAllUsers } from "../../../actions/users";

const UserList = ({history}) => {
   let dispatch = useDispatch();

  const handlegetAllUsers = async () => {
    dispatch(getAllUsers());
  };

  useEffect(() => {
    handlegetAllUsers();

  }, []);

  let { users, search, searchUserList } = useSelector(({ Users }) => Users);
   let data =  search && search.length ? searchUserList : users;
  return (
    <div className = "col-lg-12 row">
   {data ?
        data.map((i, n) => {
          return <UserInfoCard {...i} key={n} history = {history} />;
        })  : 
         <div>
          <h3> No Data Found</h3>
         </div>
        }
    </div>
  );
};

export default UserList;
