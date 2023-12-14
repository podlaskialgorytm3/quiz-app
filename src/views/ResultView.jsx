import { MainContainer } from "../components/MainContainer"
import IMG from '../assets/quiz-complete.png'
export const ResultView = () => {
    return(
        <MainContainer>
             <img src={IMG} alt="quiz complete" className="w-[150px] h-[150px]"/>
        </MainContainer>
    )
}