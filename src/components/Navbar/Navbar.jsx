import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,Typography,Container} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import logo from "../../assets/logo1.jpg";
import {Link,useLocation} from "react-router-dom";
import useStyles from "./styles";

const Navbar = ({totalItems}) => {
    const classes=useStyles();
    const location=useLocation();

   
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Container maxWidth="lg">
                <Toolbar>
                    <Typography component={Link}  to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Е-commerce" width="170px" className={classes.image} />
                       
                    </Typography>

                    <Typography component={Link}  to="/huawei" variant="h6" className={classes.title} color="inherit">
                        Huawei
                       
                    </Typography>
                    <Typography component={Link}  to="/samsung" variant="h6" className={classes.title} color="inherit">
                        Samsung
                       
                    </Typography>
                    <Typography component={Link}  to="/iphone" variant="h6" className={classes.title} color="inherit">
                        Iphone
                       
                    </Typography>
                 
                   


                    <div className={classes.grow} />
                    {
                        location.pathname!=='/cart'  && (
                            <div className={classes.button}>
                            <Link> </Link>
                            <IconButton component={Link}  to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                           
                           
                        </div>
                        )
                    }
                   
                </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar
