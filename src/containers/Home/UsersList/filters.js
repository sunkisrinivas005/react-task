import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {useDispatch, useSelector} from "react-redux";
import {SEARCH , SORT } from "../../../constants/actionTypes"

const UserFilters = () => {

  let dispatch  = useDispatch();

  let { search, sortValue } = useSelector(({ Users }) => Users);

  const onChange = (e) => {
    let value = e.target.value
    dispatch({
      type :SEARCH,
      payload:value
    })
  }
  return (
    <div style={{ padding: "10px", float:"right" }}>
      <TextField
        id="standard-required"
        label="Search"
        variant = "outlined"
        value = {search ? search : ""}
        onChange = {(e) => onChange(e)}
      />
      <Select
        style={{ width: "200px", marginLeft:"10px"}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Sort"
        variant = "outlined"
        value={sortValue}
        onChange={(e) => dispatch({type : SORT, payload:e.target.value})}
      >
        <MenuItem value={"name"}>Name</MenuItem>
        <MenuItem value={"username"}>UserName</MenuItem>
        <MenuItem value={"email"}>Email</MenuItem>
      </Select>
    </div>
  );
};

export default UserFilters;
