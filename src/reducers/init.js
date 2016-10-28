import {Map} from 'immutable';

export const initialState = Map({
  filters: Map({}),
  amount: 0,
  shouldShowConvertedAmount: false,
});
