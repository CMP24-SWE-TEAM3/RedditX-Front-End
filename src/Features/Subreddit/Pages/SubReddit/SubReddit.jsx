import SubRedditBody from "../../Components/SubRedditBody/SubRedditBody";
import SubRedditHeader from "../../Components/SubRedditHeader/SubRedditHeader";
import { InnerContainer, SubRedditContainer } from "./SubReddit.styled";
const SubReddit = () => {
  const banner = {
    color: "#33a8ff",
    url: "",
  };

  const info = {
    name: "Eln2aa4yn",
    isJoined: false,
  };

  return (
    <SubRedditContainer>
      <header>Navbar</header>
      <InnerContainer>
        <SubRedditHeader banner={banner} info={info} />
        <SubRedditBody />
      </InnerContainer>
    </SubRedditContainer>
  );
};

export default SubReddit;
