import React, { useContext } from "react";
import { StartView } from "./views/StartView";
import { QuizView } from "./views/QuizView";
import { ResultView } from "./views/ResultView";
import { ViewContextProvider } from "./views/AppView";
import { ViewContext } from "./context/ViewContext";

const App = () => {
  const { view } = useContext(ViewContext)
  return (
    <ViewContextProvider>
      {view === "start" && <StartView/>}
      {view === "quiz" && <QuizView />}
      {view === "result" && <ResultView />}
    </ViewContextProvider>
  );
};

export default App;
