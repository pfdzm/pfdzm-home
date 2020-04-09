import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolioCard"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import { projects } from "../data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
    <div className="skills">
      <Skills />
    </div>
    <div className="projects">
      <h2>My projects</h2>
      <Wrapper>
        {projects.map(proj => (
          <PortfolioCard
            {...proj}
            key={proj.title + proj.deploy.length + Math.random().toString()}
          />
        ))}
      </Wrapper>
    </div>
  </Layout>
)

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  .card {
    display: inline-block;
    border: 1px solid #eee;
    box-shadow: 0px 0px 2px #eee;
    border-radius: 5px;
    padding: 1.0875rem 1.63125rem;
    margin-bottom: 1.0875rem;
  }

  .card-img {
    border: 1px solid #eee;
    box-shadow: 0px 0px 2px #eee;
    border-radius: 5px;
    margin-bottom: 0.63125rem;
  }

  .card img {
    border-radius: 5px;
  }

  .card-title {
    font-size: larger;
    margin-top: 0.1rem;
    margin-bottom: 0.3rem;
  }

  .card-text {
    font-size: inherit;
    margin-bottom: 0.3rem;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-links {
    margin-top: 0.63125rem;
    display: flex;
    flex-direction: column;
  }

  .card-links a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  @media (min-width: 576px) {
    .card {
      max-width: 300px;
    }
  }
`

export default IndexPage
