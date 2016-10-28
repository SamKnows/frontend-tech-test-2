import React, {PropTypes} from 'react';

const styles = {
  margin: {
    marginLeft: '30px',
  }
}
const CurrenciesRates = ({currenciesRates, style}) => {
  return (
    <div id='currencies-rates' style={style}>
      <h2>Current Prices</h2>
      {
        currenciesRates.toKeyedSeq().map((k, v) => {
          return (
            <p key={k}>
              <span>{v}</span>
              <span style={styles.margin}>{k}</span>
            </p>
          );
        })
      }
    </div>
  );
};

CurrenciesRates.propTypes = {
  //Some props
};

export default CurrenciesRates;
