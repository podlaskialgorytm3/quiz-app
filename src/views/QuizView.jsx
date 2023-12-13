import { useContext,useEffect,useState,useRef } from "react"
import {v4 as uuidv4} from 'uuid';
import { ViewContext } from "../stores/ViewContext"
import { MainContainer } from '../components/MainContainer'
import { Title } from "../components/Title"
import { AnswearContainer } from '../features/question-feature/AnswearContainer'
import { Answear } from "../features/question-feature/Answear"
import { Progress } from "../features/question-feature/Progress";
import questions from '../data/questions'

const INTERVAL_TIME = 15000

export const QuizView = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [progressKey,setProgressKey] = useState(uuidv4())
    const {changeView} = useContext(ViewContext)
    const isQuizEnd = useRef(false)
    const isAnswearClicked = useRef(false)
    useEffect(() => {
        const intervalTimmer = setInterval(() => {
            setCurrentQuestion((prevIndex) => (prevIndex + 1) % questions.length)
            setProgressKey(uuidv4())
        },INTERVAL_TIME)
        return () => clearInterval(intervalTimmer)
    },[questions.length])
    if(currentQuestion === questions.length - 1){
            isQuizEnd.current = true
    }
    return(
        <MainContainer>
            {!isQuizEnd.current && (
                <>
                    <Title>{questions[currentQuestion].text}</Title>
                    <Progress key={progressKey} max={INTERVAL_TIME} />
                        <AnswearContainer>
                        {questions[currentQuestion].answers.map((answear) => (
                            <Answear 
                            key={uuidv4()}
                            correct={`${questions[currentQuestion].correctAnswerIndex === questions[currentQuestion].answers.indexOf(answear)}`}
                            >{answear}</Answear>
                        ))}
                        </AnswearContainer>
                </>
            )}
            {isQuizEnd.current && <>{changeView('result')}</>}
        </MainContainer>
    )
}