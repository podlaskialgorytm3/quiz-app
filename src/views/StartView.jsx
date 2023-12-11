import { MainContainer } from "../components/molecules/MainContainer"
import { Title } from "../components/atoms/Title"
import { Button } from "../components/atoms/Button"
export const StartView = () => {
    return(
        <MainContainer>
            <Title>Welcome to the Quiz App!</Title>
            <Button>Click to start Quiz!</Button>
        </MainContainer>
    )
}