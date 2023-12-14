import React, { useEffect, useState } from "react";
import { MainContainer } from "../components/MainContainer"
import IMG from '../assets/quiz-complete.png'
import { ResultTitle } from "../features/result-feature/ResultTitle"
import questions from "../data/questions"


export const ResultView = ({score}) => {
    console.log(score)
       return(
        <MainContainer>
             <img src={IMG} alt="quiz complete" className="w-[150px] h-[150px]"/>
             <ResultTitle>Quiz Completed!</ResultTitle>
             {/* {
                score.answears.forEach((answear, index) => {
                if(answear === questions[index].correctIndex){
                (<p>Poprawna odpowiedź!</p>)
                }
                 else if(answear == "dull"){
                (<p>Nie udzielono odpowiedzi!</p>)
                }
                else{
                (<p>Błędna odpowiedź!</p>)
                }
                })
             } */}
        </MainContainer>
    )
}