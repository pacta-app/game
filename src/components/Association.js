import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from "@material-ui/core/Hidden";
import { withTranslation } from "react-i18next";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ChatIcon from "@material-ui/icons/Chat";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AssociationBasics from "./association/AssociationBasics";
import AssociationMembers from "./association/AssociationMembers";
import AssociationVoting from "./association/AssociationVoting";
import AssociationAssets from "./association/AssociationAssets";
import AssociationMandates from "./association/AssociationMandates";
import AssociationChat from "./association/AssociationChat";
import AssociationMemberView from "./association/AssociationMemberView";
import AssociationVotingView from "./association/AssociationVotingView";
import AssociationElectionView from "./association/AssociationElectionView";
import AssociationPaymentView from "./association/AssociationPaymentView";
import Blockies from "react-blockies";
import DynamicContract from "./demo/DynamicContract";
import { drizzleConnect } from "drizzle-react";
import { abi } from "../contracts/AssociationImpl.json";
import PropTypes from "prop-types";

function TabContainer(props) {
  return (
    <Grid item xs={12}>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        {props.children}
      </Grid>
    </Grid>
  );
}

class Association extends Component {
  state = {
    activeTab: this.props.match.params.index
      ? parseInt(this.props.match.params.index)
      : 0,
    value: "start"
  };
  handleChangeBottom = (event, value) => {
    this.setState({ value });
  };
  handleChange = (event, activeTab) => {
    this.setState({ activeTab });
  };
  render() {
    const { activeTab } = this.state;
    const { address, subaddress } = this.props.match.params;
    const { t } = this.props;

    return (
      <DynamicContract address={address} abi={abi}>
        <Hidden xsDown>
          <Grid item xs={12}>
            <AppBar position="static" color="secondary">
              <Tabs
                value={activeTab}
                onChange={this.handleChange}
                textColor="secondary"
                scrollButtons="auto"
                centered
                variant="fullWidth"
              >
                <Tab
                  icon={
                    <Blockies
                      seed={address.toLowerCase()}
                      size={10}
                      scale={3}
                      className="blockies"
                    />
                  }
                  label={t("association.tab.start")}
                  component={Link}
                  to={"/" + address + "/0"}
                />
                <Tab
                  icon={<PeopleIcon />}
                  label="Users"
                  component={Link}
                  to={"/" + address + "/1"}
                />
                <Tab
                  icon={<HowToVoteIcon />}
                  label={t("association.tab.vote")}
                  component={Link}
                  to={"/" + address + "/2"}
                />
                <Tab
                  icon={<AccountBalanceWalletIcon />}
                  label={t("association.tab.assets")}
                  component={Link}
                  to={"/" + address + "/3"}
                />
                <Tab
                  icon={<AssignmentIndIcon />}
                  label="Mandates"
                  component={Link}
                  to={"/" + address + "/4"}
                />
                <Tab
                  icon={<ChatIcon />}
                  label={t("association.tab.chat")}
                  component={Link}
                  to={"/" + address + "/5"}
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <BottomNavigation
            value={activeTab}
            onChange={this.handleChange}
            className="appbarbottom"
          >
            <BottomNavigationAction
              label={t("association.tab.start")}
              value={0}
              icon={
                <Blockies
                  seed={address.toLowerCase()}
                  size={10}
                  scale={2}
                  className="blockies"
                />
              }
              component={Link}
              to={"/" + address + "/0"}
            />
            <BottomNavigationAction
              label={t("association.tab.people")}
              value={1}
              icon={<PeopleIcon />}
              component={Link}
              to={"/" + address + "/1"}
            />
            <BottomNavigationAction
              label={t("association.tab.vote")}
              value={2}
              icon={<HowToVoteIcon />}
              component={Link}
              to={"/" + address + "/2"}
            />
            <BottomNavigationAction
              label={t("association.tab.assets")}
              value={3}
              icon={<AccountBalanceWalletIcon />}
              component={Link}
              to={"/" + address + "/3"}
            />
            <BottomNavigationAction
              label="Mandates"
              value={4}
              icon={<AssignmentIndIcon />}
              component={Link}
              to={"/" + address + "/4"}
            />
          </BottomNavigation>
        </Hidden>
        <Grid item xs={12} lg={9} className="defaultpadding">
          {activeTab === 0 && (
            <TabContainer>
              <AssociationBasics address={address} />
            </TabContainer>
          )}
          {activeTab === 1 && !subaddress && (
            <TabContainer>
              <AssociationMembers address={address} />
            </TabContainer>
          )}
          {activeTab === 1 && subaddress && (
            <TabContainer>
              <AssociationMemberView
                address={address}
                subaddress={subaddress}
              />
            </TabContainer>
          )}
          {activeTab === 2 && !subaddress && (
            <TabContainer>
              <AssociationVoting address={address} />
            </TabContainer>
          )}
          {activeTab === 2 && subaddress && (
            <TabContainer>
              <AssociationVotingView
                address={address}
                subaddress={subaddress}
              />
            </TabContainer>
          )}
          {activeTab === 3 && !subaddress && (
            <TabContainer>
              <AssociationAssets address={address} />
            </TabContainer>
          )}
          {activeTab === 3 && subaddress && (
            <TabContainer>
              <AssociationPaymentView
                address={address}
                subaddress={subaddress}
              />
            </TabContainer>
          )}
          {activeTab === 4 && !subaddress && (
            <TabContainer>
              <AssociationMandates address={address} />
            </TabContainer>
          )}
          {activeTab === 4 && subaddress && (
            <TabContainer>
              <AssociationElectionView
                address={address}
                subaddress={subaddress}
              />
            </TabContainer>
          )}
          {activeTab === 5 && (
            <TabContainer>
              <AssociationChat address={address} />
            </TabContainer>
          )}
        </Grid>
      </DynamicContract>
    );
  }
}

AssociationBasics.contextTypes = {
  drizzle: PropTypes.object
};

AssociationBasics.propTypes = {
  contracts: PropTypes.object.isRequired,
  address: PropTypes.string.isRequired
};

const mapDrizzleStateToProps = state => {
  return {
    contracts: state.contracts,
    accounts: state.accounts
  };
};

export default withTranslation()(
  drizzleConnect(Association, mapDrizzleStateToProps)
);
