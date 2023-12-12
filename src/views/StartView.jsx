import { useContext } from "react"
import { ViewContext } from "../context/ViewContext"
import { MainContainer } from "../components/molecules/MainContainer"
import { Title } from "../components/atoms/Title"
import { Button } from "../components/atoms/Button"

export const StartView = () => {
    const {view, changeView } = useContext(ViewContext)
    const handleView = () => {
        console.log(view)
        changeView('quiz')
        console.log(view)
    }
    return(
        <MainContainer>
            <Title>Welcome to the Quiz App!</Title>
            <Button onClick={handleView}>Click to start Quiz!</Button>
        </MainContainer>
    )
}