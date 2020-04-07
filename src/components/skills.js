import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  ul {
    list-style: square;
  }

  strong {
    color: palevioletred;
  }
`

export default () => (
  <Wrapper>
    <h2>My Skills</h2>
    <p>
      Here you will find a (probably incomplete) list of (mainly tech) skills
      that I am continually working on - you're never done learning!
      <br />
      <ul>
        <li>
          Building modern, reactive frontends/UIs with <strong>React</strong>,
          including packages and libraries such as Create React App, Redux,
          React Router, React Helmet
        </li>
        <li>
          Building backends and RESTful APIs using <strong>NodeJS</strong>,
          including packages and libraries such as Express, Sequelize, Mongoose,
          Webpack
        </li>
        <li>
          Modern <strong>HTML</strong> and <strong>CSS</strong>, including
          libraries such as Bootstrap, Material UI, Ant Design, TailwindCSS,
          styled-components, emotion
        </li>
        <li>
          Learning the <strong>JAMstack</strong> architecture/philosophy using
          React frameworks such as <strong>GatsbyJS</strong> and{" "}
          <strong>NextJS</strong> and deploying to CDNs like{" "}
          <strong>Netlify</strong> and <strong>Zeit Now</strong>.
        </li>
        <li>
          Proficient in data analysis using <strong>Excel</strong>, including
          advanced features like Array formulas, Pivot tables, and the 'Power'
          platform - PowerQuery, PowerPivot and <strong>PowerBI</strong>.
          Comfortable with PowerQuery language ("M") and DAX.
        </li>
        <li>
          Avid communicator and <strong>life-long learner</strong>, I enjoy
          learning languages (I speak 3 native-like and am learning quite a few
          more!) and working in multi-cultural, diverse teams.
        </li>
      </ul>
    </p>
  </Wrapper>
)
