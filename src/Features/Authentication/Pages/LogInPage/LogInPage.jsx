import { PageContainer, Photo, LogInContainer } from "./LogInPage.styled";
import LogInPageCom from "Features/Authentication/Layouts/LogInPageCom/LogInPageCom";
import useDocumentTitle from "Hooks/useDocumentTitle";

/**
 * LogInPage component (The page of Log in)
 * @returns {React.Component}  LogInPage component (The page of Log in)
 */
const LogInPage = () => {
  // Change document title
  useDocumentTitle("reddit.com: Welcome back");

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
