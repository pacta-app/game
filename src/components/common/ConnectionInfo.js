import React, { Component } from "react";
import { connect } from 'react-redux'
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import CloudOffIcon from "@material-ui/icons/CloudOff";
import LaunchIcon from '@material-ui/icons/Launch';
import Popover from '@material-ui/core/Popover';
import Blockies from "react-blockies";
import { withTranslation } from "react-i18next";
import model from "../../model";
import ThreeBox from '3box';


class ConnectionInfo extends Component {
  state = {
    connectionMenu: null
  };

  async componentDidUpdate() {
    // load user profile from 3box
    if (!this.props.profile && this.props.address) { 
      const profile = await ThreeBox.getProfile(this.props.address);
      this.props.setProfile(profile);
    }
/*
    if (!this.props.box && this.props.address && window.ethereum) { 
      const box = await ThreeBox.openBox(this.props.address, window.ethereum, {})
      box.onSyncDone(() => this.props.set3Box(box));
    }
*/
  }

  setConnectionIcon(network) {
    if (this.props.address) {
      if (network) {
        if(this.props.profile) {
          if(this.props.profile.image) {
            return(
              <Avatar 
                className="avatarSmall"
                src={"https://ipfs.infura.io/ipfs/" + this.props.profile.image[0].contentUrl["/"]}
                alt={this.props.address}
              />
            );
          } else {
            return (
              <Blockies 
                seed={this.props.address.toLowerCase()} 
                size={10} 
                scale={3}
                className="blockies"
              />
            );
          }
        } else {
          return (
            <Blockies 
              seed={this.props.address.toLowerCase()} 
              size={10} 
              scale={3}
              className="blockies"
            />
          );
        }
      }
      else {
        return <CloudOffIcon color="error" />;
      }
    }
    else {
      return <CloudOffIcon color="error" />;
    }
  }

  getNetworkInfo(network) {
    switch (network) {
      case 1:
        return "Mainnet";
      case 2:
        return "Testnet";
      case 3:
        return "Ropsten Testnet";
      case 4:
        return "Rinkeby Testnet";    
      case 42:
        return "Kovan Testnet";    
      case undefined:
        return "";    
      default:
        return "Local Testnet";
    }
  }

  handleConnectionIconClick = event => {
    this.setState({ connectionMenu: event.currentTarget });
  };
  handleConnectionMenuClose = () => {
    this.setState({ connectionMenu: null });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  
  render() {
    const { t, network, address, bncOnboard } = this.props;

    return (
      <>
      {network &&
        <Hidden xsDown>
          <Chip label={this.getNetworkInfo(network)} size="small" />
        </Hidden>
      }
      <Tooltip disableFocusListener
        title={t("menu.top.connection.info")}
        aria-label={t("menu.top.connection.info")}
      >
      <IconButton 
        color="inherit" 
        onClick={this.handleConnectionIconClick}
      >
        {this.setConnectionIcon(network)}
      </IconButton>
      </Tooltip>
      <Popover 
        id="settings-menu" 
        open={Boolean(this.state.connectionMenu)} 
        anchorEl={this.state.connectionMenu} 
        onClose={this.handleConnectionMenuClose}
      >
        <Paper className="defaultpadding">
          {network ? (
            <List dense>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={network ? "green" : "red"}>
                    {network ? <CheckIcon /> : <ErrorIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={t("menu.top.connection.youareon") + this.getNetworkInfo(network)}
                  secondary={t("menu.top.connection.networkOk")}
                />
              </ListItem>
              <ListItem>
              {address ? (
                <ListItemAvatar>
                  {this.setConnectionIcon(network)}
                </ListItemAvatar>
              ) : "" }
                <ListItemText
                  primary={this.props.profile ? (this.props.profile.name ? this.props.profile.name : "") : ""}
                  secondary={address}
                />
              </ListItem>
          </List>
          ) : (
            <Typography variant="body2" gutterBottom>
              {t("menu.top.notconnected")}
            </Typography>
          )}
          <Button 
            color="primary" 
            variant="outlined"
            onClick={() => {bncOnboard.walletSelect(); }}
          >
            Wallet
          </Button>
          &nbsp;
          <Button 
            color="primary" 
            variant="outlined"
            component="a"
            target="_blank"
            href={"https://3box.io/" + address}
          >
            <LaunchIcon fontSize="small" color="secondary" />
            &nbsp;
            Profile
          </Button>
          &nbsp;
          <Button 
            color="primary" 
            variant="outlined"
            onClick={this.handleConnectionMenuClose}
          >
            {t("menu.top.close")}
          </Button>            
        </Paper>
      </Popover>
    </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setProfile: profile => {
      dispatch(model.actions.setProfile(profile));
    },
    set3Box: box => {
      dispatch(model.actions.set3Box(box));
    }
  };
};

const mapStateToProps = state => {
  return {
    address: state.model.address,
    network: state.model.network,
    profile: state.model.profile,
    box: state.model.box,
    bncOnboard: state.model.bncOnboard
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ConnectionInfo));
