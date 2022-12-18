import SettingsComponent from "../SettingsComponent/SettingsComponent";
import {
  HeaderImages,
  IconDiv,
  ImageContent,
  ImageContentInner,
  ImageExact,
  ImageLabel,
  ImageModel,
  ImageProf,
  Imagerelative,
  ImagerelativeInner,
  ImageSelected,
  ImageSpan,
  OuterOne,
  ProfileImagesContainer,
  ProfileImagesHeader,
  ProfileImagesHeaderTitle,
  ProfileImagesHeaderTitleinner,
} from "./ProfileImage.styled";
import { TbCameraPlus } from "react-icons/tb";
import logo from "./../../Assets/prof.png";
import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import uploadUserPhoto from "Features/Authentication/Services/uploadUserPhoto";
import { useEffect } from "react";
import getUser from "Features/settings/Services/getMine";

const ProfileImage = () => {
  /**
   * state to store user's uploaded profile photo
   */
  const [profilePhoto, setProfilePhoto] = useState(null);

  const imgg = useRef();
  const toggleHandler = (state) => {
    console.log(state);
  };
  /////////////////////////////////
  // Use dropzone hook

  ////////////////////////////////
  const auth = useAuth();

  const [userData, userError, userIsLoading, userFetch] = useFetchFunction();

  useEffect(() => {
    getUser(userFetch, auth);
  }, []);

  useEffect(() => {
    console.log("meeeeeeeeeeeeeeeee",userData);
  }, [userData]);

  const {meInfo} = userData;

  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const [selectedImage, setSelectedImage] = useState(null);
  const bodyFormData = new FormData();
  // if (selectedImage != null) {
  //   // console.log(selectedImage);
  //   bodyFormData.append("action", "upload");
  //   bodyFormData.append("attachment", selectedImage, selectedImage.path);
  //   uploadUserPhoto(dataFetch, bodyFormData, auth);
  //   // console.log(selectedImage);
  // }
  useEffect(() => {
    // uploadUserPhoto(dataFetch, bodyFormData, auth);
    if (selectedImage != null) {
      // console.log(selectedImage);
      bodyFormData.append("action", "upload");
      bodyFormData.append("attachment", selectedImage, selectedImage.name);
      uploadUserPhoto(dataFetch, bodyFormData, auth);
      // console.log(selectedImage);
    }
  }, [selectedImage]);
  return (
    <>
      <OuterOne>
        <div>
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
            style={{ display: "none" }}
            ref={imgg}
          />
        </div>

        <HeaderImages>IMAGES</HeaderImages>
        <ProfileImagesContainer>
          <ProfileImagesHeader>
            <ProfileImagesHeaderTitle>
              Avatar and banner image
            </ProfileImagesHeaderTitle>
            <ProfileImagesHeaderTitleinner>
              Images must be .png or .jpg format
            </ProfileImagesHeaderTitleinner>
          </ProfileImagesHeader>
        </ProfileImagesContainer>
        <ImageContent>
          <ImageContentInner>
            <ImageProf>
              <ImageLabel>
                <ImageSpan role={"presentation"}>
                  <Imagerelative>
                    <ImagerelativeInner>
                      <ImageModel></ImageModel>
                      <ImageExact selectedImage={selectedImage}>
                        {!selectedImage && <img crossOrigin="anonymous" src={ meInfo?meInfo.user?`https://api.redditswe22.tech/users/files/${meInfo.user.avatar}`:logo:logo} alt="" />}
                        {selectedImage && (
                          <ImageSelected
                            src={URL.createObjectURL(selectedImage)}
                            alt=""
                          />
                        )}
                      </ImageExact>
                    </ImagerelativeInner>
                  </Imagerelative>
                </ImageSpan>
                <IconDiv
                  onClick={() => {
                    imgg.current.click();
                  }}
                >
                  <span>
                    <TbCameraPlus />
                  </span>
                </IconDiv>
              </ImageLabel>
            </ImageProf>
          </ImageContentInner>
        </ImageContent>
      </OuterOne>
    </>
  );
};

export default ProfileImage;
