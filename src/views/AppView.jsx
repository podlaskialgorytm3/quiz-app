import React, { useState } from "react";
import { ViewContext } from "../stores/ViewContext";
import { StartView } from '../views/StartView'
import { QuizView } from '../views/QuizView'
import { ResultView } from '../views/ResultView'

export const ViewContextProvider = () => {
  const [view,setView] = useState('start')
  const changeView = (newView) => {
    setView(newView)
  }
  return (
    <ViewContext.Provider value={{view,changeView}}>
      <div className="flex flex-col justify-center items-center h-5/6">
        {view === "start" && <StartView/>}
        {view === "quiz" && <QuizView />}
        {view === "result" && <ResultView />}
      </div>
    </ViewContext.Provider>
  );
};
