import * as React from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BuyNow from "../components/BuyNow"

const IndexPage = () => {
  //   const date = moment().add(7, "days").calendar()
  //   const exp = date + `12:12:12`
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <BuyNow />
    </Layout>
  )
}

export default IndexPage
