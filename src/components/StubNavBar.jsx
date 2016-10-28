import React, {PropTypes} from 'react';

const styles = {
  mainDiv : {
    paddingBottom: '2%',
    border: '1px solid #d9d9d9',
    textAlign: 'center',
    marginBottom: '10px',
  },
}

const StubNavBar = () => {
  return (
    <div style={styles.mainDiv}>
      Currency Concerter
    </div>
  );
};

StubNavBar.propTypes = {
  //Some props
};

export default StubNavBar;
