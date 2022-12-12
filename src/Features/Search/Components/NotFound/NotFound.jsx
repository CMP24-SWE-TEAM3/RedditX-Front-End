import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import logo from "../../Assets/telescope-snoo.png";
import { ContainerNotFound } from "./NotFound.styled";
import { useContext } from "react";
/**
 * Component that contains the NotFound Page
 *
 * @Component
 * @returns {React.Component}
 */
const NotFound = () => {
  const ctx = useContext(SearchContext);
  return (
    <ContainerNotFound>
      <img src={logo} alt="No_results_image" />
      <h2>Hm... we couldn’t find any results for “{ctx.word}”</h2>
      <p>
        Double-check your spelling or try different keywords to adjust your
        search
      </p>
    </ContainerNotFound>
  );
};

export default NotFound;
