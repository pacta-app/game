import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { withTranslation } from "react-i18next";

class MenuToggle extends Component {
  
  handleDrawerToggle = () => {
    this.props.handleDrawerToggle(false);            
}

  render() {

    return (
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={this.handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
    );
  }
}

export default withTranslation()(MenuToggle);
