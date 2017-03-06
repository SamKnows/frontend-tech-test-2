import React from 'react'
import Rate from '../Rate'

export default function PriceTable({ rates }) {
  return (
    <div className="price-table">
      <ul>
        {Object.entries(rates).map(
          rate => <Rate key={rate} data={rate} />
        )}
      </ul>
    </div>
  )
}
