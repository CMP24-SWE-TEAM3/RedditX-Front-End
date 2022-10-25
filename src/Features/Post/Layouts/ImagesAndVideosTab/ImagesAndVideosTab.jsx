// Import components
import ImageAndVideoForm from "Features/Post/Components/ImageAndVideoForm/ImageAndVideoForm";

// Import styled components
import { ImagesAndVideosTabContainer } from "./ImagesAndVideosTab.styled";

const ImagesAndVideosTab = () => {
  return (
    <ImagesAndVideosTabContainer>
      <ImageAndVideoForm />
    </ImagesAndVideosTabContainer>
  );
};

export default ImagesAndVideosTab;
