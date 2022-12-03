import Form from "react-bootstrap/Form";
import { SafeSearchStyle, StyledSwitch } from "./SafeSearch.styled";
import { useContext, useEffect } from "react";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import { useState } from "react";
import SafeContext from "Features/Search/Contexts/SafeSearchContext/Safe-context";
import { useRef } from "react";
/**
 * Component that contains the Safe Search component.
 *
 * @Component
 * @returns {React.Component}
 */
const SafeSearch = () => {
  // const searchWord = "Valid";
  const ctx = useContext(SafeContext);
  // ctx.wordHandler(searchWord);
  const [SafeSearch, setSafeSearch] = useState(0);
  const safe = useRef();
  useEffect(() => {
    safe.current.click();
  }, []);
  return (
    <SafeSearchStyle>
      <div className="safe-search-inner">
        <label htmlFor="SafeSearch">Safe Search</label>
        <StyledSwitch>
          <Form.Check
            type="switch"
            id="custom-switch"
            label=""
            ref={safe}
            onClick={(e) => {
              if (SafeSearch === 0) {
                ctx.safeHandler(true);
                setSafeSearch(1);
              } else {
                ctx.safeHandler(false);
                setSafeSearch(0);
              }
            }}
          />
        </StyledSwitch>
      </div>
    </SafeSearchStyle>
  );
};

export default SafeSearch;
