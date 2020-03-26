import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './banner.css'

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "banner-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "banner-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div id="mobile-banner">
        <Img fluid={data.mobileImage.childImageSharp.fluid} />
      </div>
      <div id="desktop-banner">
        <Img fluid={data.desktopImage.childImageSharp.fluid} />
      </div>
    </>
  )
}

export default HeaderLogo
