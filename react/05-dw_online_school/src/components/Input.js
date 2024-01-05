import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ $error }) => ($error ? `#f44336` : `#eeeeee`)};
  outline: none;
  padding: 8px 0;
  /* input은 font-size로 크기를 키울수잇음 */
  font-size: 16px;
  display: block;
  width: 100%;

  ${({ $error }) =>
    !$error &&
    `
        &:focus {
            border-bottom: 2px solid #7760b4
        }
    `};

  &::placeholder {
    color: #c4c5cd;
  }
`;

export default Input;
