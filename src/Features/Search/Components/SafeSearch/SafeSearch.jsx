import Form from "react-bootstrap/Form";
import { SafeSearchStyle, StyledSwitch } from "./SafeSearch.styled";
// import { useContext } from "react";
// import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
/**
 * Component that contains the Safe Search component.
 *
 * @Component
 * @returns {React.Component}
 */
const SafeSearch = () => {
  // const searchWord = "Valid";
  // const ctx = useContext(SearchContext);
  // ctx.wordHandler(searchWord);
  return (
    <SafeSearchStyle>
      <div className="safe-search-inner">
        <label htmlFor="SafeSearch">Safe Search</label>
        <StyledSwitch>
          <Form.Check
            type="switch"
            id="custom-switch"
            label=""
            onClick={(e) => {
              // e.preventDefault();
              console.log(e.target.value);
            }}
          />
        </StyledSwitch>
      </div>
    </SafeSearchStyle>
  );
};

export default SafeSearch;
