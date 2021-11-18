import React from "react";
import styled from "styled-components";
import { roadMap } from "./road_map";

const Container = styled.div`
  h1 {
    text-align: center;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  border-bottom .5px solid gray;
  padding-bottom: 12px;
  padding-top: 12px;
  
  
  &:hover{
    background: rgba(155, 155, 155, 0.3);
    border-radius: 4px;
  }
`;

const ImgContainer = styled.div`
  img {
    max-width: 70px;
    max-height: 70px;
    margin-right: 24px;
    display: flex;
    align-items: center;
  }
`;

const DescriptionContainer = styled.div`
  p {
    margin: 0;
  }

  .etapa {
    margin-bottom: 4px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export function RoadMap() {
  return (
    <Container>
      <h1>Road Map</h1>
      {roadMap.map((item) => {
        return (
          <ItemContainer key={item.etapa}>
            <ImgContainer>
              <img src={item.image} alt={item.etapa} />
            </ImgContainer>
            <DescriptionContainer>
              <p className="etapa">{item.etapa}</p>
              <p className="description">{item.description}</p>
            </DescriptionContainer>
          </ItemContainer>
        );
      })}
    </Container>
  );
}
