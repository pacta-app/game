import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { connect } from 'react-redux';
import model from "../model/";
import EditProfile from '3box-profile-edit-react';

class Main extends Component {
    state = {
        space: null
      };

    async componentDidUpdate() {
        if(this.props.box && !this.state.space) {
            const space = await this.props.box.openSpace("Pacta");
            this.setState({ space: space });
        }
    }

  render() {
    const { t, address, network, box } = this.props;

    return (
      <>
        <Grid item xs={12} lg={9} className="defaultpadding">
          <Typography variant="h4" gutterBottom>
            {t("main.welcome.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6} className="defaultpadding">
          <Typography variant="h6" gutterBottom>Test</Typography>
           
        {box && (
            <EditProfile
                box={box}
                space={this.state.space}
                currentUserAddr={address}
            />
        )}

        </Grid>
        <Grid item xs={12} md={4} lg={3} className="defaultpadding">
          <Paper className="defaultpadding">
            <Typography variant="h6" gutterBottom>
              Your account
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address: { address}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Network: { network}
            </Typography>
            <Button color="primary" variant="outlined" component={Link} to="/support">
              {t("main.info.button.support")}
            </Button> 
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
    profile: state.model.profile,
    box: state.model.box
  };
};

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Main));
