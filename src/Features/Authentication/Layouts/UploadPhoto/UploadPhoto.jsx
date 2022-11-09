// Import icons
import { IoMdArrowBack } from "react-icons/io";
import { SiReddit } from "react-icons/si";

// Import components
import Button from "Features/Authentication/Components/Button/Button";

// Import styled components
import {
  RedditIcon,
  Upper,
  AuthParagraph,
  AuthHeader,
  AuthContainer,
} from "./UploadPhoto.styled";

// Import hooks
import { useState } from "react";
import DragAndDropFile from "Features/Authentication/Components/DragAndDropFile/DragAndDropFile";

const UploadPhoto = ({
  setProfilePhoto,
  profilePhoto,
  setGenderScreen,
  setInterestsScreen,
  setPhotoUploadScreen,
  submitForm,
}) => {
  return (
    <AuthContainer>
      <Upper>
        <span
          onClick={() => {
            setInterestsScreen(true);
            setPhotoUploadScreen(false);
            setGenderScreen(false);
            setProfilePhoto(null);
          }}
        >
          <IoMdArrowBack size={24} />
        </span>
        <RedditIcon>
          <span>
            <SiReddit size={60} color={"red"}></SiReddit>
          </span>
        </RedditIcon>
        <span
          onClick={() => {
            submitForm();
          }}
        >
          Skip
        </span>
      </Upper>
      <AuthHeader>Style your avatar</AuthHeader>
      <AuthParagraph>
        This is how people will see you on Reddit. <br />
        You can change it later if you’d like.
      </AuthParagraph>
      <DragAndDropFile file={profilePhoto} setFile={setProfilePhoto} />
      <Button onClick={submitForm} disabled={false} valid={true}>
        Continue
      </Button>
    </AuthContainer>
  );
};

export default UploadPhoto;
