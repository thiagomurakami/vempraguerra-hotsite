import React from 'react'

import About from '../components/About'
import Banner from '../components/images/Banner'
import Faq from '../components/Faq'
import Header from '../components/Header'
import Layout from '../components/Layout'
import News from '../components/News'
import RelevantData from '../components/RelevantData'
import SEO from '../components/seo'
import Status from '../components/Status'
import Team from '../components/Team'

const IndexPage = () => (
  <>
    <Header />
    <SEO title="#VemPraGuerra" />
    <div style={{ position: 'relative' }}>
      <Banner />
    </div>
    <Layout>
      <Status />
      <About />
      <News />
      <Faq />
      <RelevantData />
      <Team />
    </Layout>
  </>
)

export default IndexPage
