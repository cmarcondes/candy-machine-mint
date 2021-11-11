import React from "react";
import styled from "styled-components";
import { Member } from "../types";
import { MemberDetails } from "./member_details";

interface Props {
  title: string;
  members: Member[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    margin-bottom: 12px;
  }

  .memberDetailsContainer {
    margin-bottom: 32px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export function Members({ title, members }: Props) {
  return (
    <Container>
      <h3>{title}</h3>
      {members.map((member) => {
        return (
          <div className="memberDetailsContainer">
            <MemberDetails key={member.name} member={member} />
          </div>
        );
      })}
    </Container>
  );
}
