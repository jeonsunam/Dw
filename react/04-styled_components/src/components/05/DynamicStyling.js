import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  ${Button} {
    margin: 10px;
  }
`;

// HTMl태그의 속성들은 표준속성과 비표준속성으로 나눠진다.
//

function DynamicStyling() {
  return (
    <Container>
      <h1>기본 버튼</h1>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h1>둥근 버튼</h1>
      {/* 비표준속성 알고있는 속성이 아닌 다른 값도 정해주지 않는 값들을 말하는데 앞에 $표시를 해야 한다 (prefix) 
      비표준속성을 그대로 보내면 dom올 보내서 속도 저하가 생긴다.*/}
      <Button size="small" $round>
        round small
      </Button>
      <Button size="medium" $round>
        round medium
      </Button>
      <Button size="large" $round>
        round large
      </Button>
    </Container>
  );
}

export default DynamicStyling;
