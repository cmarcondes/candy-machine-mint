import React from "react";
import styled from "styled-components";
import { SocialMedias } from "../social_medias";

const Container = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px 0 24px;

  @media only screen and (max-width: 1199px) {
    margin-right: 32px;
  }
`;

export function Header() {
  return (
    <Container className={`main_container`}>
      <SocialMedias />
    </Container>
  );
}
