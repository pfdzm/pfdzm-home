import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolioCard"
import AboutMe from "../components/aboutMe"
import { projects } from "../data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
    <div
      className="projectContainer"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {projects.map(proj => (
        <PortfolioCard
          {...proj}
          key={proj.title + proj.deploy.length + Math.random().toString()}
        />
      ))}
    </div>
  </Layout>
)

export default IndexPage
