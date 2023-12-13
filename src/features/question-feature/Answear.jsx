import styled from "styled-components";

const StyledAnswearContainer = styled.div`
    background-color: ${({color}) => color};
    `;


export const Answear = ({ children,onClick,color, ...props }) => {
  return (
    <StyledAnswearContainer
      className="w-[700px] h-16 mt-6 bg-gray-700 text-center leading-[64px] rounded-3xl"
      {...props}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledAnswearContainer>
  );
};
