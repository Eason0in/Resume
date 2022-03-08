import React from 'react'

export default function PortfolioItemImg({ src, alt }) {
  return (
    <div className="col-12 mx-auto mb-4">
      <img src={src} alt={alt} />
    </div>
  )
}
