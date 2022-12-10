import { BsShield, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useIsModerator } from "Features/Subreddit/Contexts/IsModeratorProvider";

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
  const {isMod} = useIsModerator();

  return (
    <AboutCommunityContainer>
      <Text>
        <h2>About Community</h2>
      </Text>
      <ModTools>
        {isMod && (
          <Link className="mod-tools" to="#">
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
