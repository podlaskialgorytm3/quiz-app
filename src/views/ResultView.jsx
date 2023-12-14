import React, { useEffect, useState } from "react";
import { MainContainer } from "../components/MainContainer"
import IMG from '../assets/quiz-complete.png'
import { ResultTitle } from "../features/result-feature/ResultTitle"
import questions from "../data/questions"


export const ResultView = ({score}) => {
    const [userAnswars, setUserAnswars] = useState([])
    const [colorAnswar, setColorAnswar] = useState([])
    
    useEffect(() => {
        score.answears.forEach((answear, index) => {
            if(answear === questions[index].correctIndex){
                setColorAnswar(prevColors => [...prevColors, '#4caf50'])
                setUserAnswars(prevAnswars => [...prevAnswars, questions[index].answers[answear]])
            }
            else if(answear === null){
                setColorAnswar(prevColors => [...prevColors, '#f44336'])
                setUserAnswars(prevAnswars => [...prevAnswars, 'No answear'])
            }
            else{
                setColorAnswar(prevColors => [...prevColors, '#f44336'])
                setUserAnswars(prevAnswars => [...prevAnswars, questions[index].answers[answear]])
            }
        })
    },[])
    return(
        <MainContainer>
             <img src={IMG} alt="quiz complete" className="w-[150px] h-[150px]"/>
             <ResultTitle>Quiz Completed!</ResultTitle>
        </MainContainer>
    )
}