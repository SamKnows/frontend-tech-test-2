import React from 'react'

export default function Rate({ data }) {
  const code = data[0]
  const value = data[1]

  return (
    <li>
      <span className="code">{code}</span>
      <span className="value">{value}</span>
    </li>
  )
}
