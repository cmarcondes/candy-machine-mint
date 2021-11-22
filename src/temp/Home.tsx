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
      <Spacer />
      <Main />
      <Spacer />
      <Intro />
      <Spacer />
      <h1 style={{ textAlign: "center" }}>Meet the gangs</h1>
      <Members members={membersTheGuardians} title="The Guardians" />
      <Members members={membersThePunishers} title="The Punishers" />
      <Spacer />
      <RoadMap />
      <Spacer />
      <Contacts />
      <Spacer />
    </>
  );
}
