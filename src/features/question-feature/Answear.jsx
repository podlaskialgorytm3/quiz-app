import { useState } from "react";
import styled from "styled-components";

const StyledAnswearContainer = styled.div`
    background-color: ${({color}) => color};
    `;


export const Answear = ({ children, correct, ...props }) => {
  const [color,setColor] = useState('gray')
  const isCorrect = correct === 'true';

  const handleAnswerClick = () => {
    if(isCorrect){
      setColor('green')
    }
    else{
        setColor('red')
    }
  };

  return (
    <StyledAnswearContainer
      className="w-[700px] h-16 mt-6 bg-gray-700 text-center leading-[64px] rounded-3xl"
      {...props}
      onClick={handleAnswerClick}
      color={color}
    >
      {children}
    </StyledAnswearContainer>
  );
};
