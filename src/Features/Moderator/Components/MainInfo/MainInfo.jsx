// import { ContainerFlairMain } from "Features/Moderator/Pages/FlairPage/FlairPage.styled";
import {
  ContainerFlairMain,
  ContainerFlairMainHeader,
} from "./MainInfo.styled";
import { AiOutlineInfoCircle } from "react-icons/ai";
import FlairList from "Features/Moderator/Layouts/FlairList/FlairList";
const MainInfo = () => {
  return (
    <ContainerFlairMain>
      <ContainerFlairMainHeader>
        Post flair management
        <span>
          <AiOutlineInfoCircle />
        </span>
      </ContainerFlairMainHeader>
      <FlairList />
    </ContainerFlairMain>
  );
};

export default MainInfo;
