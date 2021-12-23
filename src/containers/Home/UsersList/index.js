import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserInfoCard from "./userInfoCard";
import { Button } from "@material-ui/core";
import Dialog from "../../../components/Dialog";
import { getAllUsers, loginUser } from "../../../actions/users";
import { createTransaction } from "../../../actions/transactions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { isEmpty } from "lodash";

const UserList = ({ history }) => {
  let dispatch = useDispatch();

  const handlegetAllUsers = async () => {
    dispatch(getAllUsers());
  };

  useEffect(() => {
    handlegetAllUsers();
  }, []);

  let { users, loggedUser } = useSelector(({ Users }) => Users);
  const { user } = loggedUser;

  useEffect(() => {
    let walletID = localStorage.getItem("walletId");
    isEmpty(user) && dispatch(loginUser(walletID, () => {}));
  }, [user]);

  const [isOpen, setOpen] = React.useState(false);
  const [from, setFrom] = React.useState("");
  const [money, setMoney] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSendMoney = () => {
    const callback = () => {
      setMessage("successful");
      setTimeout(() => {
        setOpen(false);
        setMoney(0);
        setFrom("");
        setMessage("");
      }, 2000);
    };
    dispatch(
      createTransaction(
        {
          fromAddress: user.walletId,
          amount: money,
          toAddress: from,
          transactionType: "DEBIT",
        },
        callback
      )
    );
  };
  console.log(loggedUser, "walletId");
  return (
    <>
      <div>
        <h4>Email: {user && user.emailAddress}</h4>
        <p>WalletId: {user && user.walletId}</p>
        <p>balance: {user && user.balance}</p>
      </div>

      <div className="col-lg-12 row">
        {users ? (
          users.map((i, n) => {
            return (
              <UserInfoCard
                {...i}
                key={n}
                history={history}
                handleOpen={(id) => {
                  console.log(id);
                  setFrom(id);
                  setOpen(true);
                }}
              />
            );
          })
        ) : (
          <div>
            <h3> No Data Found</h3>
          </div>
        )}
        <Dialog open={isOpen} handleClose={() => setOpen(false)}>
          {message && <p>{message}</p>}
          <ValidatorForm onSubmit={() => handleSendMoney()}>
            <TextValidator
              label="Amount"
              fullWidth
              onChange={(e) => setMoney(e.target.value)}
              name="Amount"
              value={money}
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
            </div>
          </ValidatorForm>
        </Dialog>
      </div>
    </>
  );
};

export default UserList;
