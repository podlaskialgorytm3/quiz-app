import { MainContainer } from "../components/molecules/MainContainer"
import { Title } from "../components/atoms/Title"
import { Button } from "../components/atoms/Button"
export const StartView = ({onClick}) => {
    return(
        <MainContainer>
            <Title>Welcome to the Quiz App!</Title>
            <Button onClick={onClick}>Click to start Quiz!</Button>
        </MainContainer>
    )
}