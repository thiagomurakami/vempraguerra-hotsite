import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from "./images/HeaderLogo"

const Header = ({}) => {
  return (
    <header
      style={{
        background: "white",
      }}
    >
      <div
        style={{
          padding: "0px 1.0875rem 1.45rem",
          margin: "0px auto",
          maxWidth: 900,
        }}
      >
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
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
