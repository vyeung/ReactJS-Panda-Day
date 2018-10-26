import React from 'react';

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from '@material-ui/core/styles';

const newStyles = {
  //Drawer doesn't have a root element (see docs), so can't use inline-style
  drawerChanges: {
    width: "25%",
  },
  listChanges: {
    fontSize: "2.5vw",
  },
  listItemChanges: {
    justifyContent: "center"
  }
};

const sideDrawer = (props) => {
  //using override with classes
  const {classes} = props;
  
  return (
    //anchor, open are specific to Drawer 
    <Drawer 
      classes={{paper:classes.drawerChanges}} 
      anchor="right" 
      open={props.openDrawer} 
      onClose={() => props.onClose(false)}>
      
      <List classes={{root:classes.listChanges}} component="nav">
        {/*button is specific to ListItem*/}
        <ListItem classes={{root:classes.listItemChanges}} button onClick={() => console.log("c")}>
          Countdown
        </ListItem>
        <ListItem classes={{root:classes.listItemChanges}} button onClick={() => console.log("p")}>
          Party Info
        </ListItem>
        <ListItem classes={{root:classes.listItemChanges}} button onClick={() => console.log("h")}>
          Highlights
        </ListItem>
        <ListItem classes={{root:classes.listItemChanges}} button onClick={() => console.log("m")}>
          Merchandise
        </ListItem>
        <ListItem classes={{root:classes.listItemChanges}} button onClick={() => console.log("l")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(newStyles) (sideDrawer);