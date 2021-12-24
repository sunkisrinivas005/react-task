import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { get } from "lodash";
import { getAllTransactions } from "../../../actions/transactions";
import TransactionCard from "../../../components/TransactionCard";

const UserList = () => {
  let dispatch = useDispatch();

  let { count, transactions } = useSelector(({ Transactions }) => Transactions);

  let { loggedUser } = useSelector(({ Users }) => Users);
  const { user } = loggedUser;
  console.log(transactions, "transcations, isLoading");

  const [page, setPage] = React.useState(0);

  const handleGetTransactions = async () => {
    dispatch(
      getAllTransactions({
        walletId: user.walletId,
        page: page,
        limit: 10,
      })
    );
  };

  useEffect(() => {
    handleGetTransactions();
  }, [page]);

  return (
    <>
      <div>
        <p>Transaction</p>
        <div className="col-lg-12 row">
          {transactions &&
            transactions.map((i) => {
              return (
                <div className="col-lg-3" style={{ margin: "10px" }}>
                  <TransactionCard
                    id={i.txn_id}
                    name={get(i, "fromAddress.name")}
                    amount={get(i, "amount")}
                    transactionType={get(i, "transactionType")}
                    from={get(i, "from")}
                  />
                </div>
              );
            })}
        </div>

        {count > 10 && (
          <Button onClick={() => setPage(page + 1)}> Next Page</Button>
        )}
      </div>
    </>
  );
};

export default UserList;
