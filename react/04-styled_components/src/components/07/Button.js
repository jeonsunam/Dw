import Styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Button = Styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  /* prop을 받은걸로 스타일 지정 */
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `3px`)};

  &:hover,
  &:active {
    background-color: #463770;
  }
`;

export default Button;
