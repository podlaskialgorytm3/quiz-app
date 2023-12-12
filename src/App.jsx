import React, { useState } from "react";
import { StartView } from "./views/StartView";
import { QuizView } from "./views/QuizView";
import { ResultView } from "./views/ResultView";
import { ViewContextProvider } from "./views/AppView";

const basicView = 'start'

const App = () => {
  const [view,setView] = useState(basicView)
  return (
    <ViewContextProvider>
      {view === "start" && <StartView/>}
      {view === "quiz" && <QuizView />}
      {view === "result" && <ResultView />}
    </ViewContextProvider>
  );
};

export default App;
