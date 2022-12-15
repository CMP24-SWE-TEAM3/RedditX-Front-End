// import { ContainerFlairMain } from "Features/Moderator/Pages/FlairPage/FlairPage.styled";
import {
  ContainerFlairMain,
  ContainerFlairMainHeader,
} from "./MainInfo.styled";
import Flair from "Features/Moderator/Components/Flair/Flair";
import { AiOutlineInfoCircle } from "react-icons/ai";
import FlairList from "Features/Moderator/Layouts/FlairList/FlairList";
import { useContext } from "react";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
/**
 * Component that contains the MainInfo Component
 *
 * @Component
 * @returns {React.Component}
 */
const MainInfo = () => {
  const ctx = useContext(FlairContext);
  return (
    <ContainerFlairMain>
      <ContainerFlairMainHeader>
        <span title="Pf">Post flair management</span>

        <span className="x">
          <AiOutlineInfoCircle />
        </span>
      </ContainerFlairMainHeader>
      <FlairList />
      {ctx.Add && (
        <Flair
          text={""}
          color={""}
          background={""}
          isNew={true}
          id={""}
          title="new"
        />
      )}
    </ContainerFlairMain>
  );
};

export default MainInfo;
