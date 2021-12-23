import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../actions/users";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  //   React.useEffect(() => {
  //     const handleFetch = () => {
  //       let walletID = localStorage.getItem("walletId");
  //       !walletID && history.push("/login");
  //     };
  //   }, []);
  const [walletID, setWalletID] = React.useState("");
  let { loggedUser } = useSelector(({ Users }) => Users);
  console.log(loggedUser, "loggedUser");

  const handleSubmit = () => {
    const callback = () => {
      history.push("/home/users");
    };
    dispatch(loginUser(walletID, callback));
  };

  const handleSignup = () => {
    history.push("/signup");
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
          Login
        </h3>
      </div>
      <div className="col-lg-12 row" style={{ justifyContent: "center" }}>
        <div className="col-lg-5" style={{ justifyContent: "center" }}>
          <ValidatorForm
            //   ref="form"
            onSubmit={() => handleSubmit()}
            //   onError={(errors) => console.log(errors)}
          >
            <TextValidator
              label="Wallet ID"
              fullWidth
              onChange={(e) => setWalletID(e.target.value)}
              name="walletID"
              value={walletID}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <div
              className="col-lg-12 row"
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button
                onClick={handleSignup}
                style={{ margin: "0px 10px" }}
                variant="contained"
                color="primary"
              >
                Sign up
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
