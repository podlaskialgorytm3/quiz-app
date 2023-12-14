import { MainContainer } from "../components/MainContainer"
import IMG from '../assets/quiz-complete.png'
import { ResultTitle } from "../features/result-feature/ResultTitle"
export const ResultView = ({score}) => {
<<<<<<< HEAD
       return(
=======
    score.answears.forEach((answear, index) => {
        console.log(answear, index)
    })
    return(
>>>>>>> parent of 172aa69 (Show data from user)
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