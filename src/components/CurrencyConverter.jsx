import React, {Component, PropTypes} from 'react';
import StubNavBar from './StubNavBar';
import StubFooter from './StubFooter';
import Converter from 'containers/Converter';
import CurrenciesRates from './CurrenciesRates';

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    height:'80%',
  },
  converter: {
    width: '40%',
    float: 'left',
  },
  currenciesRates: {
    // borderLeft: '1px solid #d9d9d9',
    width: '50%',
    float: 'left',
    paddingLeft: '70px',
  },
}

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchInitCurrencies();
  }

  /**
   * Show converter component if we have some currencies rates.
   */
  _showConverter = () => {
    const {rates} = this.props;
    if(rates){
      return (
        <div style={styles.container}>
          <Converter style={styles.converter}/>
          <CurrenciesRates style={styles.currenciesRates} currenciesRates={rates}/>
        </div>
      );
    }else {
      return (<span></span>);
    }
  }

  render() {
    const {actions} = this.props;
    return (
      <div>
        <StubNavBar/>
        {this._showConverter()}
        <StubFooter/>
      </div>
    );
  }
}

CurrencyConverter.propTypes = {
  actions: PropTypes.object.isRequired,
  rates: PropTypes.object,
}

export default CurrencyConverter;
