import React from "react"

import Cooknbook from "./screenshots/cooknbook"
import Doenate from "./screenshots/doenate"
import WordGuessGame from "./screenshots/wordGuessGame"
import CodeQuiz from "./screenshots/codeQuiz"
import WeatherDashboard from "./screenshots/weatherDashboard"
import PfdzmHome from "./screenshots/pfdzmHome"
import WorkoutTracker from "./screenshots/workoutTracker"
import EatDaBurger from "./screenshots/eatDaBurger"

export default ({ title, description, repo, deploy }) => (
  <div className="card">
    <div className="card-img">
      {title === "CookNBook" && <Cooknbook />}
      {title === "Dönate" && <Doenate />}
      {title === "Word Guess Game" && <WordGuessGame />}
      {title === "CodeQuiz" && <CodeQuiz />}
      {title === "Weather Dashboard" && <WeatherDashboard />}
      {title === "pfdzm Home" && <PfdzmHome />}
      {title === "Workout Tracker" && <WorkoutTracker />}
      {title === "Eat-da-Burger" && <EatDaBurger />}
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
)
