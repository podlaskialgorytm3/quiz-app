import React, { useContext, useState } from "react";
import { StartView } from "./views/StartView";
import { QuizView } from "./views/QuizView";
import { ResultView } from "./views/ResultView";
import { ViewContextProvider } from "./views/AppView";
import { ViewContext } from "./context/ViewContext";


const App = ({value}) => {
  const {view,changeView} = useContext(ViewContext)
  console.log(view)
  return (
    <ViewContextProvider>
      {view === "start" && <StartView/>}
      {view === "quiz" && <QuizView />}
      {view === "result" && <ResultView />}
    </ViewContextProvider>
  );
};

export default App;
