import { FormInputLabel, Input, Group } from "./FormInput.styled";
import { BsCheckLg } from "react-icons/bs";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      {otherProps.showIcon && (
        <Group valid={otherProps.valid}>
          <Input {...otherProps} />
          {label && (
            <>
              <FormInputLabel shrink={otherProps.value.length}>
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
              <FormInputLabel shrink={otherProps.value.length}>
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
