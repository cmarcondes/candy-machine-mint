// import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import React from "react";
import styled from "styled-components";
import { shortenAddress } from "../../../candy-machine";
import { Props } from "../../Home";
import { Gif } from "./gif";
import styles from "./main.module.scss";
import { Title } from "./title";
import { Button, CircularProgress } from "@material-ui/core";
import { renderCounter } from "../../../Home";
import Countdown from "react-countdown";

const TitleContainer = styled.div`
  @media only screen and (max-width: 901px) {
    margin-bottom: 24px;
  }
`;

const MintButton = styled(Button)``; // add your styles here

export function Main({
  onMint,
  wallet,
  balance,
  totalItemsAvailable,
  totalItemsRedeemed,
  totalItemsRemaining,
  isSoldOut,
  isMinting,
  isActive,
  startDate,
  setIsActive,
}: Props) {
  console.log("### caue ~ isActive", isActive);
  return (
    <div className={`${styles.container} main_container`}>
      <div>
        <TitleContainer>
          <Title />
        </TitleContainer>

        {wallet && (
          <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
        )}

        {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

        {wallet && <p>Total Available: {totalItemsAvailable}</p>}

        {wallet && <p>Redeemed: {totalItemsRedeemed}</p>}

        {wallet && <p>Remaining: {totalItemsRemaining}</p>}

        {!wallet ? (
          <div className={styles.connectWallet}>
            <WalletDialogButton color="secondary" style={{ height: 50 }}>
              Connect Wallet
            </WalletDialogButton>
          </div>
        ) : (
          <MintButton
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
            variant="contained"
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "MINT"
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </MintButton>
        )}
      </div>
      <div>
        <Gif isHidden />
      </div>
    </div>
  );
}
