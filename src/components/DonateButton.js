import React from 'react'

const DonateButton = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2rem 0',
    }}
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.charidy.com/vempraguerra"
    >
      <button
        className="donate-button"
        type="button"
      >
        Doar Agora
      </button>
    </a>
  </div>
)

export default DonateButton
