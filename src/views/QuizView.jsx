import { useContext } from "react"
import { ViewContext } from "../context/ViewContext"
import { MainContainer } from '../components/molecules/MainContainer'

export const QuizView = () => {
    const value = useContext(ViewContext)
    return(
        <MainContainer>
            Quizowa pozycja ... 
        </MainContainer>
    )
}