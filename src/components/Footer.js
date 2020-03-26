import React from "react"
import Facebook from "./images/Facebook"
import Instagram from "./images/Instagram"
import HeaderLogo from "./images/HeaderLogo"

const Footer = () => (
  <footer
    style={{ margin: "0 auto", maxWidth: 900, padding: `0 1.0875rem 1.45rem` }}
  >
    <h2>Entre em contato</h2>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <div style={{ width: 32, height: 32 }}>
          <a
            target="_blank"
            href="https://www.instagram.com/vem.pra.guerra/"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <div style={{ width: 32, height: 32 }}>
          <a
            href="https://www.facebook.com/vempraguerra-105616944418128/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </div>
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
