import { PageContainer, Photo, LogInContainer } from "./NewPasswordPage.styled";
import NewPasswordPageCom from "Features/Authentication/Layouts/NewPasswordPageCom/NewPasswordPageCom";

/**
 * NewPasswordPage component (The page of new password)
 * @returns {React.Component}  NewPasswordPage component (The page of new password)
 */
const NewPasswordPage = () => {
  return (
    <PageContainer>
      <Photo></Photo>

      <LogInContainer>
        <NewPasswordPageCom></NewPasswordPageCom>
      </LogInContainer>
    </PageContainer>
  );
};

export default NewPasswordPage;
