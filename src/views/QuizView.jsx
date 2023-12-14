import { useContext, useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ViewContext } from "../stores/ViewContext";
import { MainContainer } from '../components/MainContainer';
import { Title } from "../components/Title";
import { AnswearContainer } from '../features/question-feature/AnswearContainer';
import { Answear } from "../features/question-feature/Answear";
import { Progress } from "../features/question-feature/Progress";
import questions from '../data/questions';
import { TIME } from "../data/questions";

const INTERVAL_TIME = TIME;

export const QuizView = ({changeScore}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [progressKey, setProgressKey] = useState(uuidv4());
    const [color, setColor] = useState('#678ea6');
    const [highlightedAnswerIndex, setHighlightedAnswerIndex] = useState(null);
    const { changeView } = useContext(ViewContext);
    const isQuizEnd = useRef(false);
    const intervalRef = useRef(null);
    const poits = useRef(0);
    const answears = useRef([]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgressKey(uuidv4());
            setCurrentQuestion((prevIndex) => (prevIndex + 1) % questions.length);
        }, INTERVAL_TIME);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [questions.length, currentQuestion]);

    const handleAnswearClick = (isCorrect, answearIndex) => {
        setColor(isCorrect ? '#4caf50' : '#f44336');
        setHighlightedAnswerIndex(answearIndex);
        clearInterval(intervalRef.current);
        answears.current[currentQuestion] = answearIndex;
        if (isCorrect) {
            poits.current += 1;
        }
        setTimeout(() => {
            setCurrentQuestion((prevIndex) => prevIndex + 1);
            setHighlightedAnswerIndex(null);
            setProgressKey(uuidv4());
            setColor('#678ea6');
            intervalRef.current = setInterval(() => {
                setProgressKey(uuidv4());
                setCurrentQuestion((prevIndex) => (prevIndex + 1) % questions.length);
            }, INTERVAL_TIME);
        }, 500);
    };
    useEffect(() => { 
        if (currentQuestion + 1 === questions.length) {
            isQuizEnd.current = true;
            changeScore(poits.current, answears.current)
            clearInterval(intervalRef.current);
        }
    },[currentQuestion])

    return (
        <MainContainer>
            {!isQuizEnd.current && (
                <>
                    <Title>{questions[currentQuestion].text}</Title>
                    <Progress key={progressKey} max={questions[currentQuestion].answer_time} />
                    <AnswearContainer>
                        {questions[currentQuestion].answers.map((answear, index) => (
                            <Answear
                                key={uuidv4()}
                                onClick={() => handleAnswearClick(questions[currentQuestion].correctAnswerIndex === questions[currentQuestion].answers.indexOf(answear), index)}
                                color={highlightedAnswerIndex === index ? color : '#678ea6'}
                            >{answear}</Answear>
                        ))}
                    </AnswearContainer>
                </>
            )}
            {isQuizEnd.current && <>{changeView('result')}</>}
        </MainContainer>
    );
};
