import { useEffect } from "react";
import { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import {
  Message,
  ModeratorContainer,
  User,
  ViewAllModeratorsLink,
  ViewModeratorsContainer,
} from "./ModeratorWidget.styled";

/**
 * moderator widget show all moderators
 *
 * @returns {React.Component}
 */
const ModeratorWidget = () => {
  const [moderators, setModerators] = useState([]);
  //list of moderators
  // const moderators = [
  //   {
  //     userName: "khaled",
  //     flair: { text: "hi", color: "white", backgroundColor: "#000" },
  //   },
  //   {
  //     userName: "hamza",
  //     flair: {
  //       text: "gamed",
  //       color: "white",
  //       backgroundColor: "rgb(0, 166, 165)",
  //     },
  //   },
  //   {
  //     userName: "hassan",
  //     flair: {},
  //   },
  // ];

  const { community } = useSubReddit();
  const { communityID } = useSubRedditID();

  useEffect(() => {
    community &&
      community.moderators &&
      community.moderators.length !== 0 &&
      setModerators(community.moderators);
  }, [community]);

  /**
   * Component to send message to moderators
   *
   * @returns {React.Component}
   */
  const MessageMod = () => {
    return (
      <Message to="#">
        <span className="icon">
          <BiEnvelope />
        </span>
        Message the mods
      </Message>
    );
  };
  /**
   * moderator component
   *
   * @param {object} moderator
   * @returns {React.Component}
   */
  const Moderator = ({ moderator }) => {
    return (
      <ModeratorContainer>
        <Link to={`/user/${moderator.userID}`}>
          <User>{"u/" + moderator.userID.substring(3)}</User>
        </Link>
      </ModeratorContainer>
    );
  };

  /**
   * view all moderators link
   *
   * @returns {React.Component}
   */
  const ViewAllModerators = () => {
    return (
      <ViewModeratorsContainer>
        <ViewAllModeratorsLink to={`/subreddit/${communityID.substring(3)}/moderator/spam`}>
          View All Moderators
        </ViewAllModeratorsLink>
      </ViewModeratorsContainer>
    );
  };

  return (
    <WidgetContainer headerText="Moderators">
      <MessageMod />
      {moderators.length !== 0 &&
        moderators.map((moderator, i) => {
          return <Moderator key={i} moderator={moderator} />;
        })}
      <ViewAllModerators />
    </WidgetContainer>
  );
};

export default ModeratorWidget;
