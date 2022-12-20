import { BsShield, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useIsModerator } from "Features/Subreddit/Contexts/IsModeratorProvider";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";

import {
  AboutCommunityContainer,
  Dots,
  ModTools,
  Text,
} from "./AboutCommunity.styled";
/**
 * header of Community Card
 *
 * @returns {React.Component}
 */
const AboutCommunity = () => {
  // let isMod = true;
  const { isMod } = useIsModerator();
  const { communityID } = useSubRedditID();

  return (
    <AboutCommunityContainer>
      <Text>
        <h2>About Community</h2>
      </Text>
      <ModTools>
        {isMod && (
          <Link
            className="mod-tools"
            to={communityID && `/subreddit/${communityID.substring(3)}/moderator/spam/`}
          >
            <span>
              <BsShield />
            </span>
            Mod Tools
          </Link>
        )}
        <Dots>
          <span>
            <BsThreeDots />
          </span>
        </Dots>
      </ModTools>
    </AboutCommunityContainer>
  );
};

export default AboutCommunity;
