import React from "react";
import { useState,useContext } from "react";
import { StartView } from "./views/StartView";
import { QuizView } from "./views/QuizView";
import { ResultView } from "./views/ResultView";
import { ViewContextProvieder } from "./views/AppView";
import { ViewContext } from "./context/ViewContext";

const App = () => {
    const [view,setView] = useState(useContext(ViewContext))

    const handleStart = () => {
        setView('quiz')
    }

    return(
        <ViewContextProvieder>
            {view === 'start' && <StartView onClick={handleStart}/>}
            {view === 'quiz' && <QuizView/>}
            {view === 'result' && <ResultView/>}
        </ViewContextProvieder>
    )
}

export default App;
