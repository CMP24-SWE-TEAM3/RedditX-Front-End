import { Container, Members, Online } from "./OnlineMembers.styled";

const OnlineMember = () => {
  let members = 3;
  let OnlineMembers = 5;
  return (
    <Container>
      <Members>
        <div>{members}</div>
        <p>Members</p>
      </Members>

      <Online>
        <div>{OnlineMembers}</div>
        <p>Online</p>
      </Online>
      <div style={{ height: "20px", width: "0px" }}></div>
      <div style={{ height: "20px", width: "0px" }}></div>
    </Container>
  );
};

export default OnlineMember;
