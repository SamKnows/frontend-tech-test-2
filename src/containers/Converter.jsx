import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'actions'
import ConverterComp from 'components/Converter'

const mapStateToProps = (state) => {
  return {
    currencies: state.converter.get('currencies'),
    base: state.converter.get('base'),
    target: state.converter.get('target'),
    rates: state.converter.get('rates'),
    amount: state.converter.get('amount'),
    shouldShowConvertedAmount: state.converter.get('shouldShowConvertedAmount'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

const Converter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConverterComp);

export default Converter;
