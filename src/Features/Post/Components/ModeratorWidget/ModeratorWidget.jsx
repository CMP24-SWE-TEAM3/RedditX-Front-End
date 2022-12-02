import {BiEnvelope} from "react-icons/bi"
import { Link } from "react-router-dom";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import {
  Message,
  ModeratorContainer,
  ModeratorFlair,
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
  //list of moderators
  const Moderators = [
    {
      userName: "khaled",
      flair: { text: "hi", color: "white", backgroundColor: "#000" },
    },
    {
      userName: "hamza",
      flair: {
        text: "gamed",
        color: "white",
        backgroundColor: "rgb(0, 166, 165)",
      },
    },
    {
      userName: "hassan",
      flair: {},
    },
  ];

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
    const hasFlair = moderator.flair;
    return (
      <ModeratorContainer>
        <Link to="#">
          <User>{"u/" + moderator.userName}</User>
        </Link>
        {hasFlair && (
          <ModeratorFlair
            style={{
              color: moderator.flair.color,
              backgroundColor: moderator.flair.backgroundColor,
            }}
          >
            {moderator.flair.text}
          </ModeratorFlair>
        )}
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
        <ViewAllModeratorsLink to="#">
          View All Moderators
        </ViewAllModeratorsLink>
      </ViewModeratorsContainer>
    );
  };

  return (
    <WidgetContainer headerText="Moderators">
      <MessageMod />
      {Moderators.map((moderator, i) => {
        return <Moderator key={i} moderator={moderator} />;
      })}
      <ViewAllModerators />
    </WidgetContainer>
  );
};

export default ModeratorWidget;
