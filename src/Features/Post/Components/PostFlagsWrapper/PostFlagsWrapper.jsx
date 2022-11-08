// Import styled components
import {
  PostFlagsWrapperContainer,
  Text,
  StyledPostFlag,
  NSFWButton,
  SpoilerButton,
} from "./PostFlagsWrapper.styled";

// Import icons
import { AiOutlinePlus } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendar4Event } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

// Import contexts
import { useCreatePostFlags } from "Features/Post/Contexts/createPostFlags";
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
  const { createPostFlags, setCreatePostFlags } = useCreatePostFlags();

  return (
    <PostFlagsWrapperContainer>
      <SpoilerButton
        disabled={true}
        // onClick={() =>
        //   setCreatePostFlags({
        //     ...createPostFlags,
        //     liveChatHandler: !createPostFlags.liveChatHandler,
        //   })
        // }
      >
        <FiTarget />
        <Text>Live Chat</Text>
      </SpoilerButton>
      <StyledPostFlag
        disabled={true}
        // onClick={() =>
        //   setCreatePostFlags({
        //     ...createPostFlags,
        //     Event: !createPostFlags.Event,
        //   })
        // }
      >
        <BsCalendar4Event />
        <Text>Event</Text>
      </StyledPostFlag>
      <StyledPostFlag
        disabled={true}
        // onClick={() =>
        //   setCreatePostFlags({
        //     ...createPostFlags,
        //     OC: !createPostFlags.OC,
        //   })
        // }
      >
        <AiOutlinePlus size={22} />
        <Text>OC</Text>
      </StyledPostFlag>
      <SpoilerButton
        selected={createPostFlags.spoiler}
        // disabled={true}
        onClick={() =>
          setCreatePostFlags({
            ...createPostFlags,
            spoiler: !createPostFlags.spoiler,
          })
        }
      >
        {!createPostFlags.spoiler && <AiOutlinePlus size={22} />}
        {createPostFlags.spoiler && <IoMdCheckmark size={25} />}
        <Text>Spoiler</Text>
      </SpoilerButton>
      <NSFWButton
        selected={createPostFlags.nsfw}
        onClick={() =>
          setCreatePostFlags({
            ...createPostFlags,
            nsfw: !createPostFlags.nsfw,
          })
        }
      >
        {!createPostFlags.nsfw && <AiOutlinePlus size={22} />}
        {createPostFlags.nsfw && <IoMdCheckmark size={25} />}
        <Text>NSFW</Text>
      </NSFWButton>
      <StyledPostFlag /*disabled={true}*/ onClick={flairHandler}>
        <IoPricetagOutline size={22} />
        <Text>Flair</Text>
        <IoIosArrowDown />
      </StyledPostFlag>
    </PostFlagsWrapperContainer>
  );
};

export default PostFlagsWrapper;
