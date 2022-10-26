// Import hooks
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

// Import styled components
import {
  StyledPreviewImage,
  ImageContainer,
  Image,
  LinkForm,
} from "./PreviewImage.styled";

const PreviewImage = ({ selectedImageId, files, isLoadingDone }) => {
  // State to store the selected image
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedImageId) {
      const selectedImage = files.find(
        (file) => file.name + file.uploadDate === selectedImageId
      );
      setImage(selectedImage);
      console.log("image = ", image);
    }

    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  });
  return (
    <StyledPreviewImage>
      {image && (
        <>
          <ImageContainer>
            <Image src={image.src} alt="selected" />
          </ImageContainer>
          <LinkForm>
            <Form.Group className="title-group mb-3">
              <Form.Control type="text" placeholder="Add a caption..." />
              <span>0/180</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Add a link..." />
            </Form.Group>
          </LinkForm>
        </>
      )}
    </StyledPreviewImage>
  );
};

export default PreviewImage;
