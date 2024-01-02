import styled from "styled-components";
import nailImg from "./nail.png";

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;

  // & : 부모선택자(StyledButton)
  &:hover,
  &:active {
    background-color: #463770;

    ${Icon} {
      opacity: 0.2;
    }
  }
  // 자기자신의 자손(컴포넌트 선택자)인 Icon
  & ${Icon} {
    margin-right: 4px;
  }
`;

function Button({ children }) {
  return (
    <StyledButton>
      <Icon src={nailImg} alt="nail icon"></Icon>
      {children}
    </StyledButton>
  );
}

export default Button;
