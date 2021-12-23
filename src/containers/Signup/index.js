import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../actions/users";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  //   React.useEffect(() => {
  //     const handleFetch = () => {
  //       let walletID = localStorage.getItem("walletId");
  //       !walletID && history.push("/login");
  //     };
  //   }, []);
  const [email, setEmail] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [name, setName] = React.useState("");

  const handleSubmit = () => {
    const callback = () => {
      history.push("/home/users");
    };
    dispatch(createUser({ emailAddress: email, balance, name }, callback));
  };

  return (
    <div>
      <div className="col-lg-12">
        <h3
          style={{
            padding: "10px",
            textAlign: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          Signup
        </h3>
      </div>
      <div className="col-lg-12 row" style={{ justifyContent: "center" }}>
        <div className="col-lg-5" style={{ justifyContent: "center" }}>
          <ValidatorForm onSubmit={handleSubmit}>
            <div className="col-lg-10" style={{ margin: "20px" }}>
              <TextValidator
                label="name"
                fullWidth
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                variant="outlined"
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </div>
            <div className="col-lg-10" style={{ margin: "20px" }}>
              <TextValidator
                label="Email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                variant="outlined"
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />
            </div>
            <div className="col-lg-10" style={{ margin: "20px" }}>
              <TextValidator
                label="Balance"
                fullWidth
                onChange={(e) => setBalance(e.target.value)}
                name="balance"
                value={balance}
                type="number"
                variant="outlined"
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </div>

            <div
              className="col-lg-12 row"
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <Button
                onClick={() => history.push("/login")}
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
