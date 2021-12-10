import React from "react";
import styled from "styled-components";
import { SocialMedias } from "../social_medias";

const Container = styled.div`
  @media only screen and (max-width: 1199px) {
    margin-right: 32px;
  }
`;

const SocialMediaContainer = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: end;

  span {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
    display: block;
  }
`;

const CopyRights = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  span {
    font-weight: 200;
  }
`;

export function Footer() {
  return (
    <Container className={`main_container`}>
      <SocialMediaContainer>
        <span>Follow US</span>
        <SocialMedias />
      </SocialMediaContainer>
      <CopyRights>
        <span>{`@${new Date().getFullYear()} clashofcatsnft.com`}</span>
      </CopyRights>
    </Container>
  );
}
