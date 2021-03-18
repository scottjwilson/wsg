import * as React from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timer from "../components/Timer"
import moment from "moment"
const IndexPage = () => {
  //   const date = moment().add(7, "days").calendar()
  //   const exp = date + `12:12:12`
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />

      <Timer deadline="2021-03-24 12:12:12" />
    </Layout>
  )
}

export default IndexPage
