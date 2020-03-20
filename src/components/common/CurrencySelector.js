import React, { Component } from "react";
import { drizzleConnect } from "drizzle-react";

import model from "../../model";

import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from "@material-ui/core/IconButton";
import { withTranslation } from "react-i18next";

class CurrencySelectorImpl extends Component {
  state = { currencyMenu: null };
  handleCurrencyIconClick = event => {
    this.setState({ currencyMenu: event.currentTarget });
  };
  handleCurrencyMenuClose = () => {
    this.setState({ currencyMenu: null });
  };
  render() {
    const { t, currency, handleCurrencyChange } = this.props;
    const { currencyMenu } = this.state;
    return (
      <>
        <Tooltip
          title={t("menu.top.currency")}
          aria-label={t("menu.top.currency")}
          disableFocusListener
        >
          <IconButton
            aria-owns={currencyMenu ? "currency-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleCurrencyIconClick}
            color="inherit"
          >
            <Badge badgeContent={t(currency)} color="default">
              <SvgIcon> 
                <svg viewBox="0 0 22 22">
                  <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z"/>
                </svg>
              </SvgIcon> 
            </Badge>
          </IconButton>
        </Tooltip>
        <Menu
          id="currency-menu"
          anchorEl={currencyMenu}
          open={Boolean(currencyMenu)}
          onClose={this.handleCurrencyMenuClose}
        >
          {Object.keys({USD: true, EUR: true, CHF: true, GBP: true,CNY: true,JPY: true}).map((v, i) => {
            return (
              <MenuItem
                key={v}
                onClick={() => {
                  this.setState({ currencyMenu: null });
                  handleCurrencyChange(v);
                }}
              >
                {t(v)}
              </MenuItem>
            );
          })}
        </Menu>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.model.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCurrencyChange: currency => {
      dispatch(model.actions.selectCurrency(currency));
    }
  };
};

const CurrencySelector = drizzleConnect(
  CurrencySelectorImpl,
  mapStateToProps,
  mapDispatchToProps
);

export default withTranslation()(CurrencySelector);
