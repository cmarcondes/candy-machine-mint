import React from "react";
// import { Header } from "./components/header";
import { Main } from "./components/main";
import { Contacts } from "./components/contacts";
import { Members } from "./components/members";
import { RoadMap } from "./components/roadmap";
import {
  membersTheGuardians,
  membersThePunishers,
} from "./components/members/members";
import { Spacer } from "./components/spacer";
import { Intro } from "./components/intro";

export function Home() {
  return (
    <>
      {/* <Header /> */}
      <Spacer />
      <Main />
      <Spacer />
      <Intro />
      <Spacer />
      <h2 style={{ textAlign: "center" }}>Meet the gangs</h2>
      <Members
        members={membersTheGuardians}
        title="The Guardians"
        objective="Save human life and keep them as their slaves."
      />
      <Members
        members={membersThePunishers}
        title="The Punishers"
        objective="Extinguish human life for betraying them."
      />
      <Spacer />
      <RoadMap />
      <Spacer />
      <Contacts />
      <Spacer />
    </>
  );
}
