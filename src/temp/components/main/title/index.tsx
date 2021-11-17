import React from "react";
import styled from "styled-components";
import title from "../../../../assets/images/title.png";

const Img = styled.img`
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
`;

export function Title() {
  return <Img src={title} alt="the clash of cats nft" />;
}
