import React from "react";
import { Main } from "./components/main";
import { Contacts } from "./components/contacts";
import { Members } from "./components/members";
import {
  membersTheGuardians,
  membersThePunishers,
} from "./components/members/members";
import { Intro } from "./components/intro";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export interface Props {
  onMint: () => void;
  wallet?: AnchorWallet;
  balance?: number;
  totalItemsAvailable: number;
  totalItemsRedeemed: number;
  totalItemsRemaining: number;
  isSoldOut: boolean;
  isMinting: boolean;
  isActive: boolean;
  startDate: Date;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HomeClashOfCats(props: Props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#c42029",
          // paddingTop: 50,
          paddingBottom: 32,
        }}
      >
        <Header />
        <Main {...props} />
      </div>
      <div
        style={{ marginTop: 24, marginBottom: 32 }}
        className="main_container"
      >
        <Intro />
      </div>

      <div
        style={{
          backgroundColor: "#2a4760",
          paddingTop: 24,
          paddingBottom: 32,
        }}
      >
        <div className="main_container">
          <h1 style={{ textAlign: "center" }}>Meet the gangs</h1>
          <Members members={membersTheGuardians} title="The Guardians" />
          <Members members={membersThePunishers} title="The Punishers" />
        </div>
      </div>

      {/* <div
        className="main_container"
        style={{ marginTop: 24, marginBottom: 32 }}
      >
        <RoadMap />
      </div> */}
      <div
        style={{
          backgroundColor: "#c42029",
          paddingTop: 24,
          paddingBottom: 32,
        }}
      >
        <Contacts />
      </div>
      <Footer />
    </>
  );
}
