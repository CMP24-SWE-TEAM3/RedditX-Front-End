// Import components
import UploadedImage from "Features/Authentication/Components/UploadedImage/UploadedImage";

// Import styled components
import { ThumbsContainer } from "../UploadedImagesContainer/UploadedImagesContainer.styled";

/**
 * Container for uploaded images
 *
 * @param {Array} files - Array of files (state)
 * @param {Function} setFiles - Function to set files (state)
 * @param {Function} open - Function to open file explorer
 * @param {Number} selectedImageId - Id of selected image (state)
 * @param {Function} setSelectedImageId - Function to set selected image id (state)
 *
 * @returns {React.Component} - UploadedImagesContainer component
 */
const UploadedImagesContainer = ({ file, setFile, open }) => {
  /**
   * Function to handle delete file
   *
   * @param {File} file - The file to be removed
   */
  const deleteFile = (file) => {
    setFile(null); // update the state
  };
  return (
    <ThumbsContainer>
      <UploadedImage
        key={file.name + file.uploadDate}
        id={file.name + file.uploadDate}
        file={file}
        deleteFile={deleteFile}
        open={open}
      />
    </ThumbsContainer>
  );
};

export default UploadedImagesContainer;
