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

// Import utils
import getDaysCount from "Features/Post/Utils/getDaysCount";
import { BASE_URL } from "API/axios";
/**
 *
 * @returns {React.Component} CreatePost component
 */
const CommunityDate = ({ communityInfo }) => {
  return (
    <>
      <Title>
        <CommunityImage
          crossOrigin="anonymous"
          src={`${BASE_URL}/subreddits/files/${communityInfo.icon}`}
          alt="community"
          as={`${communityInfo.banner ? "img" : "div"}`}
        />
        {communityInfo && (
          <CommunityName data-testid="community-name">
            r/{communityInfo._id.substring(3)}
          </CommunityName>
        )}
      </Title>
      {communityInfo && (
        <Description data-testid="community-description">
          {communityInfo.description}
        </Description>
      )}
      <OverlayTrigger
        placement={"bottom"}
        overlay={
          <Tooltip>
            {getDaysCount(new Date(), communityInfo.createdAt) +
              ` day ${
                getDaysCount(new Date(), communityInfo.createdAt) > 1 ? "s" : ""
              } ago`}
          </Tooltip>
        }
        delay="200"
      >
        <BirthDay>
          <div className="cake-day">
            <span className="icon">
              <TbCake />
            </span>

            <span className="text">
              Created{" "}
              {new Date(communityInfo.createdAt).toDateString().substring(4)}
            </span>
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
