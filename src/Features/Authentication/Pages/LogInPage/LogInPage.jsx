import { PageContainer, Photo, LogInContainer } from "./LogInPage.styled";
import LogInPageCom from "Features/Authentication/Layouts/LogInPageCom/LogInPageCom";

/**
 * LogInPage component (The page of Log in)
 * @returns {React.Component}  LogInPage component (The page of Log in)
 */
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
