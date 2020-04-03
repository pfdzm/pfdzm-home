import React from "react"
import styled from "@emotion/styled"
import Cooknbook from "./screenshots/screenshotCooknbook"
import { css } from "@emotion/core"

export default ({ title, description, img, repo, deploy }) => (
  <Wrapper>
    <div className="card">
      <div
        css={css`
          margin-bottom: 1.0875rem;
        `}
      >
        {title === "cooknbook" && <Cooknbook />}
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <a href={deploy}>Live demo!</a>
        </p>
        <p className="card-text">
          <a href={repo}>Source code</a>
        </p>
      </div>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  .card {
    max-width: 18rem;
    display: inline-block;
    border: 1px solid #eee;
    box-shadow: 0px 0px 5px #eee;
    border-radius: 5px;
    padding: 1.4rem 1.8rem;
    margin-bottom: 2rem;
  }

  .card img {
    max-width: 100%;
    height: auto;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-bottom: 1.0875rem;
  }

  .card-title {
    font-size: inherit;
    margin-top: 0.1rem;
    margin-bottom: 0.2rem;
  }

  .card-text {
    margin: 0;
    padding: 0;
  }
`
