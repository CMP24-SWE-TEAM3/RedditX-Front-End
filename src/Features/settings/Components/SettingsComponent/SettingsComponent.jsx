import {
  ContainerSettings,
  TextContainer,
  TitleContainer,
  Title,
  Text,
  SettingForm,
} from "./SettingsComponent.styled";
import Form from "react-bootstrap/Form";
// import { StyledForm } from "Features/Subreddit/Components/CommunityOptions/CommunityOptions.styled";
import { useState } from "react";

const SettingsComponent = ({ headerText, innerText, onToggle, state }) => {
  const [toggle, setToggle] = useState(state);

  function toggleHandler(e) {
    onToggle(!toggle);
    setToggle((prev) => !prev);
    console.log(e.target.value)
  }

  function Switch() {
    return (
      <SettingForm >
        <Form.Check
          type="switch"
          id="4"
          checked={toggle}
          onChange={toggleHandler}
        />
      </SettingForm>
    );
  }

  return (
    <ContainerSettings>
      <TextContainer>
        <TitleContainer>
          <label htmlFor="4">
            <Title>{headerText}</Title>
          </label>
        </TitleContainer>
        <Text>{innerText}</Text>
      </TextContainer>
      <Switch />
    </ContainerSettings>
  );
};

export default SettingsComponent;
