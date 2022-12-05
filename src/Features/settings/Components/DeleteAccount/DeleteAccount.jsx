import {FaTrashAlt} from "react-icons/fa"
import { DeleteAccountButton, Container } from "./DeleteAccount.styled";

const DeleteAccount = () => {
  return ( 
    <Container>
      <DeleteAccountButton>
        <span className="icon"><FaTrashAlt/></span>
        DELETE ACCOUNT
      </DeleteAccountButton>
    </Container>
   );
}
 
export default DeleteAccount;