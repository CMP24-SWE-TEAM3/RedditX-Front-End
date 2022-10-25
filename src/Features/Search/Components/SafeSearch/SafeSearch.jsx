import Form from "react-bootstrap/Form";
import { SafeSearchStyle, StyledSwitch } from "./SafeSearch.styled";

const SafeSearch = () => {
  return (
    <SafeSearchStyle>
      <div className="safe-search-inner">
        <label htmlFor="SafeSearch">Safe Search</label>
        <StyledSwitch>
          <Form.Check type="switch" id="custom-switch" label="" />
        </StyledSwitch>
      </div>
    </SafeSearchStyle>
  );
};

export default SafeSearch;
