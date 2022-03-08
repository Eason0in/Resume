import React from 'react'
export default function NameBlock({ handleNameBlockClick, active }) {
  return (
    <div
      onClick={handleNameBlockClick}
      className={['name-block', active ? 'reverse' : ''].join(' ')}
      data-testid="name-block"
    >
      <div className="name-content">
        <h1>Eason Lin</h1>
        <h2>Front-End Developer</h2>
        <div className="intro">
          擁有 3+ 年網頁開發經驗，1.5 年全端工程師, 2 年前端工程師, 追求簡潔且擴充性高的程式碼。
        </div>
        <a
          target="_blank"
          href="https://www.cakeresume.com/pdf/s--F3t6ejx2d_qimO1Zc0yp0Q--/r8jwN.pdf"
          className="btn btn-download"
        >
          <span>
            <small data-hover="Download Resume">Download Resume</small>
          </span>
        </a>
      </div>
    </div>
  )
}
