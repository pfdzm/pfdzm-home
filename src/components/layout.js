/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import Header from "./header"
import "./layout.css"

const globalStyles = css`
  a {
    color: #bf3b3b;
    text-decoration: none;
    font-weight: bolder;
    position: relative;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: #ff4f4f;
  }
`

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Global styles={globalStyles} />
      <LayoutWrapper>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{" "}
          {/* <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "} */}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{" "}
          by <a href="https://github.com/pfdzm">pfdzm</a>
        </footer>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
