import BodyContent from "../BodyContent/BodyContent";
import SubRedditSideBar from "../SubRedditSideBar/SubRedditSideBar";
import { BodyContainer } from "./SubRedditBody.styled";

const SubRedditBody = () => {
  return ( 
    <BodyContainer>
      <BodyContent />
      <SubRedditSideBar />
    </BodyContainer>
   );
}
 
export default SubRedditBody;