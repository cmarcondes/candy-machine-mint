import React from "react";
import styled from "styled-components";
import { Member } from "./types";
import { Card } from "./card";

const Container = styled.div`
  margin: 20px 0;
  h4 {
    margin-bottom: 20px;
    font-size: 26px;
  }

  @media only screen and (max-width: 1200px), {
    margin: 30px;
  }

  .label {
    margin-right: 6px;
    font-weight: bold;
  }
`;

const Images = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;

    .part_1 {
      margin-bottom: 32px;
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: skew(5deg);

  .test {
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export function Members({
  members,
  title,
}: {
  members: Member[];
  title: string;
}) {
  return (
    <Container>
      <h4>{title}:</h4>
      <Images>
        <ImagesContainer className="part_1">
          {members.slice(0, 3).map((member) => {
            return <Card member={member} key={member.name} />;
          })}
        </ImagesContainer>
        <ImagesContainer className="part_2">
          {members
            .slice(3, 6)
            .slice(0, 3)
            .map((member) => {
              return (
                <Card member={member} key={member.name} className="test" />
              );
            })}
        </ImagesContainer>
      </Images>
    </Container>
  );
}
