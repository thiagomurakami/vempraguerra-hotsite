import React from "react"

import About from "../components/About"
import Faq from "../components/Faq"
import Banner from "../components/images/Banner"
import Header from "../components/Header"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Header />
    <SEO title="#VemPraGuerra" />
    <div style={{position: 'relative'}}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.charidy.com/vempraguerra"
      >
        <Banner />
        <button
          type="button"
          style={{
            '-moz-appearance': 'none',
            '-webkit-appearance': 'none',
            // background: '#dfa86f',
            background: 'rgb(36, 35, 30)',
            border: 0,
            borderRadius: 4,
            bottom: 0,
            // color: '#7C2F2E',
            color: 'rgb(227, 168, 106)',
            cursor: 'pointer',
            fontSize: '2rem',
            fontWeight: 'bold',
            outline: 0,
            padding: '1rem',
            position: 'absolute',
            right: 0,
          }}
        >
          Doar agora
        </button>
      </a>
    </div>
    <Layout>
      <About />
      <Faq />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.charidy.com/vempraguerra"
        style={{textDecoration: 'none'}}
      >
        <h2>Clique aqui para contribuir</h2>
      </a>
    </Layout>
  </>
)

export default IndexPage
