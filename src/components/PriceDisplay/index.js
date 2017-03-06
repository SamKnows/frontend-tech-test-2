import React from 'react'

export default function PriceDisplay({ amount, convertedAmount }) {
  return (
    <div className="price-display">
      <div className="base-price">
        {amount} =
      </div>
      <div className="converted-price">
        {convertedAmount}
      </div>
    </div>
  )
}
