import React from 'react'

export default function BlockTitle({ title }) {
  return (
    <h3 className="block-title">
      {title}
      <span>
        <hr />
      </span>
    </h3>
  )
}
