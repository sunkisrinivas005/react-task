import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Link from '@material-ui/core/Link';
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    fontWeight:"bold"
  },
  email : {
      fontSize:16
  },
  pos: {
    marginBottom: 12,
  },
});


const UserInfoCard = (data ) => {
    let {history} = data;
    const classes = useStyles();
    return (
      <div className = "col-lg-12" key={data.Title} style = {{padding:"20px"}}>
        <Card key={data.id} style = {{cursor:"pointer"}} onClick = {() => history.push(`/home/user/${data.id}`) }>
          <CardContent>
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
              style = {{float:"right", padding:"5px"}}
            >
                 <Link href="#" onClick={(e) => e.preventDefault()}>
                 {data.email}
               </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
}

export default UserInfoCard