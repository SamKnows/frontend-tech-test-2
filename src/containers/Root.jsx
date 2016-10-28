import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'actions'
import CurrencyConverter from 'components/CurrencyConverter'

const mapStateToProps = (state) => {
  return {
    rates: state.converter.get('rates'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

const Root = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyConverter);

export default Root;
