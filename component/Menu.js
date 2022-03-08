import React from 'react'

export default function Menu({ active, handleMenuClose, handleMenuClick, arr }) {
  return (
    <div className={['menu-container', active ? 'showx' : ''].join(' ')} data-testid="menu-container">
      <ul className="menu">
        {arr.map((item) => (
          <li
            onClick={() => handleMenuClick(item)}
            className={[`${item}`, 'text-capitalize', active === `${item}` ? 'active' : ''].join(' ')}
            data-testid={`menu-container-${item}`}
            key={`menu-${item}`}
          >
            {item}
          </li>
        ))}

        <li onClick={handleMenuClose} id="close" data-testid="close">
          <i className="ion-ios-close-empty"></i>
        </li>
      </ul>
    </div>
  )
}
