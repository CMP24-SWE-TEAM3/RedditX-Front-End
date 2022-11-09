// Import styled components
import {
  DeleteButton,
  StyledUploadedImage,
  Thumb,
  ThumbInner,
} from "./UploadedImage.styled";

// Import icons
import { ImCross } from "react-icons/im";

/**
 * Uploaded image component in images & videos tab
 *
 * @param {File} file - The uploaded image
 * @param {Function} deleteFile - The function to delete the image
 * @param {Boolean} isSelected - Boolean to check if the image is selected
 * @param {Number} selectedImageId - The id of the selected image
 * @param {Number} id - The id of this image
 * @param {Function} handleClick - The function to handle the click event on image
 * @returns {React.Component} - Uploaded image component in images & videos tab
 */
const UploadedImage = ({ file, deleteFile, handleClick, open }) => {
  return (
    <Thumb
      onClick={() => {
        open();
      }}
    >
      <ThumbInner>
        <StyledUploadedImage
          thumbnail={true}
          selected={true}
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="uploaded preview"
        />
        <DeleteButton
          variant="danger"
          onClick={(e) => {
            e.stopPropagation();
            deleteFile(file);
          }}
        >
          <ImCross size={20} />
        </DeleteButton>
      </ThumbInner>
    </Thumb>
  );
};

export default UploadedImage;
