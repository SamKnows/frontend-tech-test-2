import * as actionTypes from './actionTypes';
import {CALL_API} from '../middleware/api';

/**
 * Fetch currencies rates
 * @param {String} base currency
 */
 export function fetchCurrenciesRates(baseCurrency) {
   return {
     [CALL_API]: {
       types: [ actionTypes.GET_CURRENCIES_RATES_REQUEST, actionTypes.GET_CURRENCIES_RATES_SUCCESS, actionTypes.GET_CURRENCIES_RATES_FAILURE ],
       endpoint: `latest?base=${baseCurrency}`,
       options: {
         method: 'GET',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         },
       },
     }
   };
 }

 /**
  * Fetch currencies rates
  */
  export function fetchInitCurrencies() {
    return {
      [CALL_API]: {
        types: [ actionTypes.INIT_CURRENCIES_REQUEST, actionTypes.INIT_CURRENCIES_SUCCESS, actionTypes.INIT_CURRENCIES_FAILURE ],
        endpoint: 'latest',
        options: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        },
      }
    };
  }

 /**
  * Set filters currencies
  * @param {String} currency
  * @param {String} type of currency (base or target)
  */
 export function setFilterCurrency(currency, selectorType) {
   return {
       type: actionTypes.SET_CURRENCY,
       currency: currency,
       selectorType: selectorType,
   };
 }

 /**
  * Set Amount
  * @param {String} amount
  */
 export function setAmount(amount) {
   return {
       type: actionTypes.SET_AMOUNT,
       amount: amount,
   };
 }
