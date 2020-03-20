import React, { Component } from "react";
import { connect } from 'react-redux'; 
import { withTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LogoSpin from "./common/LogoSpin";
import ThreeBoxComments from '../3boxComments';
import ThreeBox from '3box';

class AssociationChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: {},
      myProfile: {},
      myAddress: '',
      isReady: false,
    }
  }

  componentDidMount() {
    this.handleLogin();
  }

  handleLogin = async () => {
   // const addresses = await window.ethereum.enable();
  //  const myAddress = addresses[0];
    const myAddress = this.props.address;

    const box = await ThreeBox.openBox(myAddress, window.ethereum, {});
    const myProfile = await ThreeBox.getProfile(myAddress);

    box.onSyncDone(() => this.setState({ box }));
    this.setState({ box, myProfile, myAddress, isReady: true });
  }


  render() {
    const {
      box,
      myAddress,
      isReady
    } = this.state;

    return (
      <>
      <Grid item xs={12} lg={9} className="defaultpadding">
        <Typography variant="h4" gutterBottom>
          Chat 
        </Typography>
      </Grid>
      <Grid item xs={12} lg={9} className="defaultpadding">
      {!isReady && (
          <Typography 
            variant="body2" 
            align="center"
            gutterBottom
          >
            <LogoSpin />
          </Typography>
        )}
      {isReady && (
          <ThreeBoxComments 
            spaceName="Pacta"
            threadName="Startpage"
            adminEthAddr="0x3824D6d729493BAEeC8d5dA7d1cB7926E895B24d"
            box={box}
            currentUserAddr={myAddress}
            // optional
            members={false}
            showCommentCount={50}
            threadOpts={{
              firstModerator: "0x3824D6d729493BAEeC8d5dA7d1cB7926E895B24d",
            }}
            useHovers={false}
          />
        )}
      </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    address: state.model.address,
    profile: state.model.profile,
    box: state.model.box
  };
};

export default withTranslation()(connect(mapStateToProps)(AssociationChat));