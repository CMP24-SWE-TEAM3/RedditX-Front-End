import {FaTrashAlt} from "react-icons/fa"
import { DeleteAccountButton, Container } from "./DeleteAccount.styled";

/**
 * Component that contains the part about deleting the account
 *
 * @Component
 * @returns {React.Component}
 */
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