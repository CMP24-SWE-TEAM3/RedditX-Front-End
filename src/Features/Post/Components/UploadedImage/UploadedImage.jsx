// Import styled components
import {
  DeleteButton,
  StyledUploadedImage,
  Thumb,
  ThumbInner,
} from "./UploadedImage.styled";

// Import icons
import { ImCross } from "react-icons/im";

// Import hooks
import React, { useEffect } from "react";

const UploadedImage = ({
  file,
  deleteFile,
  isSelected,
  selectedImageId,
  id,
  handleClick,
}) => {
  useEffect(() => {
    // When image first render mark it as selected
    handleClick(id);
  }, []);
  return (
    <Thumb onClick={() => handleClick(id)}>
      <ThumbInner>
        <StyledUploadedImage
          thumbnail={isSelected && selectedImageId === id}
          selected={isSelected && selectedImageId === id}
          src={file.src}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="uploaded preview"
        />
        <DeleteButton variant="danger" onClick={() => deleteFile(file)}>
          <ImCross size={20} />
        </DeleteButton>
      </ThumbInner>
    </Thumb>
  );
};

export default UploadedImage;
