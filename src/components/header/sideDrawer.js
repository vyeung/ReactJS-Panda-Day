import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { scroller } from "react-scroll";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
  
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1000, //in ms
      delay: 100,     //in ms
      smooth: true,
      offset: -83     //so header isn't in the way
    });
    //close sideDrawer after the scroll is done
    props.onClose(false);
  }

  //using override with classes (see docs)
  const {classes} = props;
  
  return (
    //anchor, open are specific to Drawer 
    <Drawer 
      classes={{paper:classes.drawerChanges}} 
      anchor="right" 
      open={props.openDrawer} 
      onClose={() => props.onClose(false)}
    >  
      <List classes={{root:classes.listChanges}} component="nav">
        {/*button is specific to ListItem*/}
        <ListItem 
          classes={{root:classes.listItemChanges}}  
          onClick={() => scrollToSection("countdown")}
          button>
          Countdown
        </ListItem>
        
        <ListItem 
          classes={{root:classes.listItemChanges}}  
          onClick={() => scrollToSection("partyInfo")}
          button>
          Party Info
        </ListItem>
        
        <ListItem 
          classes={{root:classes.listItemChanges}} 
          onClick={() => scrollToSection("funFacts")}
          button>
          Fun Facts
        </ListItem>
        
        <ListItem 
          classes={{root:classes.listItemChanges}} 
          onClick={() => scrollToSection("merchandise")}
          button>
          Merchandise
        </ListItem>
        
        <ListItem 
          classes={{root:classes.listItemChanges}} 
          onClick={() => scrollToSection("poi")}
          button>
          POI
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(newStyles) (sideDrawer);