import { useContext } from "react"
import { ViewContext } from "../stores/ViewContext"
import { MainContainer } from "../components/MainContainer"
import { Title } from "../components/Title"
import { Button } from "../components/Button"

export const StartView = () => {
    const {view, changeView } = useContext(ViewContext)
    const handleView = () => {
        changeView('quiz')
    }
    return(
        <MainContainer>
            <Title>Welcome to the Quiz App!</Title>
            <Button onClick={handleView}>Click to start Quiz!</Button>
        </MainContainer>
    )
}