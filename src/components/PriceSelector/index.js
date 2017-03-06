import React from 'react'

export default function PriceSelector({ className, prices, setCurrency, value }) {
  const { rates } = prices
  const allCurrencies = Object.assign(
    {},
    { [prices.base]: prices.base },
    rates,
  )

  return (
    <select
      className={className}
      onChange={setCurrency}
      value={value}
    >
      {Object.entries(allCurrencies).map(
        rate => (
          <option
            key={rate[0]}
            value={rate[0]}
          >
            {rate[0]}
          </option>
      ))}
    </select>
  )
}
