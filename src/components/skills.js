import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  ul {
    list-style: square;
  }

  code {
    background-color: #bf3b3b;
    color: white;
    font-weight: bold;
    display: inline-block;
    padding: 0 0.3rem;
    font-size: inherit;
  }
`

export default () => (
  <Wrapper>
    <h2>My skills</h2>
    <p>
      Here you will find a (probably incomplete) list of (mainly tech) skills
      that I am continually working on - you're never done learning!
      <br />
      <ul>
        <li>
          Building modern, reactive frontends/UIs with <code>React</code>,
          including packages and libraries such as Create React App, Redux,
          React Router, React Helmet
        </li>
        <li>
          Building backends and RESTful APIs using <code>NodeJS</code>,
          including packages and libraries such as Express, Sequelize, Mongoose,
          Webpack
        </li>
        <li>
          Modern <code>HTML</code> and <code>CSS</code>, including libraries
          such as Bootstrap, Material UI, Ant Design, TailwindCSS,
          styled-components, emotion
        </li>
        <li>
          Learning the <code>JAMstack</code> architecture/philosophy using React
          frameworks such as <code>GatsbyJS</code> and <code>NextJS</code> and
          deploying to CDNs like <code>Netlify</code> and <code>Zeit Now</code>.
        </li>
        <li>
          Proficient in data analysis using <code>Excel</code>, including
          advanced features like Array formulas, Pivot tables, and the 'Power'
          platform - PowerQuery, PowerPivot and <code>PowerBI</code>.
          Comfortable with PowerQuery language ("M") and DAX.
        </li>
        <li>
          Speak <code>German</code>, <code>English</code> and <code>Spanish</code> at a native level
          and am a <code>curious</code> person that <code>loves to learn</code>.
        </li>
      </ul>
    </p>
  </Wrapper>
)
