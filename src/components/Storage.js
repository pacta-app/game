import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { connect } from 'react-redux';
import model from "../model/";
import ThreeBox from '3box'; 
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Storage extends Component {
    state = {
        space: null
      };

    async componentDidUpdate() {
        if(this.props.box && !this.state.space) {
            const space = await this.props.box.openSpace("Pacta");
            this.setState({ space: space });
        }
    }

    setData(key, value) {
        if(this.state.space) {
            this.state.space.public.set(key, value);
            console.log("done")
        } else {
            console.log("error. space not set.")
        }
    }

    async listSpaces(address) {
        const spaces = await ThreeBox.listSpaces(address);
        return (
            spaces && (
                <List>
                    {spaces.map(item => (
                        <ListItem key={item}>
                        <ListItemText primary={item} />
                    </ListItem>
                    ))}
                </List>
            )
        )
    }

  render() {
    const { t, address, network  } = this.props;

    return (
      <>
        <Grid item xs={12} lg={9} className="defaultpadding">
          <Typography variant="h4" gutterBottom>
            Storage
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6} className="defaultpadding">
          <Typography variant="h6" gutterBottom>Get data</Typography>
          <Typography variant="h6" gutterBottom>Set data</Typography>
           
          <form noValidate autoComplete="off">
            <TextField 
                id="key" 
                label="Key" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField
                id="value"
                label="Value"
                multiline
                rows="4"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => this.setData("key123","Sample Value")}
            >
            Set data
            </Button>
            </form>


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
          <Paper className="defaultpadding">
            <Typography variant="h6" gutterBottom>
              Your account
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address: 
            </Typography>
                {this.listSpaces(address)}
            <Button color="primary" variant="outlined" onClick={() => this.listSpaces(address)}>
              Click
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Storage));
