import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserInfoCard = (data) => {
  let { handleOpen } = data;
  const classes = useStyles();
  return (
    <div className="col-lg-4" key={data.Title} style={{ padding: "20px" }}>
      <Card key={data.id} style={{ cursor: "pointer" }}>
        <CardContent>
          <div className="col-lg-4 row">
            <div className="col-lg-11" style={{ alignItems: "center" }}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {data.name}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {data.username}
              </Typography>
              <Typography
                className={classes.email}
                color="textSecondary"
                gutterBottom
              >
                <span
                  style={{ color: "hsl(193 46% 69% / 1)" }}
                  onClick={(e) => e.preventDefault()}
                >
                  {data.emailAddress}
                </span>
              </Typography>
            </div>
          </div>
          <Button
            onClick={() => handleOpen(data.walletId)}
            variant="contained"
            color="primary"
          >
            Send Money
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserInfoCard;
