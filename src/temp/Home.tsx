import React from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Contacts } from "./components/contacts";
import { Members } from "./components/members";
import { RoadMap } from "./components/roadmap";
import {
  membersTheGuardians,
  membersThePunishers,
} from "./components/members/members";
import { Spacer } from "./components/spacer";

export function Home() {
  return (
    <>
      {/* <Header /> */}
      <Spacer />
      <Main />
      <Spacer />
      <h2 style={{ textAlign: "center" }}>Meet the gangs</h2>
      <Members
        members={membersTheGuardians}
        title="The Guardians"
        objective="Save human life and keep them as their slaves."
        description="Captain Gudu and his brother General Pink-Kriptonite were adopted when they were days old by a rich family living in the best neighborhood in town with the best comfort they could ever ask for.
        One night, General Pink-Kryptonite escaped to explore the city but when tried to get back home the gates were locked. He felt betrayed and his anger and fury started to grow. His goal is now to extinguish the human race but that’s not what Captain Gudu wants.
        To protect humans and keep them feeding, petting and taking care of the cats, Captain Gudu now leads The Guardians gang in order to protect those who always protected them."
      />
      <Members
        members={membersThePunishers}
        title="The Punishers"
        objective="Extinguish human life for betraying them."
        description="Unlike his brother Captain Gudu, General Pink-Kryptonite has a plan to extinguish the human race for betraying him. It is about revenge, about reuniting the best gang in town to give humans what they deserve. That is how The Punishers were born.
        Will they be able to win? How does it end? Pick your side to find out!"
      />
      <Spacer />
      <RoadMap />
      <Spacer />
      <Contacts />
      <Spacer />
    </>
  );
}
