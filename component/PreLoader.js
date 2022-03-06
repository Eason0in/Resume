import React from 'react'

export default function PreLoader({ isLoading }) {
  return (
    <div data-testid="preloader" className={['preloader', `${!isLoading ? 'fade-out' : ''}`].join(' ')}>
      <div className="anim pulse">
        <img src="./images/Eason-01.jpg" alt="" />
      </div>
    </div>
  )
}
