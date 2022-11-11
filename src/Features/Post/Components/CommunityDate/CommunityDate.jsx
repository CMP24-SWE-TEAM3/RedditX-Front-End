// Import bootstrap components
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// Import icons
import { FiEyeOff } from "react-icons/fi";
import { TbCake } from "react-icons/tb";

// import SaveChangesModal from "c:/Users/Lenovo/Downloads/Front-End-main/Front-End-main/src/Features/Subreddit/Components/SaveChangesModal/SaveChangesModal";
import {
  BirthDay,
  Private,
  Description,
  Title,
  CommunityImage,
  CommunityName,
} from "./CommunityDate.styled";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";

/**
 *
 * @returns {React.Component} CreatePost component
 */
const CommunityDate = () => {
  // Context for selected submit destination
  const { submitDestination, setSubmitDestination } = useSubmitDestination();

  return (
    <>
      <Title>
        <CommunityImage
          src={
            "data:image/png;base64,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"
          }
          alt="community"
        />
        {submitDestination && (
          <CommunityName>r/{submitDestination.name}</CommunityName>
        )}
      </Title>
      {submitDestination && (
        <Description> {submitDestination.description}</Description>
      )}
      <OverlayTrigger
        placement={"bottom"}
        overlay={<Tooltip>16 days ago</Tooltip>}
        delay="200"
      >
        <BirthDay>
          <div className="cake-day">
            <span className="icon">
              <TbCake />
            </span>

            <span className="text">Created Oct 17, 2022</span>
          </div>
        </BirthDay>
      </OverlayTrigger>

      <Private>
        <div className="container">
          <OverlayTrigger
            placement={"top"}
            overlay={
              <Tooltip>
                Only approved users can view and submit to this community
              </Tooltip>
            }
            delay="200"
          >
            <span className="icon">
              <FiEyeOff />
            </span>
          </OverlayTrigger>
          <span className="text">Private</span>
        </div>
      </Private>
    </>
  );
};

export default CommunityDate;
