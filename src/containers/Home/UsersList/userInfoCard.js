import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
            <div className = "col-lg-12 row">
            <div className = "col-lg-1">
            <div style = {{backgroundColor :"#d3d3d3", width:"100px", height:"100px", borderRadius:"100px"}}>

            </div>
           </div>
           <div className = "col-lg-11" style = {{alignItems:"center"}}>
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
                <span style = {{color: "hsl(193 46% 69% / 1)"}} onClick={(e) => e.preventDefault()}>
                {data.email}
              </span>
           </Typography>
           </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}

export default UserInfoCard