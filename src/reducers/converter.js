import { Map } from 'immutable';
import * as types from 'actions/actionTypes';
import { initialState } from './init';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_CURRENCIES_SUCCESS:
      state = state.set('rates', Map(action.response.rates));
      state = state.set('base', action.response.base);
      return state.set('target', action.response.base);
    case types.GET_CURRENCIES_RATES_SUCCESS:
      state = state.set('rates', Map(action.response.rates));
      return state.set('shouldShowConvertedAmount', true); //TOCHECK: State to manage view rendering should not be a props
    case types.SET_CURRENCY:
      if(action.selectorType === 'base') {
        state = state.set('base', action.currency);
      }else {
        state = state.set('target', action.currency);
      }
      return state.set('shouldShowConvertedAmount', false); //TOCHECK: State to manage view rendering should not be a props
    case types.SET_AMOUNT:
      return state.set('amount', action.amount);
    default:
      return state;
  }
}
