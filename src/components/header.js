import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import Me from "./me"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
        padding-bottom: 0;
        display: flex;
        align-items: center;
      `}
    >
      <h1
        css={css`
          margin: 0;
          display: inline-block;
        `}
      >
        <Link
          to="/"
          css={css`
            color: #bf3b3b;
            text-decoration: none;
            font-weight: 900;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
      <Me />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
