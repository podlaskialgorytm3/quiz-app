import { useContext } from "react"
import { ViewContext } from "../context/ViewContext"
import { MainContainer } from "../components/molecules/MainContainer"
import { Title } from "../components/atoms/Title"
import { Button } from "../components/atoms/Button"

export const StartView = ({onClick}) => {
    const value = useContext(ViewContext)
    console.log(value)
    return(
        <MainContainer>
            <Title>Welcome to the Quiz App!</Title>
            <Button onClick={onClick}>Click to start Quiz!</Button>
        </MainContainer>
    )
}