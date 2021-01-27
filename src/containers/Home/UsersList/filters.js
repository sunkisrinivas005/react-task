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
    <div className = "col-lg-12 row"  style = {{float:"right"}}>
      <div className = "col-lg-3"></div>
      <div className = "col-lg-3"></div>
      <div className = "col-lg-3" style = {{marginBottom:"10px"}}>
      <TextField
      fullWidth
        id="standard-required"
        label="Search"
        variant = "outlined"
        value = {search ? search : ""}
        onChange = {(e) => onChange(e)}
      />
      </div>

      <div className = "col-lg-3">
      <Select
      fullWidth
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
    </div>
  );
};

export default UserFilters;
