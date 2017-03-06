import React, { Component } from 'react'

import PriceSelector from '../PriceSelector'
import PriceDisplay from '../PriceDisplay'

export default class PriceForm extends Component {
  state = {
    amount: 0,
    baseCurrency: this.props.prices.base,
    convertedAmount: 0,
    targetCurrency: this.props.prices.base,
  }

  setAmount = (ev) => {
    this.setState({ amount: ev.target.value })
  }

  setBaseCurrency = (ev) => {
    const { getPrices } = this.props

    getPrices(ev.target.value)
    this.setState({ baseCurrency: ev.target.value })
  }

  setCurrency = (num, currency) =>
    parseInt(num, 10).toLocaleString(navigator.language, {
      currency,
      style: 'currency',
    })

  setPrices = (ev) => {
    ev.preventDefault()

    const { prices: { rates } } = this.props
    const {
      amount,
      targetCurrency
    } = this.state
    const inPriceList = Object.keys(rates).find(
      currency => currency === targetCurrency
    )
    const rate = inPriceList ? rates[targetCurrency] : 1

    this.setState({
      convertedAmount: amount * rate,
      displayAmount: amount,
    })
  }

  setTargetCurrency = (ev) => {
    this.setState({ targetCurrency: ev.target.value })
  }

  render() {
    const { selection } = this.props
    const {
      baseCurrency,
      targetCurrency,
    } = this.state

    return (
      <div className="price-conversion">
        <form onSubmit={this.setPrices}>

          <div>
            <label>Base Currency:</label>
            <div>
              <PriceSelector
                className="base-currency"
                prices={selection}
                setCurrency={this.setBaseCurrency}
                value={baseCurrency}
              />
            </div>
          </div>

          <div>
            <label>Target Currency:</label>
            <div>
              <PriceSelector
                className="target-currency"
                prices={selection}
                setCurrency={this.setTargetCurrency}
                value={targetCurrency}
              />
            </div>
          </div>

          <div>
            <label>Amount</label>
            <div>
              <input
                onChange={this.setAmount}
                type="text"
                value={this.state.amount}
              />
            </div>
          </div>

          <button type="submit">Convert Amount</button>
        </form>
        <PriceDisplay
          amount={this.setCurrency(this.state.amount, baseCurrency)}
          convertedAmount={this.setCurrency(this.state.convertedAmount, targetCurrency)}
        />
      </div>
    )
  }
}
