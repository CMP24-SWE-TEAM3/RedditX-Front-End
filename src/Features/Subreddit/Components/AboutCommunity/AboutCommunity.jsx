import { BsShield, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

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
  let isMod = true;

  return (
    <AboutCommunityContainer>
      <Text>
        <h2>About Community</h2>
      </Text>
      <ModTools>
        {isMod && (
          <Link className="mod-tools">
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
