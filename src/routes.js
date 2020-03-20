import React, { Component } from "react";
import classNames from "classnames";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { withTranslation } from "react-i18next";
import withStyles from "@material-ui/core/styles/withStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "typeface-roboto-slab";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Topbar from "./components/Topbar";
import DefaultDrawer from "./components/DefaultDrawer";
import Main from "./components/Main";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import Storage from "./components/Storage";
import model from "./model";
import { theme, styles } from "./utils/theme";
import { connect } from 'react-redux'
import Onboard from "bnc-onboard";
import Web3 from "web3";

class App extends Component {
  state = {
    menutoggle: true,
    isAppInstallable: false,
    isAppInstalled: false,
    randomMessage: "",
    deferredPrompt: () => {}
  };

  handleDrawerToggle = () => {
    this.setState({ menutoggle: !this.state.menutoggle });
  };

  componentDidMount() {

    let web3;
    
    const onboard = Onboard({
      dappId: "e55e47e7-a04a-4fca-b25f-785e46f111bb",       // [String] The API key created by step one above
      networkId: 1,  // [Integer] The Ethereum network ID your Dapp uses.
      darkMode: false,
      subscriptions: {
        address: address => {
          this.props.setAddress(address);
        },
        network: network => {
          this.props.setNetwork(network);
        },
        wallet: wallet => {
          if (wallet.provider) {
            web3 = new Web3(wallet.provider);
            this.props.setWallet(wallet);
            window.localStorage.setItem("selectedWallet", wallet.name);
            console.log(`connected to ${wallet.name}`);
          }
        }
      }
    });

    const previouslySelectedWallet = window.localStorage.getItem("selectedWallet");

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet);
    };

    this.props.setBncOnboard(onboard);
    
    
    
    window.addEventListener("beforeinstallprompt", e => {
      // Stash the event so it can be triggered later.
      this.setState({ deferredPrompt: e, isAppInstallable: true });
      console.log("deffered prompt saved");
    });

    window.addEventListener("appinstalled", evt => {
      this.setState({ isAppInstalled: true });
    });
  }

  render() {

    return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <>
              <Topbar
                onToggle={this.handleDrawerToggle}
                menutoggle={this.state.menutoggle}
              />
              <DefaultDrawer
                onToggle={this.handleDrawerToggle}
                menutoggle={this.state.menutoggle}
                isAppInstallable={this.state.isAppInstallable}
                isAppInstalled={this.state.isAppInstalled}
                deferredPrompt={this.state.deferredPrompt}
              />
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="flex-start"
                className={classNames(this.props.classes.content, {
                  [this.props.classes.contentShift]: this.state.menutoggle
                })}
              >
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/chat" component={Chat} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/storage" component={Storage} />
                </Switch>
              </Grid>
            </>
          </Router>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBncOnboard: bncOnbard => {
      dispatch(model.actions.setBncOnboard(bncOnbard));
    },
    setAddress: address => {
      dispatch(model.actions.setAddress(address));
    },
    setNetwork: network => {
      dispatch(model.actions.setNetwork(network));
    },
    setWallet: wallet => {
      dispatch(model.actions.setWallet(wallet));
    }
  };
};
const mapStateToProps = state => {
  return {
    bncOnboard: state.model.bncOnboard
  };
};

export default withTranslation()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App)));
