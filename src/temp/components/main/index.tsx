import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import React, { useMemo } from "react";
import styled from "styled-components";
import { Props } from "../../Home";
import { Gif } from "./gif";
import styles from "./main.module.scss";
import { Title } from "./title";
import { Button, CircularProgress } from "@material-ui/core";
import { renderCounter } from "../../../Home";
import Countdown from "react-countdown";
import { isVIPWallet } from "./vip_wallets";

const TitleContainer = styled.div`
  @media only screen and (max-width: 901px) {
    margin-bottom: 24px;
  }
`;

const MintContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MintButton = styled(Button)`
  margin: 0 !important;
  margin-top: 24px !important;
  background-color: #f50057 !important;
  color: white !important;
  @media only screen and (max-width: 900px) {
    margin: 32px 0 !important;
  }
`;

function getMintButtonLabel({
  isSoldOut,
  isMinting,
}: {
  isSoldOut: boolean;
  isMinting: boolean;
}) {
  if (isSoldOut) {
    return "SOLD OUT";
  }

  if (isMinting) {
    return <CircularProgress />;
  }

  return "MINT";
}

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
  const walletId = wallet?.publicKey?.toBase58();
  const isVIP = useMemo(() => isVIPWallet(walletId), [walletId]);

  return (
    <div className={`${styles.container} main_container`}>
      <div>
        <TitleContainer>
          <Title />
        </TitleContainer>

        {/* <p className={styles.comingSoon}>Coming soon...</p> */}

        <MintContainer>
          <Countdown
            className="countdown"
            date={startDate}
            onMount={({ completed }) => completed && setIsActive(true)}
            onComplete={() => setIsActive(true)}
            renderer={renderCounter}
          />

          {!wallet ? (
            <div className={styles.connectWallet}>
              <WalletDialogButton color="secondary" style={{ height: 50 }}>
                Connect Wallet
              </WalletDialogButton>
            </div>
          ) : (
            <>
              {isVIP ? (
                <MintButton
                  disabled={isSoldOut || isMinting || !isActive}
                  onClick={onMint}
                  variant="contained"
                >
                  {getMintButtonLabel({ isSoldOut, isMinting })}
                </MintButton>
              ) : (
                <div>
                  You're not a VIP member 😿, hold on, your time to mint is
                  coming soon...
                </div>
              )}
            </>
          )}
        </MintContainer>
      </div>
      <div>
        <Gif />
      </div>
    </div>
  );
}
