import React, {Component, PropTypes} from 'react';
import Choices from 'choices.js';
import 'choice_css';
import CurrencySelector from './CurrencySelector';

const styles = {
  amount: {
    marginBottom: '10px',
  },
  divBtn: {
    textAlign: 'center',
    marginTop: '20px',

  },
  btn: {
    fontSize: '20px',
  }
}

let listObjectCurrency = [];

class Converter extends Component {
  constructor(props) {
    super(props);
  }

  //TODO: Block the possibility for user to select the same currency in base and target
  /**
   * Called only once.
   * Initialize list of currencies for selectors.
   */
  componentWillMount() {
    const {base, rates} = this.props;
    const listCurrencies = rates.keySeq().toArray();
    listCurrencies.map(currency => {
        listObjectCurrency.push({value: currency, label: currency, selected: false});
    })
    listObjectCurrency.push({value: base, label: base, selected: true});
  }

  /**
   * Fetch currencies rates according to base currency.
   * @param {Event} submit event
   */
  _handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.fetchCurrenciesRates(this.props.base);
  }

  /**
   * Save amount in store.
   * @param {Number} amount to convert
   */
  _onChangeAmount = (e) => {
    this.props.actions.setAmount(e.target.value);
  }

  /**
   * Show/Hide converted currency.
   */
  _showConverted = () => {
    const { amount, base, target, rates, shouldShowConvertedAmount} = this.props;
    if(shouldShowConvertedAmount){
      const rate = rates.get(target) ? rates.get(target) : 1;
      const amountConverted =  rate * amount;
      return (
        <span style={styles.converted}>{`${base} ${amount} = ${target} ${amountConverted}`}</span>
      );
    }else {
      return (<span></span>);
    }
  }

  render() {
    const { actions, style } = this.props;
    return (
      <div id='converter' style={style}>
        <form onSubmit={this._handleSubmit}>
          <CurrencySelector
            classSelector={'base-currency'}
            idSelector={'base'}
            listChoices={listObjectCurrency}
            actions={actions}
            label={'Base Currency'}
          />
          <CurrencySelector
            classSelector={'target-currency'}
            idSelector={'target'}
            listChoices={listObjectCurrency}
            actions={actions}
            label={'Target Currency'}
          />
          <div>
            <label>Amount<input type="number" onChange={this._onChangeAmount}></input></label>
          </div>
          <div style={styles.divBtn}>
            <button type="submit" style={styles.amount}>Convert Amount</button>
          </div>
        </form>
        {this._showConverted()}
      </div>
    );
  }
}

Converter.PropTypes = {
  actions: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired,
  base: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rates: PropTypes.object.isRequired,
  shouldShowConvertedAmount: PropTypes.bool.isRequired,
}

export default Converter;
