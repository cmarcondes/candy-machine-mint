import React from "react";
import styled from "styled-components";
import { Member } from "./types";
import hiddenImg from "../../../assets/images/hidden_img.jpeg";

const StyledCard = styled.div<{ mainColor: string }>`
  flex: 1;
  transition: all 1s ease-in-out;
  height: 300px;
  position: relative;
  margin-right: 1em;

  .card__head {
    color: black;
    background: rgba(255, 255, 255, 0.75);
    padding: 0.5em;
    transform: rotate(-90deg);
    transform-origin: 0% 0%;
    transition: all 0.5s ease-in-out;
    min-width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1em;
    white-space: nowrap;
    border-top: 2px solid ${(props) => props.mainColor};
  }

  .card__head-rarity {
    display: none;
    font-size: 0.7em;
  }

  &:hover {
    flex-grow: 5;
    img {
      filter: grayscale(0);
    }
    .card__head {
      text-align: center;
      top: calc(100% - 2.7em);
      color: white;
      background: rgba(0, 0, 0, 0.5);
      font-size: 1.5em;
      transform: rotate(0deg) skew(-5deg);
      padding: 0;
      .card__head-rarity {
        display: block;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
    filter: grayscale(0);
  }
`;

export function Card({
  member,
  className,
}: {
  member: Member;
  className?: string;
}) {
  return (
    <StyledCard className={className} mainColor={member.mainColor}>
      <img src={member.hidden ? hiddenImg : member.image} alt={member.name} />
      <div className="card__head">
        <div>{member.name}</div>
        <div className="card__head-rarity">{member.type}</div>
      </div>
    </StyledCard>
  );
}
