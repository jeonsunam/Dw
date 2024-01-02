import styled from "styled-components";
import searchImg from "./search.png";
import Input from "./Input";

const SearchInput = styled(Input)`
  background-image: url("${searchImg}");
  background-size: 16px;
  background-repeat: no-repeat;
  /* 오른쪽12px , 위쪽 50% */
  background-position: 12px 50%;
  padding-left: 40px;
`;

export default SearchInput;
