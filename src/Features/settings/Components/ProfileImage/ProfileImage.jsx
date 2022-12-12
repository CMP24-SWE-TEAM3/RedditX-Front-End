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

const ProfileImage = () => {
  const imgg = useRef();
  const toggleHandler = (state) => {
    console.log(state);
  };
  /////////////////////////////////
  // Use dropzone hook

  ////////////////////////////////

  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);
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
                        {!selectedImage && <img src={logo} alt="" />}
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
