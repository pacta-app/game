import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { connect } from 'react-redux';
import model from "../model/";

class Main extends Component {
  
  render() {
    const { wallet, bncOnboard, address, network } = this.props;

    return (
      <>
        <Grid item xs={12} lg={9} className="defaultpadding">
          <Typography variant="h4" gutterBottom>
            Pacta Playground
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6} className="defaultpadding">
          <Typography variant="h6" gutterBottom>
            Info
          </Typography>
          <Typography variant="body2" gutterBottom>
            This is a showcase site, stuff is in development.
          </Typography>
          <Typography variant="body2" gutterBottom>
            For any questions, issues or feedback, please send an email.
          </Typography>
          <Button color="primary" variant="contained" href="mailto:simon.buechi@gmail.com">
            Send email
          </Button> 
          <Box my={3}>          
            <Typography variant="h6" gutterBottom>
              Connect a wallet
            </Typography>

            {bncOnboard && (
              <>
              <Button color="primary" variant="outlined" onClick={() => {bncOnboard.walletSelect(); }} >
                Select a Wallet
              </Button>
              &nbsp;
              <Button color="primary" variant="outlined" onClick={() => {bncOnboard.walletCheck(); }} >
                Check Wallet
              </Button>
            </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3} className="defaultpadding">
          <Paper className="defaultpadding">
            <Typography variant="h6" gutterBottom>
              Your account
            </Typography>
            <Typography variant="body2">
              Address:
            </Typography>
            <Typography variant="body2" gutterBottom noWrap>
              { address }
            </Typography>
            <Typography variant="body2" gutterBottom>
              Network: { network} 
            </Typography>
            <Typography variant="body2" gutterBottom>
              Wallet: { wallet && (wallet.name) }
            </Typography>
          </Paper>
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBncOnboard: bncOnbard => {
      dispatch(model.actions.setBncOnboard(bncOnbard));
    }
  };
};

const mapStateToProps = state => {
  return {
    bncOnboard: state.model.bncOnboard,
    address: state.model.address,
    network: state.model.network,
    wallet: state.model.wallet,
    profile: state.model.profile,
    box: state.model.box
  };
};

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Main));
