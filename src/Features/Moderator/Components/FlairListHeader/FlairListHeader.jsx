import {
  Containerepet,
  Containerepet2,
  ContainerFlairListHeading,
  FlairPreview,
} from "./FlairListHeader.styled";
import { AiOutlineInfoCircle } from "react-icons/ai";
const FlairListHeader = () => {
  return (
    <ContainerFlairListHeading>
      <FlairPreview>Post flair preview</FlairPreview>
      {/* <Containerepet>
        CSS class
        <span>
          <AiOutlineInfoCircle />
        </span>
      </Containerepet> */}
      {/* <Containerepet2>
        SETTINGS
        <span>
          <AiOutlineInfoCircle />
        </span>
      </Containerepet2> */}
      <Containerepet2>
        FLAIR ID
        <span>
          <AiOutlineInfoCircle />
        </span>
      </Containerepet2>
    </ContainerFlairListHeading>
  );
};

export default FlairListHeader;
