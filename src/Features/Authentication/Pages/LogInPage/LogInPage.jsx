import { PageContainer, Photo, LogInContainer } from "./LogInPage.styled";
import LogInPageCom from "Features/Authentication/Layouts/LogInPageCom/LogInPageCom";
const LogInPage = () => {
  return (
    <PageContainer>
      <Photo></Photo>

      <LogInContainer>
      <LogInPageCom></LogInPageCom>
      </LogInContainer>
    </PageContainer>
  );
};

export default LogInPage;
