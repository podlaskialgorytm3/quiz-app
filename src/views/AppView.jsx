import React, { useState, useEffect } from "react";
import { ViewContext } from "../stores/ViewContext";
import { StartView } from '../views/StartView'
import { QuizView } from '../views/QuizView'
import { ResultView } from '../views/ResultView'
import { adjustAnswearsArray } from "../utils/AdjustAnswearsArray.js";

export const ViewContextProvider = () => {
  const [view, setView] = useState('start')
  const [score, setScore] = useState({
    points: 0,
    answears: []
  })

  const changeView = (newView) => {
      console.log("CHANGE VIEW")
      setView(newView);
  }

  const changeScore = (points, answears) => {
    const adjustedAnswears = adjustAnswearsArray(answears);
    setScore((prev) => { return { ...prev, points, answears: adjustedAnswears } })
  }

  return (
    <ViewContext.Provider value={{ view, changeView }}>
      <div className="flex flex-col justify-center items-center h-5/6">
        {view === "start" && <StartView />}
        {view === "quiz" && <QuizView changeScore={changeScore} score={score}/>}
        {view === "result" && <ResultView score={score} />}
      </div>
    </ViewContext.Provider>
  );
};
