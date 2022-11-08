import { BsCheckLg } from 'react-icons/bs';
import { CheckedContainer } from './Checked.styled';

/**
 * Component to return a checked icon
 * @returns {React.Component}  Checked component
 */
 const Checked = () => {
    return (
      <CheckedContainer>
        <BsCheckLg size={18}></BsCheckLg>
      </CheckedContainer>
    );
  };
  
  export default Checked;