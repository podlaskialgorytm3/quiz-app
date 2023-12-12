import { useContext } from "react"
import { ViewContext } from "../context/ViewContext"

export const QuizView = () => {
    const value = useContext(ViewContext)
    console.log(value)
    return(
        <div>
            Quizowa pozycja ... 
        </div>
    )
}