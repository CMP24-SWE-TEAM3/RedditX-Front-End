import {
  Container,
  InnerContainer,
  LastActions,
} from "./QueueHeaderPopup.styled";

import image from "Features/Moderator/Assets/Images/snoo-sunglasses.png";
const QueueHeaderPopup = () => {
  return (
    <Container>
      <InnerContainer>
        <img src={image} alt="img" />
        <h3>The queue is all yours</h3>
        <h4>
          We’ll let you know if another mod joins you in moderating the
          community.
        </h4>
        <LastActions>
          <h5>Last action taken</h5>
        </LastActions>
      </InnerContainer>
    </Container>
  );
};

export default QueueHeaderPopup;
