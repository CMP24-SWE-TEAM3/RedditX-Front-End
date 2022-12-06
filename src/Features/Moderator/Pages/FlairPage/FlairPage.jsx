import BuutonsBar from "Features/Moderator/Components/BuutonsBar/BuutonsBar";
import Flair from "Features/Moderator/Components/Flair/Flair";
import MainInfo from "Features/Moderator/Components/MainInfo/MainInfo";
import FlairList from "Features/Moderator/Layouts/FlairList/FlairList";

const { ContainerFlair } = require("./FlairPage.styled");

const FlairPage = () => {
  return (
    <ContainerFlair>
      <BuutonsBar />
      <MainInfo />

      {/* <FlairList /> */}
    </ContainerFlair>
  );
};

export default FlairPage;
