import {
  Containerepet,
  Containerepet2,
  ContainerFlairList,
  ContainerFlairListHeading,
  FlairPreview,
} from "./FlairList.styled";
import { AiOutlineInfoCircle } from "react-icons/ai";
import FlairListHeader from "Features/Moderator/Components/FlairListHeader/FlairListHeader";
import Flair from "Features/Moderator/Components/Flair/Flair";
import { FlaironeEdit } from "Features/Moderator/Components/FlairInfo/FlairInfo.styled";
import FlairInfo from "Features/Moderator/Components/FlairInfo/FlairInfo";
const FlairList = () => {
  return (
    <ContainerFlairList>
      <FlairListHeader />
      <div>
        <Flair
          text={"abdo"}
          color={"black"}
          background={"yellow"}
          isNew={false}
        />
        {/* <FlairInfo /> */}
        <Flair
          text={"abdo"}
          color={"black"}
          background={"yellow"}
          isNew={false}
        />
        <Flair
          text={"abdo"}
          color={"black"}
          background={"yellow"}
          isNew={false}
        />
        <Flair
          text={"abdo"}
          color={"black"}
          background={"yellow"}
          isNew={false}
        />
      </div>
    </ContainerFlairList>
  );
};

export default FlairList;
