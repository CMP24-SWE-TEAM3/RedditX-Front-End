// Import components
import PostFlag from "Features/Post/Components/PostFlag/PostFlag";

// Import styled components
import { PostFlagsWrapperContainer, Text } from "./PostFlagsWrapper.styled";

// Import icons
import { AiOutlinePlus } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendar4Event } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";

/**
 * Post Flags Wrapper component (The wrapper that contains the flags in the post form)
 *
 * @returns {React.Component} - Post Flags Wrapper component (The wrapper that contains the flags in the post form)
 */
const PostFlagsWrapper = ({
  liveChatHandler,
  eventHandler,
  ocHandler,
  spoilerHandler,
  nsfwHandler,
  flairHandler,
}) => {
  return (
    <PostFlagsWrapperContainer>
      <PostFlag disabled={true} clickHandler={liveChatHandler}>
        <FiTarget />
        <Text>Live Chat</Text>
      </PostFlag>
      <PostFlag disabled={true} clickHandler={eventHandler}>
        <BsCalendar4Event />
        <Text>Event</Text>
      </PostFlag>
      <PostFlag disabled={true} clickHandler={ocHandler}>
        <AiOutlinePlus size={22} />
        <Text>OC</Text>
      </PostFlag>
      <PostFlag disabled={true} clickHandler={spoilerHandler}>
        <AiOutlinePlus size={22} />
        <Text>Spoiler</Text>
      </PostFlag>
      <PostFlag clickHandler={nsfwHandler}>
        <AiOutlinePlus size={22} />
        <Text>NSFW</Text>
      </PostFlag>
      <PostFlag /*disabled={true}*/ clickHandler={flairHandler}>
        <IoPricetagOutline size={22} />
        <Text>Flair</Text>
        <IoIosArrowDown />
      </PostFlag>
    </PostFlagsWrapperContainer>
  );
};

export default PostFlagsWrapper;
