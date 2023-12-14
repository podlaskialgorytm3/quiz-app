import React from "react";
import { MainContainer } from "../components/MainContainer"
import IMG from '../assets/quiz-complete.png'
import { ResultTitle } from "../features/result-feature/ResultTitle"
import questions from "../data/questions"


export const ResultView = ({score}) => {
    const percentage = (score / (questions.length - 1)) * 100;
    return(
        <MainContainer>
            <img src={IMG} alt="quiz complete" className="w-[150px] h-[150px]"/>
            <ResultTitle className="text-3xl font-bold text-center mb-4">Quiz Completed!</ResultTitle>
            <p className="text-center text-4xl mt-10 font-bold shadow">You scored {percentage}%</p>
        </MainContainer>
    )
}