import { useState } from "react";
import {
  BlockUserButton,
  BlockUserContainer,
  BlockUserInput,
  Container,
  Header,
  InputLabel,
  Text,
} from "./BlockPeople.styled";

const BlockPeople = () => {
  const [name, setName] = useState("");

  function changeNameHandler(e) {
    setName(e.target.value);
  }

  return (
    <Container>
      <Header>People You’ve Blocked</Header>
      <Text>
        Blocked people can’t send you chat requests or private messages.
      </Text>
      <BlockUserContainer text={name}>
        <BlockUserInput
          type="text"
          value={name}
          required
          onChange={changeNameHandler}
        />
        <InputLabel>Block new user</InputLabel>
        <BlockUserButton text={name}>ADD</BlockUserButton>
      </BlockUserContainer>
    </Container>
  );
};

export default BlockPeople;
