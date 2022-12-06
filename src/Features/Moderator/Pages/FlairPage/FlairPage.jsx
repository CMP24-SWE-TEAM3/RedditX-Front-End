// import { auth } from "Features/Authentication/Utils/Firebase";
import BuutonsBar from "Features/Moderator/Components/BuutonsBar/BuutonsBar";
// import Flair from "Features/Moderator/Components/Flair/Flair";
import MainInfo from "Features/Moderator/Components/MainInfo/MainInfo";
import fetchFlairs from "Features/Moderator/Services/fetchFlairs";
import useFetchFunction from "Hooks/useFetchFunction";
// import FlairList from "Features/Moderator/Layouts/FlairList/FlairList";
import { useEffect } from "react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import NewFlair from "Features/Moderator/Components/NewFlair/NewFlair";
const { ContainerFlair } = require("./FlairPage.styled");
// Fetch Posts
const FlairPage = () => {
  const auth = useAuth();
  const [flairList, error, loading, fetch] = useFetchFunction();
  console.log(flairList);
  useEffect(() => {
    // ctx.wordHandler(searchWord);
    fetchFlairs(fetch, auth, "gg");
  }, []); // Only re-run the effect if count changes
  return (
    <ContainerFlair>
      <BuutonsBar />
      <MainInfo />
      {/* <NewFlair /> */}
      {/* <FlairList /> */}
    </ContainerFlair>
  );
};

export default FlairPage;
