import React from 'react'
import Facebook from './images/Facebook'
import InstagramButton from './InstagramButton'
import HeaderLogo from './images/HeaderLogo'

const Footer = () => (
  <footer
    style={{ margin: '0 auto', maxWidth: 900, padding: `0 1.0875rem 1.45rem` }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <InstagramButton />
        <a
          className="social-media-link"
          href="https://www.facebook.com/vempraguerra-105616944418128/"
          target="_blank"
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
              <Facebook />
            </div>
            <span className="social-media-text">Facebook</span>
          </div>
        </a>
      </div>
      <div style={{ width: 244, height: 72 }}>
        <a
          href="https://www.hc.fm.usp.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeaderLogo />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
