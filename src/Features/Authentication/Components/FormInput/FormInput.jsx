import { FormInputLabel, Input, Group } from "./FormInput.styled";
import { BsCheckLg } from "react-icons/bs";


/**
 * FormInput component that is used in authentication modals
 * @param {string} label The label of the input field
 * @param {Array} otherProps Props to know the shape of the input field 
 * @returns {React.Component}  FormInput component used in authentication modals
 */

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      {otherProps.showIcon && (
        <Group valid={otherProps.valid}>
          <Input {...otherProps} />
          {label && (
            <>
              <FormInputLabel shrink={otherProps.value}>
                {label}
              </FormInputLabel>
            </>
          )}
          {otherProps.showIcon && (
            <span>
              <BsCheckLg size={14} />
            </span>
          )}
        </Group>
      )}
      {!otherProps.showIcon && (
        
          <>
          <Input {...otherProps} />
          {label && (
            <>
              <FormInputLabel shrink={otherProps.value}>
                {label}
              </FormInputLabel>
            </>
          )}
          {otherProps.showIcon && (
            <span>
              <BsCheckLg size={14} />
            </span>
          )}
          </>
        
      )}
    </>
  );
};

export default FormInput;
