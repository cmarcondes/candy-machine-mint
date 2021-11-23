import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 20px;
  h1 {
    text-align: center;
    margin-bottom: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 100;
    text-align: center;
  }
`;

export function Intro() {
  return (
    <Container>
      <h1>Intro</h1>
      <p>10K unique handcrafted images, on the Solana network.</p>
      <p>
        Captain Gudu was adopted by a rich family and is living a good life, but
        his brother General Pink-Kryptonite was left behind. He feels betrayed
        by humans and now wants revenge. The Guardians and The Punishers are
        born. Pick your side!
      </p>
    </Container>
  );
}
