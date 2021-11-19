import React from "react";
import styled from "styled-components";
import { contacts } from "./contacts";
import twitter from "../../../assets/images/twitter.png";
import { Spacer } from "../spacer";

const Container = styled.div`
  h1 {
    text-align: center;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export function Contacts() {
  return (
    <Container>
      <h1>Team</h1>
      <Spacer />
      <TeamContainer>
        {contacts.map((contact) => {
          return <Contact contact={contact} key={contact.name} />;
        })}
      </TeamContainer>
    </Container>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .avatar {
    max-width: 200px;
    max-height: 200px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  span {
    text-align: center;
  }

  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: block;
      font-size: 24px;
      font-weight: 700;
      margin-right: 6px;
    }
  }

  .position {
    font-weight: 300;
  }
`;

function Contact({ contact }: { contact: typeof contacts[0] }) {
  return (
    <ContactContainer>
      <img className="avatar" src={contact.image} alt={contact.name} />
      <div className="name">
        <span>{contact.name}</span>
        {contact.twitter && (
          <a href={contact.twitter} target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" width={30} height={30} />
          </a>
        )}
      </div>
      <span className="position">{contact.position}</span>
    </ContactContainer>
  );
}
