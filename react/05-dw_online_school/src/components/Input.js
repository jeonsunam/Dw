import styled from "styled-components";

// const SIZE = {
//   small: 10,
//   medium: 12,
//   large: 15,
// };

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ $error }) => ($error ? `#f44336` : `#eeeeee`)};
  outline: none;
  width: 100%;
  height: 30px;
  padding: 8px 0;
  /* input은 font-size로 크기를 키울수잇음 */
  font-size: 16px;
  display: block
    /* border-radius: ${({ $round }) => ($round ? `9999px` : `3px`)}; */
    ${({ $error }) =>
      !$error &&
      `&:focus {
        border-bottom: 2px solid #7760b4
    }`};

  &::placeholder {
    color: #eee;
  }
`;

export default Input;
