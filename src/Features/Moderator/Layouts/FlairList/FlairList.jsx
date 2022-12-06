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
// import { DragHandle } from "./partials/DragHandle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NewFlair from "Features/Moderator/Components/NewFlair/NewFlair";
const FlairList = () => {
  return (
    <ContainerFlairList>
      <FlairListHeader />
      <div>
        {/* <Flair
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
        <Flair
          text={"abdo"}
          color={"black"}
          background={"yellow"}
          isNew={false}
        /> */}
        <NewFlair />
      </div>
    </ContainerFlairList>
  );
};

export default FlairList;
