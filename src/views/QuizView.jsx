import { useContext } from "react"
import { ViewContext } from "../stores/ViewContext"
import { MainContainer } from '../components/MainContainer'

export const QuizView = () => {
    const value = useContext(ViewContext)
    console.log(value)
    return(
        <MainContainer>
            Quizowa pozycja ... 
        </MainContainer>
    )
}