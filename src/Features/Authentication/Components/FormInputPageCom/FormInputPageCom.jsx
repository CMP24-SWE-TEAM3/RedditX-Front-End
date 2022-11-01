import { FormInputLabel, Input, Group } from "./FormInputPageCom.styled";
import { BsCheckLg } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";


/**
 * FormInput component that is used in authentication pages
 * @param {string} label The label of the input field
 * @param {Array} otherProps Props to know the shape of the input field 
 * @returns {React.Component}  FormInput component used in authentication pages
 */

const FormInputPageCom = ({ label, ...otherProps }) => {
  return (
    <>
      {otherProps.showIcon && (
        <Group valid={otherProps.valid}>
          <Input {...otherProps} />
          {label && (
            <>
              <FormInputLabel shrink={otherProps.value}>
                {label} <span><GoPrimitiveDot/></span>
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

export default FormInputPageCom;
