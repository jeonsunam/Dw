import styled, { css } from "styled-components";

const SIZE = {
  large: 24,
  medium: 20,
  small: 16,
};

// css 함수
const fontSize = css`
  font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px;
`;

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  ${fontSize}/* prop을 받은걸로 스타일 지정 */
  /* font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px; */
`;

const Input = styled.input`
  border: 2px solid #eeeeee;
  outline: none;
  padding: 16px;
  border-radius: 4px;
  ${fontSize}/* input은 font-size로 크기를 키울수잇음 */
  /* font-size: ${({ size }) => SIZE[size] ?? SIZE["medium"]}px; */
`;

const Container = styled.div`
  ${Button}, ${Input} {
    margin: 10px;
  }
`;

function Reuse() {
  return (
    <Container>
      <h2>Button</h2>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h2>Input</h2>
      <Input size="small" />
      <Input size="medium" />
      <Input size="large" />
    </Container>
  );
}

export default Reuse;
