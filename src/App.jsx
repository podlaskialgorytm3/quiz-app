import React from "react";
import { useState } from "react";
import { StartView } from "./views/StartView";
import { QuizView } from "./views/QuizView";
import { ResultView } from "./views/ResultView";

const App = () => {
    const [view,setView] = useState('start')
    
    return(
        <main className="flex justify-center items-center h-full">
            {view === 'start' && <StartView />}
        </main>
    )
}

export default App;
