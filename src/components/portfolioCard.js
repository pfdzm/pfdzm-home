import React from "react"

import Cooknbook from "./screenshots/cooknbook"
import Doenate from "./screenshots/doenate"
import WordGuessGame from "./screenshots/wordGuessGame"
import CodeQuiz from "./screenshots/codeQuiz"
import WeatherDashboard from "./screenshots/weatherDashboard"
import PfdzmHome from "./screenshots/pfdzmHome"
import WorkoutTracker from "./screenshots/workoutTracker"
import EatDaBurger from "./screenshots/eatDaBurger"

const getScreenshot = title => {
  switch (title) {
    case "CookNBook":
      return <Cooknbook />
    case "Dönate":
      return <Doenate />
    case "Word Guess Game":
      return <WordGuessGame />
    case "CodeQuiz":
      return <CodeQuiz />
    case "Weather Dashboard":
      return <WeatherDashboard />
    case "pfdzm Home":
      return <PfdzmHome />
    case "Workout Tracker":
      return <WorkoutTracker />
    case "Eat-da-Burger":
      return <EatDaBurger />
    default:
      return <React.Fragment></React.Fragment>
  }
}

export default ({ title, description, repo, deploy }) => (
  <div className="card">
    <div className="card-img">{getScreenshot(title)}</div>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <div className="card-links">
        <a href={deploy}>Live demo!</a>
        <a href={repo}>Source code</a>
      </div>
    </div>
  </div>
)
