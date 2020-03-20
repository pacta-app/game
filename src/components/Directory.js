import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import { withTranslation } from "react-i18next";
import { ContractData } from "drizzle-react-components";
import { drizzleConnect } from "drizzle-react";
import { abi } from "../contracts/AssociationImpl.json";
import DynamicContract from "./demo/DynamicContract.js";
import LoadingContainer from "./common/LoadingContainer";
import OrgItem from "./common/OrgItem";

class Directory extends Component {
  state = {
    search: ""
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { t } = this.props;
    return (
      <LoadingContainer>
        <Grid item xs={12} lg={9} className="defaultpadding">
          <Typography gutterBottom variant="h4">
            {t("directory.title")}
          </Typography>
          <Typography gutterBottom variant="body2">
            {t("directory.description")}
          </Typography>
          <List>
            <ContractData
              contract="Pacta"
              method="getAssociations"
              render={associations =>
                associations
                  .slice(0)
                  .reverse()
                  .map((address, index) => (
                    <Fade
                      in
                      style={{ transitionDelay: index * 100 + "ms" }}
                      key={address}
                    >
                      <DynamicContract address={address} abi={abi}>
                        <Divider />
                        <OrgItem
                          name={
                            <ContractData contract={address} method="name" />
                          }
                          purpose={
                            <ContractData contract={address} method="purpose" />
                          }
                          address={address}
                          index={index}
                          hideBadge={true}
                        />
                      </DynamicContract>
                    </Fade>
                  ))
              }
            />
          </List>
        </Grid>
      </LoadingContainer>
    );
  }
}

const mapDrizzleStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    Pacta: state.contracts.Pacta,
  };
};

export default withTranslation()(
  drizzleConnect(Directory, mapDrizzleStateToProps)
);
