import { useContext,useEffect,useState } from "react"
import { ViewContext } from "../stores/ViewContext"
import { MainContainer } from '../components/MainContainer'
import questions from '../data/questions'

const INTERVAL_TIME = 15000

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
            {questions[currentQuestion].text}
        </MainContainer>
    )
}