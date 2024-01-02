import Styled from "styled-components";

// const SIZES = {
//   large: 24,
//   medium: 20,
//   small: 16,
// };

const Button = Styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  width: 100%;
  /* prop을 받은걸로 스타일 지정 */
  font-size: 24px;
  border-radius: 8px;

  &:hover,
  &:active {
    background-color: #7760b4;
  }
`;

export default Button;
