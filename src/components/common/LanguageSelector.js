import React, { Component } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import LanguageIcon from "@material-ui/icons/Language";
import IconButton from "@material-ui/core/IconButton";
import { withTranslation } from "react-i18next";
import i18n from "./../../i18n";

class LanguageSelector extends Component {
  state = {    
    languageMenu: null,
    locale: i18n.language
  };

  handleLanguageIconClick = event => {
    this.setState({ languageMenu: event.currentTarget });
  };
  handleLanguageMenuClose = () => {
    this.setState({ languageMenu: null });
  };
  handleLangChange = name => event => {
    this.setState({ languageMenu: null });
    i18n.changeLanguage(name);
    this.setState({ locale: name });
  };

  render() {
    const { languageMenu } = this.state;
    const { t } = this.props;
    return (
      <>
        <Tooltip
          title={t("menu.top.changelang")}
          aria-label={t("menu.top.changelang")}
          disableFocusListener
        >
          <IconButton
            color="inherit"
            aria-owns={languageMenu ? "language-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleLanguageIconClick}
          >
            <Badge badgeContent={this.state.locale.substring(0,2).toUpperCase()} color="default">
              <LanguageIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Menu
          id="language-menu"
          anchorEl={languageMenu}
          open={Boolean(languageMenu)}
          onClose={this.handleLanguageMenuClose}
        >
          <MenuItem onClick={this.handleLangChange("en")}>
            English
          </MenuItem>
          <MenuItem onClick={this.handleLangChange("de")}>
            Deutsch
          </MenuItem>
        </Menu>

      </>
    );
  }
}

export default withTranslation()(LanguageSelector);
