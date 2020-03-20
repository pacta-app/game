import React, { Component } from "react";
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import { withTranslation } from "react-i18next";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import OfflineInfo from "./common/OfflineInfo";
import ConnectionInfo from "./common/ConnectionInfo";
import LanguageSelector from "./common/LanguageSelector";

const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    position: "relative",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
});

class Topbar extends Component {

  handleDrawerToggle = () => {
    this.props.onToggle();            
  }

  render() {
    const { classes, t } = this.props;

    return (
      <AppBar 
        color="primary" 
        className={classNames(classes.appBar, {
          [classes.appBarShift]: this.props.menutoggle,
        })}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Tooltip
                title={t("menu.top.toggle")}
                aria-label={t("menu.top.toggle")}
                disableFocusListener
              >
                <IconButton
                  color="inherit"
                  aria-label={t("menu.top.toggle")}
                  onClick={this.handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <OfflineInfo />
              <ConnectionInfo />
              <LanguageSelector />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withTranslation()(withStyles(styles)(Topbar));
