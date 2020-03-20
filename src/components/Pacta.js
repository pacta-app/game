import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { drizzleConnect } from "drizzle-react";
import model from "../model";
import { ContractData, LoadingContainer } from "drizzle-react-components";

import PropTypes from "prop-types";

class Pacta extends Component {
  state = {};
  constructor(props, context) {
    super(props, context);
  }
  static contextTypes = {
    drizzle: PropTypes.object
  };
  render() {
    const { t } = this.props;
    const currency = new model.Currency(this.props);
    return (
      <LoadingContainer>
        <>
          <ContractData
            contract="Pacta"
            method="manager"
            render={isManager => {
              if (isManager) {
                return (
                  <div>
                    <h1>{t("internal.admin.title")}</h1>
                    <p>
                      Version:{" "}
                      <ContractData contract="Pacta" method="version" />
                    </p>
                    <p>
                      Creation Date:{" "}
                      <ContractData
                        contract="Pacta"
                        method="creationDate"
                        render={v => {
                          var d = new Date(0);
                          d.setUTCSeconds(v);
                          return d.toLocaleString();
                        }}
                      />
                    </p>
                    <p>
                      Balance:{" "}
                      {currency.formatWei(this.props.pactaBalance) +
                        " (" +
                        currency.formatFiat(
                          currency.toFiat(this.props.pactaBalance)
                        ) +
                        ")"}
                    </p>
                    <p>
                      address:{" "}
                      {model.optional(
                        this.context.drizzle.contracts.Pacta,
                        "address"
                      )}
                    </p>
                    <p>
                      owner: <ContractData contract="Pacta" method="getOwner" />
                    </p>
                    <p>beneficiaries:</p>
                    <ContractData
                      contract="Pacta"
                      method="getBeneficiaries"
                      render={beneficiaries => {
                        console.log("BENEFICIARIES", beneficiaries);
                        return (
                          <ul>
                            {beneficiaries.map(address => (
                              <li key={address}>{address}</li>
                            ))}
                          </ul>
                        );
                      }}
                    />
                  </div>
                );
              } else {
                return <div>{t("Access Denied")}</div>;
              }
            }}
          />
        </>
      </LoadingContainer>
    );
  }
}

const mapDrizzleStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    exchangeRates: state.model.exchangeRates,
    currency: state.model.currency,
    Pacta: state.contracts.Pacta,
    pactaBalance: state.model.pactaBalance
  };
};

export default withTranslation()(drizzleConnect(Pacta, mapDrizzleStateToProps));
