// import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import React from "react";
import styled from "styled-components";
import { Gif } from "./gif";
import styles from "./main.module.scss";
import { Title } from "./title";

const TitleContainer = styled.div`
  @media only screen and (max-width: 901px) {
    margin-bottom: 24px;
  }
`;

export function Main() {
  return (
    <div className={`${styles.container} main_container`}>
      <div>
        <TitleContainer>
          <Title />
        </TitleContainer>
        {/* <div className={styles.connectWallet}>
          <WalletDialogButton color="secondary" style={{ height: 50 }}>
          Connect Wallet
          </WalletDialogButton>
        </div> */}
      </div>
      <div>
        <Gif isHidden />
      </div>
    </div>
  );
}
