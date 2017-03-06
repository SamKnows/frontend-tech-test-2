import React, { Component } from 'react'

import PriceForm from './components/PriceForm'
import PriceTable from './components/PriceTable'

import './App.css'

class App extends Component {
  state = {
    initialPrices: {},
    prices: {},
  }

  componentDidMount() {
    this.fetchPrices()
      .then((resp) => this.setState({
        initialPrices: resp,
        prices: resp,
      }))
  }

  fetchPrices = (base = 'GBP') =>
    fetch(`http://api.fixer.io/latest?base=${base}`)
      .then((resp) => resp.json())

  setTablePrices = (base = 'GBP') => {
    this.fetchPrices(base)
      .then(resp => this.setState({
        prices: resp
      }))
  }

  render() {
    const { initialPrices, prices } = this.state

    return (
      <div className="App">
        <h1>Currency Converter</h1>
        {!!Object.entries(initialPrices).length &&
          <PriceForm
            getPrices={this.setTablePrices}
            prices={prices}
            selection={initialPrices}
          />}
        {!!Object.entries(prices).length &&
          <PriceTable rates={prices.rates} />}
      </div>
    )
  }
}

export default App
