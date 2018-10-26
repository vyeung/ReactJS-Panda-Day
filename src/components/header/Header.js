import React, { Component } from 'react';
import "../../styles.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from "./sideDrawer";

class Header extends Component {
  state = {
    openDrawer: false,
    showHeader: false
  }

  componentDidMount() {
    //add a scroll EventListener
    window.addEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = () => {
    //when user scrolls down at all, header is solid color 
    if(window.scrollY > 0)
      this.setState({showHeader: true});
    //when scroll is at very top, header is transparent
    else
      this.setState({showHeader: false});
  }

  toggleDrawerHandler = (value) => {
    this.setState({openDrawer: value});
  }
  
  render() {
    const appBarStyle = {
      backgroundColor: this.state.showHeader ? "#2f2f2f" : "transparent",
      boxShadow: "none",
      padding: "10px 0px"
    };
    
    const iconButtonStyle = {
      color: "inherit"
    };

    return (
      <div>
        <AppBar style={appBarStyle} position="fixed">
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_pds">
                Panda Day Society
              </div>
            </div>

            <IconButton 
              style={iconButtonStyle} 
              aria-label="Menu" 
              onClick={() => this.toggleDrawerHandler(true)}>
              <MenuIcon />
            </IconButton>

            <SideDrawer
              openDrawer={this.state.openDrawer}
              onClose={(value) => this.toggleDrawerHandler(value)} 
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;