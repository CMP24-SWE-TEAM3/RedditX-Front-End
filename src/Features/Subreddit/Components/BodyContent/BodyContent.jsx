import CategoryBar from "../CategoryBar/CategoryBar";
import { Container } from "./BodyContent.styled";

const BodyContent = () => {
  return ( 
    <Container>
      <div className="create-post"></div>
      <CategoryBar />
    </Container>
   );
}
 
export default BodyContent;