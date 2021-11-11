import React from "react";
import { Contacts } from "./components/contacts";
import { Gangs } from "./components/gangs";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { RoadMap } from "./components/roadmap";

export function Home() {
  return (
    <>
      <Header />
      <Main />
      <Gangs />
      <RoadMap />
      <Contacts />
    </>
  );
}
