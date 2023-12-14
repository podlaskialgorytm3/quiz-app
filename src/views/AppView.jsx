import React, { useState, useEffect } from "react";
import { ViewContext } from "../stores/ViewContext";
import { StartView } from '../views/StartView'
import { QuizView } from '../views/QuizView'
import { ResultView } from '../views/ResultView'

export const ViewContextProvider = () => {
  const [view, setView] = useState('start')
  const [score, setScore] = useState(0)

  const [nextView, setNextView] = useState(null);

  useEffect(() => {
    if (nextView !== null) {
      setView(nextView);
      setNextView(null);
    }
  }, [nextView]);

  const changeView = (newView) => {
    // Opóźnij aktualizację stanu na następny cykl życia przeglądarki
    setTimeout(() => {
      setNextView(newView);
    }, 0);
  }

  const changeScore = (poits) => {
    setScore(poits)
  }

  return (
    <ViewContext.Provider value={{ view, changeView }}>
      <div className="flex flex-col justify-center items-center h-5/6">
        {view === "start" && <StartView />}
        {view === "quiz" && <QuizView changeScore={changeScore} />}
        {view === "result" && <ResultView score={score} />}
      </div>
    </ViewContext.Provider>
  );
};
