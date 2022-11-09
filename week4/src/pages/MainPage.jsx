import React from "react";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import UserInfo from "../components/UserInfo";

export default function MainPage() {
  return (
    <Container>
      <SearchBox />
      <UserInfo />
    </Container>
  );
}

const Container = styled.div`
  background-color: #b4b4ff;
  width: 900px;
  height: 100vh;

  margin: 0 auto;
`;
