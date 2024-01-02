import styled from "styled-components";

const SIZE = {
  small: 10,
  medium: 12,
  large: 15,
};

const Input = styled.input`
  border: 2px solid ${({ $error }) => ($error ? `#f44336` : `#eeeeee`)};
  outline: none;
  padding: 16px;
  /* input은 font-size로 크기를 키울수잇음 */
  font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `3px`)};

  &:focus {
    border-color: ${({ $error }) => ($error ? `#f44336` : `#7760b4`)};
  }
`;

export default Input;
