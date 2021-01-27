import React from "react";
import UsersList from "./UsersList/index";
import UserFilters from "./UsersList/filters";
const Home = ({history}) => {
  return (
    <div style = {{backgroundColor:"#D3D3D3"}}>
        <div className="col-lg-12">
          <h3
            style={{
              padding: "10px",
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            Users
          </h3>
          <UserFilters />
        </div>
        <div>
        <UsersList history = {history} />
        </div>
    </div>
  );
};

export default Home;
