import { MainContainer } from "../components/MainContainer"
import IMG from '../assets/quiz-complete.png'
import { ResultTitle } from "../features/result-feature/ResultTitle"
export const ResultView = ({score}) => {
    console.log(score)
    return(
        <MainContainer>
             <img src={IMG} alt="quiz complete" className="w-[150px] h-[150px]"/>
             <ResultTitle>Quiz Completed!</ResultTitle>
        </MainContainer>
    )
}