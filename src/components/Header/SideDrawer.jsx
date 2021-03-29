import React,{useState} from "react";
import { IconButton,List, ListItem, ListItemText,Drawer,Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import useStyles from "./styles";
import {Link} from "react-router-dom";

const SideDrawer = ({navLinks}) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false }) // Add this
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
             <Typography component={Link}  to={path} variant="h6" className={classes.linkBlackText} >
                   <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
             </Typography>
          
          
          
        ))}
      </List>
    </div>
  );


  return (
    <React.Fragment>
    <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("right", true)}>
      <Menu fontSize="large" style={{ color: `black` }}/>
    </IconButton>
    <Drawer
  anchor="right"
  open={state.right}
  onOpen={toggleDrawer("right", true)}
  onClose={toggleDrawer("right", false)}
>
  {sideDrawerList("right")}
</Drawer>
  </React.Fragment>
  )
}
export default SideDrawer;