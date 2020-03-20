import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { Offline } from "react-detect-offline";
import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";
import { withTranslation } from "react-i18next";

class OfflineInfo extends Component {
  render() {
    const { t } = this.props;
    return (
      <Offline polling={{ url: window.location.origin }}>
        <Tooltip
          title={t("menu.top.offline")}
          aria-label={t("menu.top.offline")}
        >
          <IconButton size="small" color="default">
            <WarningIcon color="error" />
          </IconButton>
        </Tooltip>
      </Offline>
    );
  }
}

export default withTranslation()(OfflineInfo);
