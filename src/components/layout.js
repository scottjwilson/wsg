import * as React from "react"
import Timer from "../components/Timer"

import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="pb-40">{children}</main>
      <Timer deadline="2021-03-24 12:12:12" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
