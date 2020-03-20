import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  logospin: {
    animation: "logo-spin infinite 1.5s linear",
    margin: "50px auto",
    height: 100,
    width: 100,
    color: theme.palette.primary.light,
    display: "block"
  }
});

class LogoSpin extends Component {

  render() {
    const { classes } = this.props;
    return (
      <SvgIcon className={classes.logospin}>
        <rect x="3.05" y="15.18" width="18.31" height="1.77" transform="translate(-3.37 3.24) rotate(-13.32)"/>
        <rect x="14.79" y="0.34" width="4.42" height="12.36" transform="translate(-1.05 4.09) rotate(-13.32)"/>
        <rect x="8.08" y="1.97" width="4.42" height="12.36" transform="translate(-1.6 2.59) rotate(-13.32)"/>
        <rect x="1.36" y="3.55" width="4.42" height="12.36" transform="translate(-2.15 1.09) rotate(-13.32)"/>
        <path d="M4,20A10.4,10.4,0,0,0,14,23.82a10.4,10.4,0,0,0,7.42-7.94Z"/>
      </SvgIcon>
    );
  }
}

export default withStyles(styles)(LogoSpin);
