import React from 'react'
import Instagram from './images/Instagram'

const InstagramButton = () => (
  <a
    className="social-media-link"
    target="_blank"
    href="https://www.instagram.com/vem.pra.guerra/"
    rel="noopener noreferrer"
  >
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 4,
      }}
    >
      <div style={{ width: 32, height: 32 }}>
        <Instagram />
      </div>
      <span className="social-media-text">Instagram</span>
    </div>
  </a>
)

export default InstagramButton
