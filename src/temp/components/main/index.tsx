import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import React from "react";
import { Gif } from "./gif";
import styles from "./main.module.scss";
import { Title } from "./title";

export function Main() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <Title />
        </div>
        <div className={styles.connectWallet}>
          <WalletDialogButton color="secondary" style={{ height: 50 }}>
            Connect Wallet
          </WalletDialogButton>
        </div>
      </div>
      <div>
        <Gif isHidden />
      </div>
    </div>
  );
}
