import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { withTranslation } from "react-i18next";
import { ContractData } from "drizzle-react-components";
import LoadingContainerLight from "./LoadingContainerLight";
import DynamicContract from "../demo/DynamicContract";
import { abi } from "../../contracts/AssociationImpl.json";

class OrgName extends Component {
  render() {
    return (
      <Hidden xsDown>
        <Grid item>
          <LoadingContainerLight>
            <Typography variant="body1" color="inherit">
              {this.props.location.pathname.split("/")[1].length > 40 && (
                <DynamicContract
                  address={this.props.location.pathname.split("/")[1]}
                  abi={abi}
                >
                  <ContractData method="name" hideIndicator />
                </DynamicContract>
              )}
            </Typography>
          </LoadingContainerLight>
        </Grid>
      </Hidden>
    );
  }
}

export default withTranslation()(withRouter(OrgName));
