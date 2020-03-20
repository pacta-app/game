export default class Currency {

  ETHER_IN_WEI = 1000000000000000000;

  constructor(props) {
    this.props = props;
  }

  weiFromEther(amount) {
    if (amount === null) return null;
    return amount * this.ETHER_IN_WEI;
  }

  etherFromWei(amount) {
    if (amount === null) return null;
    return amount / this.ETHER_IN_WEI;
  }

  toFiat(amountWei) {
    if (amountWei === null) return null;
    if (!this.props.currency || !this.props.exchangeRates[this.props.currency])
      return null;
    return (
      (amountWei * Number(this.props.exchangeRates[this.props.currency])) /
      this.ETHER_IN_WEI
    );
  }

  fromFiat(amount) {
    if (amount === null) return null;
    return (
      (amount * this.ETHER_IN_WEI) /
      this.props.exchangeRates[this.props.currency]
    );
  }

  formatCurrency(amount, langCode = 'en-US', display = 'code') {
    if (amount === null) return null;
    return new Intl.NumberFormat(
      langCode, { 
        style: 'currency', 
        currency: this.props.currency, 
        currencyDisplay: display
      }
    ).format(amount);
  }

  formatEth(amount, langCode = 'en-US') { 
    return new Intl.NumberFormat(
      langCode, { 
        style: 'currency', 
        currency: 'ETH',
        currencyDisplay: 'code',
        maximumFractionDigits: 7
      }
    ).format(amount / this.ETHER_IN_WEI);
  }

  // LEGACY
  formatFiat(amount, fixed = 2) {
    if (amount === null) return null;
    return this.props.currency + " " + amount.toFixed(fixed);
  }
  formatWei(amount, fixed = 2) {
    if (amount === null) return null;
    var res = amount / this.ETHER_IN_WEI;
    if (res >= 1) return res.toFixed(fixed) + " ether";
    res *= 1000;
    if (res >= 1) return res.toFixed(fixed) + " finney";
    res *= 1000;
    if (res >= 1) return res.toFixed(fixed) + " szabo";
    res *= 1000;
    if (res >= 1) return res.toFixed(fixed) + " shannon";
    res *= 1000;
    if (res >= 1) return res.toFixed(fixed) + " lovelace";
    res *= 1000;
    if (res >= 1) return res.toFixed(fixed) + " babbage";
    res *= 1000;
    return res.toFixed(0) + " wei";
  }

}
