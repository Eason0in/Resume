import React from 'react'
export default function MenuBlocks({ handleMenuClick, active, arr }) {
  return (
    <div className={['menu-blocks', active ? 'hidex' : ''].join(' ')}>
      {arr.map((item) => (
        <div
          key={item}
          onClick={() => handleMenuClick(item)}
          className={`${item}-block menu-block`}
          data-testid={`menu-block-${item}`}
        >
          <div className={`${item}-content`}>
            <h2 className={`menu-item text-uppercase ${item}`}>{item}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}
