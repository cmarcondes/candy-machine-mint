import React from "react";
import styled from "styled-components";
import twitter from "../../../assets/icons/twitter-white.png";
import instagram from "../../../assets/icons/instagram-white.png";
import discord from "../../../assets/icons/discord.png";

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: 24px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Img = styled.img`
  width: 32px;
  height: 30px;
`;

export function SocialMedias() {
  return (
    <Ul>
      <li>
        <a
          href="https://discord.gg/7aKzDyC7gd"
          target="_blank"
          rel="noreferrer"
        >
          <Img src={discord} alt="Discord" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/clashofcatsnft"
          target="_blank"
          rel="noreferrer"
        >
          <Img src={twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/clashofcatsnft/"
          target="_blank"
          rel="noreferrer"
        >
          <Img src={instagram} alt="Instagram" />
        </a>
      </li>
    </Ul>
  );
}
