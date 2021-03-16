import * as React from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timer from "../components/Timer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero title="The FASTEST Way for Options Traders To Earn A Full-Time Income with-OUT years of experience PERIOD! 🔥💯📈" />
    <About />
    <Timer />
  </Layout>
)

export default IndexPage
