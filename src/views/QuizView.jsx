import { useContext,useEffect,useState } from "react"
import { ViewContext } from "../stores/ViewContext"
import { MainContainer } from '../components/MainContainer'
import { Title } from "../components/Title"
import { AnswearContainer } from '../features/question-feature/AnswearContainer'
import { Answear } from "../features/question-feature/Answear"
import questions from '../data/questions'

const INTERVAL_TIME = 1000

export const QuizView = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const value = useContext(ViewContext)
    
    useEffect(() => {
        const intervalTimmer = setInterval(() => {
            setCurrentQuestion((prevIndex) => (prevIndex + 1) % questions.length)
        },INTERVAL_TIME)

        return () => clearInterval(intervalTimmer)
    },[questions.length])
    
    return(
        <MainContainer>
            <Title>{questions[currentQuestion].text}</Title>
            <AnswearContainer>
                {questions[currentQuestion].answers.map((answear) => (
                    <p>{answear}</p>
                ))}
            </AnswearContainer>
        </MainContainer>
    )
}