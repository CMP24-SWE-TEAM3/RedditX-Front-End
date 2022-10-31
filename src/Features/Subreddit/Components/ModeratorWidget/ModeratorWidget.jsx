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

const ModeratorWidget = () => {
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

  const Moderator = (props) => {
    const hasFlair = props.moderator.flair;
    return (
      <ModeratorContainer>
        <Link to="">
          <User>{"r/" + props.moderator.userName}</User>
        </Link>
        {hasFlair && (
          <ModeratorFlair
            style={{
              color: props.moderator.flair.color,
              backgroundColor: props.moderator.flair.backgroundColor,
            }}
          >
            {props.moderator.flair.text}
          </ModeratorFlair>
        )}
      </ModeratorContainer>
    );
  };

  const ViewAllModerators = () => {
    return (
      <ViewModeratorsContainer>
        <ViewAllModeratorsLink to="#">View All Moderators</ViewAllModeratorsLink>
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
