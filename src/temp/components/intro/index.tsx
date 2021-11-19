import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h1 {
    text-align: center;
  }
`;

export function Intro() {
  return (
    <Container>
      <h1>Intro</h1>
      <p>
        Captain Gudu and his brother General Pink-Kriptonite were adopted when
        they were days old by a rich family living in the best neighborhood in
        town with the best comfort they could ever ask for. One night, General
        Pink-Kryptonite escaped to explore the city but when tried to get back
        home the gates were locked. He felt betrayed and his anger and fury
        started to grow. His goal is now to extinguish the human race but that’s
        not what Captain Gudu wants. To protect humans and keep them feeding,
        petting and taking care of the cats, Captain Gudu now leads The
        Guardians gang in order to protect those who always protected them.
      </p>
    </Container>
  );
}
