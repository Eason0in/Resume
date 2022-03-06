import React from 'react'

export default function PreLoaderRight({ isLoading }) {
  return (
    <div
      data-testid="preloader-right"
      className={['preloader-right', `${!isLoading ? 'slide-right' : ''}`].join(' ')}
    ></div>
  )
}
