import styled from "styled-components";
import Input from "./Input";

const Container = styled.div`
  margin: 0 auto;
  width: 400px;

  ${Input} {
    display: block;
    width: 100%;
    margin: 8px 0 16px;
    box-sizing: border-box;
  }
`;

function Practice2() {
  return (
    <Container>
      <h1>로그인</h1>
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="style@DW.kr" />
      {/* label for 속성은 리액트에서 htmlFor 사용 */}
      <label htmlFor="password">Password</label>
      <Input type="password" id="password" placeholder="비밀번호" />
    </Container>
  );
}

export default Practice2;
