import {
  Container,
  TitleContainer,
  InputContainer,
  RemCharacters,
  Text,
} from "Features/settings/Components/DisplayName/DisplayName.styled";
import { Header } from "Features/settings/Components/BlockPeople/BlockPeople.styled";
import { StyledTextArea } from "./AboutUser.styled";
import { useState } from "react";

const AboutUser = () => {
  const [about, setAbout] = useState("");

  function changeAboutHandler(e) {
    setAbout(e.target.value);
  }

  return (
    <Container>
      <TitleContainer>
        <Header>About (optional)</Header>
        <Text>A brief description of yourself shown on your profile.</Text>
      </TitleContainer>
      <InputContainer>
        <StyledTextArea
          placeholder="About (optional)"
          maxLength="200"
          rows="4"
          value={about}
          onChange={changeAboutHandler}
        />
        <RemCharacters text={about} len={200}>
          {200 - about.length + " Characters remaining"}
        </RemCharacters>
      </InputContainer>
    </Container>
  );
};

export default AboutUser;
