import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import {
  Message,
  ModeratorContainer,
  ModeratorFlair,
  User,
  ViewAllModeratorsLink,
  ViewModeratorsContainer
} from "./ModeratorWidget.styled";

/**
 * moderator widget show all moderators
 *
 * @returns {React.Component} CreatePost component
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
   *
   * @returns {React.Component} CreatePost component
   */
  const MessageMod = () => {
    return (
      <Message to="#">
        <span className="icon">
          <HiOutlineEnvelope />
        </span>
        Message the mods
      </Message>
    );
  };
  /**
   * moderator component
   * 
   * @param {object} moderator 
   * @returns {React.Component} CreatePost component
   */
  const Moderator = ({ moderator }) => {
    const hasFlair = moderator.flair;
    return (
      <ModeratorContainer>
        <Link to="">
          <User>{"r/" + moderator.userName}</User>
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
   * @returns {React.Component} CreatePost component
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
      {Moderators.map((moderator) => {
        return <Moderator moderator={moderator} />;
      })}
      <ViewAllModerators />
    </WidgetContainer>
  );
};

export default ModeratorWidget;
