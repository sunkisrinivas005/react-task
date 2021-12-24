import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaControlCard({
  name,
  transactionType,
  description,
  amount,
  from,
}) {
  let { users, loggedUser } = useSelector(({ Users }) => Users);
  const { user } = loggedUser;

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "20px" }}>
            {from === user.walletId && transactionType === "DEBIT"
              ? "DEBIT"
              : transactionType === "ADD_MONEY"
              ? "MONEY ADDED"
              : "CREDITED"}
          </p>
        </Box>
      </Box>
      <p style={{ margin: "40px" }}>
        amount: {amount && parseInt(amount).toFixed(4)}
      </p>
    </Card>
  );
}
