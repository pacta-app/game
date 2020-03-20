import React, { Component } from "react";
import { drizzleConnect } from "drizzle-react";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CachedIcon from "@material-ui/icons/Cached";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withTranslation } from "react-i18next";

class SettingsNotification extends Component {
  state = {
    settingsMenu: null,
    notifications: []
  };

  handleSettingsIconClick = event => {
    this.setState({ settingsMenu: event.currentTarget });
  };
  handlesettingsMenuClose = () => {
    this.setState({ settingsMenu: null });
  };
  render() {
    const { t } = this.props;
    const { settingsMenu } = this.state;
    return (
      <>
        <Tooltip
          title={t("menu.top.settings")}
          aria-label={t("menu.top.settings")}
          disableFocusListener
        >
          <IconButton
            color="inherit"
            aria-owns={settingsMenu ? "settings-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleSettingsIconClick}
          >
            {this.state.notifications.length > 0 ? (
              <Badge color="default" badgeContent="!">
                <NotificationsIcon />
              </Badge>
              ) : (
            <NotificationsIcon />
              )}
          </IconButton>
        </Tooltip>
        <Popover 
          id="settings-menu" 
          open={Boolean(settingsMenu)} 
          anchorEl={settingsMenu} 
          onClose={this.handlesettingsMenuClose}
        >
          <Paper className="defaultpadding">
            <List >
              {this.props.pendingTrx && (
                <ListItem key="pending" dense>
                <ListItemAvatar>
                  <Avatar color="primary">
                    <CachedIcon /> 
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Pending Transaction"
                />
                </ListItem>
              )}
            {this.state.notifications.map((item, index) => (
              <ListItem key={item.id} dense>
                <ListItemAvatar>
                  <Avatar color="primary">
                    <CachedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                />
              </ListItem>
              ))}  
            </List>
            <Button color="primary" onClick={this.handlesettingsMenuClose}>
              {t("menu.top.close")}
            </Button>            
          </Paper>
        </Popover>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pendingTrx: state.model.pendingTrx
  };
};

export default drizzleConnect(withTranslation()(SettingsNotification),mapStateToProps);