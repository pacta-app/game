import React, { Component } from "react";
import { drizzleConnect } from "drizzle-react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import Blockies from "react-blockies";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DynamicContract from "../demo/DynamicContract";
import LoadingContainerLight from "../common/LoadingContainerLight";
import { abi as ERC20abi } from "../../contracts/SimpleToken.json";
import { ContractData } from "drizzle-react-components";
import { getProfile } from "3box";

class AccountItem extends Component {
  state = {
    success: false,
    profile: null
  };

  componentDidMount = async () => {
    // load user profile from 3box
    const profile = await getProfile(this.props.address);
    this.setState({ profile });
  };

  handleCopyClick = () => {
    if (!this.state.success) {
      this.setState({ success: true }, () => {
        this.timer = setTimeout(() => {
          this.setState({ success: false });
        }, 800);
      });
    }
  };
  render() {
    return (
      <Fade in style={{ transitionDelay: this.props.index * 100 + "ms" }}>
        <>
          <ListItem
            key={this.props.address}
            button
            component={Link}
            to={"/" + this.props.orgAddress + "/1/" + this.props.address}
          >
            <ListItemIcon>
              {this.state.profile && this.state.profile.image ? (
                <Avatar
                  src={
                    "https://ipfs.infura.io/ipfs/" +
                    this.state.profile.image[0].contentUrl["/"]
                  }
                  alt={this.props.address}
                />
              ) : (
                <Avatar>
                  <Blockies
                    seed={this.props.address.toLowerCase()}
                    size={10}
                    scale={4}
                    className="blockies"
                  />
                </Avatar>
              )}
            </ListItemIcon>
            <ListItemText
              primary={
                this.state.profile && this.state.profile.name
                  ? this.state.profile.name
                  : this.props.address
              }
              secondary={
                this.state.profile && this.state.profile.name
                  ? this.props.address
                  : ""
              }
            />
            <ListItemSecondaryAction>
              {!this.props.token ||
              this.props.token ===
                "0x0000000000000000000000000000000000000000" ? (
                "(no token)" /// @todo remove
              ) : (
                <LoadingContainerLight>
                  <DynamicContract address={this.props.token} abi={ERC20abi}>
                    <ContractData
                      method="balanceOf"
                      methodArgs={[this.props.address]}
                      render={data => {
                        return data ? (
                          <Chip
                            avatar={
                              <Avatar className="empty">
                                <CheckIcon />
                              </Avatar>
                            }
                            label={data + " tokens"}
                            color="primary"
                            variant="outlined"
                          />
                        ) : (
                          ""
                        );
                      }}
                    />
                  </DynamicContract>
                </LoadingContainerLight>
              )}
              <Tooltip title="Copy to clipboard" aria-label="Copy to clipboard">
                <CopyToClipboard
                  text={this.props.address}
                  onCopy={this.handleCopyClick}
                >
                  <IconButton aria-label="Copy">
                    {this.state.success ? (
                      <CheckIcon fontSize="small" />
                    ) : (
                      <FileCopyIcon fontSize="small" />
                    )}
                  </IconButton>
                </CopyToClipboard>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        </>
      </Fade>
    );
  }
}

export default drizzleConnect(AccountItem);
