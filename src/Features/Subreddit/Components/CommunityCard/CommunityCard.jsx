import { BsShield, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  AboutCommunity,
  AddDescription,
  Container,
  Content,
  Dots,
  ModTools,
  Text
} from "./CommunityCard.styled";

const CommunityCard = () => {

  let isMod =false;
  return (
    <Container>
      <AboutCommunity>
        <Text>
          <h2>About Community</h2>
        </Text>
        <ModTools>
          {isMod &&<Link className="mod-tools">
            <span><BsShield /></span>
            Mod Tools
          </Link>}
          <Dots>
            <span><BsThreeDots /></span>
          </Dots>
        </ModTools>
      </AboutCommunity>
      <Content>
        <AddDescription>
          <div>Add description</div>
        </AddDescription>
      </Content>
    </Container>
  );
};

export default CommunityCard;
