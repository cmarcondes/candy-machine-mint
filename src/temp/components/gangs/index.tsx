import React from "react";
import styled from "styled-components";
import { gangA } from "./gang_a";
import { gangB } from "./gang_b";
import { Members } from "./members";
import { Title } from "./title";

const Container = styled.div`
  margin-top: 48px;
`;
const GangsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 45%;
  }
`;

export function Gangs() {
  return (
    <Container>
      <Title>Meet the Gangs</Title>
      <GangsContainer>
        <Members title="Gang A" members={gangA} />
        <Members title="Gang B" members={gangB} />
      </GangsContainer>
    </Container>
  );
}
