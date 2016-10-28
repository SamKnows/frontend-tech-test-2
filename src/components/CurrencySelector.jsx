import React, {Component, PropTypes} from 'react';
import Choices from 'choices.js';
import 'choice_css';

const styles = {
  div: {
    marginBottom: '10px',
  },
}
class CurrencySelector extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { classSelector, listChoices } = this.props;
    const baseChoice = new Choices(`.${this.props.classSelector}`, {
      choices: listChoices,
      callbackOnChange: this._onSelectCurrency,
    });
  }

  /**
   * Save currency selected in store.
   * @param {String} currency name
   */
  _onSelectCurrency = (value) => {
    this.props.actions.setFilterCurrency(value, this.props.idSelector);
  }

  render() {
    const { actions, classSelector, idSelector, label } = this.props;
    return (
      <div style={styles.div}>
        <label htmlFor={idSelector}>{label}</label>
        <select id={idSelector} className={classSelector}></select>
      </div>
    );
  }
}

CurrencySelector.PropTypes = {
  actions: PropTypes.object.isRequired,
  idSelector: PropTypes.string.isRequired,
  classSelector: PropTypes.string.isRequired,
  listChoices: PropTypes.object.isRequired,
}

export default CurrencySelector;
