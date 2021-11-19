import React from "react";
import styled from "styled-components";
import { roadMap } from "./road_map";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
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
  z-index: 2;
  img {
    max-width: 70px;
    max-height: 70px;
    margin-right: 24px;
    display: flex;
    align-items: center;
  }
`;

const DescriptionContainer = styled.div`
  user-select: none;
  p {
    margin: 0;
  }

  .etapa {
    margin-bottom: 4px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Line = styled.div`
  width: 6px;
  background: black;
  position: absolute;
  left: 23px;
  top: 41px;
  height: 80%;
  z-index: 1;
`;

export function RoadMap() {
  return (
    <Container>
      <h1>Road Map</h1>
      <div style={{ display: "flex", position: "relative", maxWidth: 800 }}>
        <Line />
        <div>
          {roadMap.map((item) => {
            return (
              <ItemContainer key={item.etapa}>
                <ImgContainer>
                  <img
                    src={item.image}
                    alt={item.etapa}
                    width={48}
                    height={48}
                  />
                </ImgContainer>
                <DescriptionContainer>
                  <p className="etapa">{item.etapa}</p>
                  <p className="description">{item.description}</p>
                </DescriptionContainer>
              </ItemContainer>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
