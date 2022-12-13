import {
  ContainerContent,
  ContainerContentInner,
  ContainerContentOuter,
  ContainerWalid,
  TextMain,
} from "./NotificationContent.styled";

const NotificationContent = () => {
  return (
    <ContainerContent>
      <ContainerWalid>
        <ContainerContentOuter>
          <ContainerContentInner>
            <TextMain>Earlier</TextMain>
          </ContainerContentInner>
        </ContainerContentOuter>
      </ContainerWalid>
    </ContainerContent>
  );
};

export default NotificationContent;
