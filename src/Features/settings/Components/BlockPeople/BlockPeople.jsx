import { useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import {useAuth} from "Features/Authentication/Contexts/Authentication";
import blockUser from "../../Services/BlockUser";
import {
  BlockUserButton,
  BlockUserContainer,
  BlockUserInput,
  Container,
  Header,
  InputLabel,
  Text,
} from "./BlockPeople.styled";

/**
 * Component that contains the area for blocking users
 *
 * @Component
 * @returns {React.Component}
 */
const BlockPeople = () => {
  const auth = useAuth();
  const [res, error, loading, fetchData] = useFetchFunction();
  const [name, setName] = useState("");

  function changeNameHandler(e) {
    setName(e.target.value);
  }

  function handleBlock() {
    let dataObject = {
      userID : `t2_${name}`,
      action: true      
    }
    blockUser(fetchData, dataObject, auth);
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
        <BlockUserButton text={name} onClick={handleBlock}>ADD</BlockUserButton>
      </BlockUserContainer>
    </Container>
  );
};

export default BlockPeople;
