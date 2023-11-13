import React from "react";
import styled from "styled-components";
import CustomTabs from "./components/Tab";
import Headings from "./components/Headings";
import "./styles.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 48px;
  overflow: hidden;

  @media (max-width: 1088px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

function App() {
  return (
    <Container>
      <Headings />
      <div style={{ width: "100%" }}>
        <h2> Monitoring </h2>
        <CustomTabs />
      </div>
    </Container>
  );
}

export default App;
