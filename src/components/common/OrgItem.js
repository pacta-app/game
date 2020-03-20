import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Blockies from "react-blockies";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { drizzleConnect } from "drizzle-react";

class OrgItem extends Component {
  state = {
    success: false,
    modalOpen: false
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
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };
  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { address } = this.props;
    const get = (p, d, o) =>
      p.reduce((xs, x) => (xs != null && xs[x] != null ? xs[x] : d), o);
    const openvotes = type =>
      get(["contracts", address, type, "0x0", "value"], [], this.props).reduce(
        (total, x) =>
          get(["contracts", x, "closed", "0x0", "value"], true, this.props) ===
            false &&
          Object.values(get(["contracts", x, "voters"], [], this.props)).reduce(
            (prev, curr) =>
              curr.args[0] === this.props.accounts[0] && curr.value === false
                ? true
                : false,
            false
          )
            ? total + 1
            : total,
        0
      );
    const notifications = !this.props.hideBadge && get(
      ["contracts", address, "getMemberIndex", "0x0", "value"],
      [],
      this.props
    ).includes(this.props.accounts[0])
      ? // is a member, so
        openvotes("getVotings") +
        openvotes("getPaymentVotings") +
        openvotes("getElections")
      : null;

    return (
      <Fade in style={{ transitionDelay: this.props.index * 100 + "ms" }}>
        <div>
          <ListItem
            key={this.props.address}
            button
            component={Link}
            to={"/" + this.props.address}
          >
            <ListItemAvatar>
              {notifications ? (
                <Badge badgeContent={notifications} color="primary">
                  <Blockies
                    seed={this.props.address.toLowerCase()}
                    size={10}
                    scale={4}
                    className="blockies"
                  />
                </Badge>
              ) : (
                <Blockies
                  seed={this.props.address.toLowerCase()}
                  size={10}
                  scale={4}
                  className="blockies"
                />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body1" noWrap>
                  {" "}
                  {this.props.name}{" "}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="secondary" noWrap>
                  {" "}
                  {this.props.purpose}{" "}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
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
        </div>
      </Fade>
    );
  }
}

const mapDrizzleStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    contracts: state.contracts,
    accounts: state.accounts
  };
};

export default drizzleConnect(OrgItem, mapDrizzleStateToProps);
