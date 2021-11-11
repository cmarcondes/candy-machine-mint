import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import React from "react";
import { Gif } from "./gif";
import styles from "./main.module.scss";
import { Title } from "./title";

export function Main() {
  return (
    <div className={styles.container}>
      <div>
        <Title />
        <div className={styles.connectWallet}>
          <WalletDialogButton color="secondary">
            Connect Wallet
          </WalletDialogButton>
        </div>
      </div>
      <div>
        <Gif />
      </div>
    </div>
  );
}
