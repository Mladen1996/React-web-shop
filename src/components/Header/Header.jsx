import React from 'react';
import { AppBar,IconButton,List, ListItem, ListItemText,Container,Hidden,Typography,Badge} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import useStyles from "./styles";
import SideDrawer from "./SideDrawer";
import logo from "../../assets/logo1.png";
import {Link,useLocation} from "react-router-dom";

const navLinks = [
    { title: `Huawei`, path: `/huawei` },
    { title: `Samsung`, path: `/samsung` },
    { title: `Iphone`, path: `/iphone` },
  ];


const Header = ({totalItems}) => {
    const classes = useStyles();
    const location=useLocation();

  return (
    <AppBar position="static" color="white">
    
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          <Typography component={Link}  to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Е-commerce" width="170px" className={classes.image} />
                       
        </Typography>
        <Hidden smDown>
        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
            {navLinks.map(({ title, path }) => (
                 <Typography component={Link}  to={path} variant="h6" className={classes.linkText} color="inherit">
                     <ListItem button>
                <ListItemText primary={title} />
                </ListItem>
                 </Typography>
            ))}
        </List>
        </Hidden>
        {
                        location.pathname!='/cart'  && (
                            <div className={classes.button}>
                           
                            <IconButton component={Link}  to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                           
                           
                        </div>
                        )
                    }
        <Hidden mdUp>
        <SideDrawer navLinks={navLinks} />
        </Hidden>
  
                   
          </Container>
     
    </AppBar>
  )
}
export default Header