import React, { useEffect } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { addMoney } from "../../../actions/transactions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState("");

  let { loggedUser } = useSelector(({ Users }) => Users);
  let { isLoading, successMessage, errorMessage } = useSelector(
    ({ AddMoney }) => AddMoney
  );
  console.log(loggedUser, "loggedUser");

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        dispatch({
          type: "CLOSE_MESSAGE",
        });
      }, 3000);
    }
  }, [successMessage]);

  const handleSubmit = () => {
    dispatch(
      addMoney({
        walletId: get(loggedUser, "user.walletId"),
        amount,
        transactionType: "ADD_MONEY",
      })
    );
  };

  return (
    <div>
      <div className="col-lg-12 row" style={{ justifyContent: "center" }}>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        {isLoading && <CircularProgress size={40} />}
        <div className="col-lg-5" style={{ justifyContent: "center" }}>
          <ValidatorForm
            onSubmit={() => handleSubmit()}
            onError={(errors) => console.log(errors)}
          >
            <TextValidator
              label="Amount"
              fullWidth
              onChange={(e) => setAmount(e.target.value)}
              name="Amount"
              value={amount}
              type="number"
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <div
              className="col-lg-12 row"
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <Button type="submit" variant="contained" color="primary">
                Add Money
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
