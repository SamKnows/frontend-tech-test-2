import React, {Component, PropTypes} from 'react';
import StubNavBar from './StubNavBar';
import StubFooter from './StubFooter';
import Converter from 'containers/Converter';

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
    return rates ? <Converter/> : <span></span>
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
