import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `4rem auto 0 auto`,
          maxWidth: 900,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
