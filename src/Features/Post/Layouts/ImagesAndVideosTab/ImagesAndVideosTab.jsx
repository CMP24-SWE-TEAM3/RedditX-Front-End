// Import components
import ImageAndVideoForm from "Features/Post/Components/ImageAndVideoForm/ImageAndVideoForm";

// Import styled components
import { ImagesAndVideosTabContainer } from "./ImagesAndVideosTab.styled";

/**
 * Images and videos Tab component (Layout) (The tab that contains the images and videos in create post page)
 * @param {Function} submitPost - Function to submit the post
 * @returns {React.Component} Images and videos Tab component (Images and videos Tab component (Layout) (The tab that contains the images and videos in create post page)
 */
const ImagesAndVideosTab = ({ submitPost, isLoading }) => {
  return (
    <ImagesAndVideosTabContainer>
      <ImageAndVideoForm submitPost={submitPost} isLoadingSubmit={isLoading} />
    </ImagesAndVideosTabContainer>
  );
};

export default ImagesAndVideosTab;
