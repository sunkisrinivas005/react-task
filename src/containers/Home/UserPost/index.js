import React, {useState, useEffect} from "react";
import {getPostByUserID, getUserDetailsById} from "../../../actions/users"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Link from '@material-ui/core/Link';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    title: {
      fontSize: 18,
      fontWeight:"bold"
    //   color:"black"
    },
    address : {
        fontSize : 18
    },
    email : {
        fontSize:16,
    },
    body : {
        fontSize:16,
    },
    company : {
        fontSize: 18
    }
  });

const UserPost  = ({match}) => {
    const classes = useStyles();
   let [posts, setPosts] = useState([]);
   let [userDetails, setUserDetails] = useState({})

   const handleGetPostByUser = async() => {
    let {params} = match
    let response = await getPostByUserID(params.id);
     setPosts(response)
   }

   const handleGetUserById = async() => {
    let {params} = match;
    let response = await getUserDetailsById(params.id);
    setUserDetails(response)
   }

    useEffect(() => {
      handleGetPostByUser();
      handleGetUserById()
    }, [])


    const handleGetCompanyDetailUI = () => {
        return(
            <Card key={userDetails.name} style = {{height:"200px", borderRadius:"10px"}}>
            <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              style = {{textAlign:"center"}}
            >
             Company
            </Typography>
            <Typography
              className={classes.company}
              color="textSecondary"
              gutterBottom
            >
             {userDetails.company? userDetails.company.name : ""}
            </Typography>
            <Typography
              className={classes.company}
              color="textSecondary"
              gutterBottom
            >
             {userDetails.company? userDetails.company.bs : ""}
            </Typography>
            <Typography
              className={classes.company}
              color="textSecondary"
              gutterBottom
            >
             {userDetails.company? userDetails.company.catchPhrase : ""}
            </Typography>
            </CardContent>
            </Card>
        )
    }

    const handleContactDetailUI = () => {
        return(
            <Card key={userDetails.name} style = {{height:"200px", borderRadius:"10px"}}>
            <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              style = {{textAlign:"center"}}
            >
             Contact Info
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
             {userDetails.name} {userDetails.username}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
             <span> Email : <a href="#" onClick={(e) => e.preventDefault()}>
                {userDetails.email}
               </a></span>   
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
               <span>Phone : <a href="#" rel="noopener" onClick={(e) => e.preventDefault()}>
                  {userDetails.phone}
               </a></span>
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
                 <span>Website : <a href="#" rel="noopener" onClick={(e) => e.preventDefault()}>
                  {userDetails.website}
               </a></span>
            </Typography>
            </CardContent>
            </Card>
        )
    }

    const handleAddressDetailUI = () => {
        return (
           
            <Card key={userDetails.name} style = {{height:"200px", borderRadius:"10px"}}>
                 <CardContent>
                 <Typography
                   className={classes.title}
                   color="textSecondary"
                   gutterBottom
                   style = {{textAlign:"center"}}
                 >
                  Address
                 </Typography>
                 <Typography
                   className={classes.address}
                   color="textSecondary"
                   gutterBottom
                 >
                  {userDetails.address && userDetails.address.suite ? userDetails.address.suite : "" } - {userDetails.address && userDetails.address.street ? userDetails.address.street : ""} - {userDetails.address && userDetails.address.city ? userDetails.address.city : ""} - {userDetails.address && userDetails.address.zipcode ? userDetails.address.zipcode : ""}
                 </Typography>
                 </CardContent>
                 </Card>
        )
    }

    return(
       <div style = {{backgroundColor :"#D3D3D3"}}>
          <h3 style = {{padding:"35px"}}>User : {userDetails.name}</h3>
          <div className = "col-lg-12 row" style = {{justifyContent:"space-between"}}>
         <div className = "col-lg-3" style = {{padding:"10px"}}>
            {handleContactDetailUI()}
       </div>
       <div className = "col-lg-3" style = {{padding:"10px"}}>
           {handleAddressDetailUI()}
       </div>
       <div className = "col-lg-3" style = {{padding:"10px"}}>
       {handleGetCompanyDetailUI()}
       </div>
          </div>
          <h3 style = {{padding:"30px"}}> Posts by {userDetails.name}</h3>
          <div className = "col-lg-12 row">
            {
                posts && posts.map(post => {
                  return(
                    <div key = {post.id} className = "col-lg-3" style = {{padding:"10px"}}>
                    <Card key={userDetails.name} style = {{paddingBottom:"30px", height:"200px", borderRadius:"10px"}}>
                         <CardContent>
                         <Typography
                           className={classes.title}
                           color="textSecondary"
                           gutterBottom
                           style = {{textAlign:"center"}}
                         >
                          {post.title}
                         </Typography>
                         <Typography
                           className={classes.body}
                           color="textSecondary"
                           gutterBottom
                           style = {{padding:"10px", textAlign:"center", overflowX:"hidden"}}
                         >
                          {post.body ? post.body.slice(0, 150) : ""}
                         </Typography>
                         </CardContent>
                         </Card>
                    </div>
                  )   
                })
            }
          </div>
       </div>
    )
}

export default UserPost