// Import icons
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

// Import components
import UploadedImage from "../UploadedImage/UploadedImage";

// Import styled components
import {
  ThumbsContainer,
  UploadIcon,
} from "../UploadedImagesContainer/UploadedImagesContainer.styled";

const UploadedImagesContainer = ({
  files,
  setFiles,
  open,
  selectedImageId,
  setSelectedImageId,
}) => {
  // State to state if the image is selected
  const [isImageSelected, setIsImageSelected] = useState(false);

  /**
   * Function to handle the click on the image
   *
   * @param {String} id The id of the selected image
   */
  const handleImageClick = (id) => {
    // Set the isSelectedImage boolean to true to show that there is an image selected
    setIsImageSelected(true);

    // Set the selected image id
    setSelectedImageId(id);
  };

  // TODO: Needs maintenance
  const deleteFile = (file) => {
    const newFiles = [...files]; // make a var for the new array
    newFiles.splice(newFiles.indexOf(file), 1); // remove the file from the array
    setFiles(() => newFiles); // update the state
  };
  return (
    <ThumbsContainer>
      {files.map((file, index) => (
        <UploadedImage
          key={file.name + file.uploadDate}
          id={file.name + file.uploadDate}
          file={file}
          deleteFile={deleteFile}
          isSelected={isImageSelected}
          selectedImageId={selectedImageId}
          handleClick={handleImageClick}
        />
      ))}
      {files.length !== 0 && (
        <UploadIcon variant="light" onClick={open}>
          <BsPlusLg />
        </UploadIcon>
      )}
    </ThumbsContainer>
  );
};

export default UploadedImagesContainer;
