import {
  Container,
  InputContainer,
  InputName,
  RemCharacters,
  TitleContainer,
  Text,
} from "./DisplayName.styled";
import {
  Header,
} from "Features/settings/Components/BlockPeople/BlockPeople.styled";
import { useState } from "react";

const DisplayName = () => {
  const [name, setName] = useState("");

  function changeNameHandler(e) {
    setName(e.target.value);
  }

  return (
    <Container>
      <TitleContainer>
        <Header>Display name (optional)</Header>
        <Text>Set a display name. This does not change your username.</Text>
      </TitleContainer>
      <InputContainer>
        <InputName
          type="text"
          placeholder="Display name (optional)"
          maxLength="30"
          value={name}
          onChange={changeNameHandler}
        />
        <RemCharacters text={name} len={30}>
          {30 - name.length + " Characters remaining"}
        </RemCharacters>
      </InputContainer>
    </Container>
  );
};

export default DisplayName;
