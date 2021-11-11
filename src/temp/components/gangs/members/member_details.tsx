import React from "react";
import styled from "styled-components";
import { Member } from "../types";

interface Props {
  member: Member;
}

const Container = styled.div`
  display: flex;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .detailsContainer {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    > div {
      margin-bottom: 6px;
    }
  }
`;

export function MemberDetails({ member }: Props) {
  return (
    <Container>
      <img src={member.image} alt={member.name} />
      <div className="detailsContainer">
        <KeyValueDetail name="Name" value={member.name} />
        <KeyValueDetail name="Type" value={member.type} />
        <KeyValueDetail name="Description" value={member.description} />
      </div>
    </Container>
  );
}

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .label {
    font-size: 12px;
    font-weight: bold;
    text-decoration: underline;
  }

  .value {
    text-transform: capitalize;
  }
`;

function KeyValueDetail({ name, value }: { name: string; value: string }) {
  return (
    <DetailsContainer>
      <span className="label">{name}:</span>
      <span className="value">{value}</span>
    </DetailsContainer>
  );
}
