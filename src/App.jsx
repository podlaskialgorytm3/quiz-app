import React from "react";
import { useState,useContext } from "react";
import { StartView } from "./views/StartView";
import { QuizView } from "./views/QuizView";
import { ResultView } from "./views/ResultView";
import { ViewContextProvieder } from "./views/AppView";
import { ViewContext } from "./context/ViewContext";

const App = () => {
    const ctxValue = useContext(ViewContext)
    return(
        <ViewContextProvieder>
            {ctxValue}
        </ViewContextProvieder>
    )
}

export default App;
