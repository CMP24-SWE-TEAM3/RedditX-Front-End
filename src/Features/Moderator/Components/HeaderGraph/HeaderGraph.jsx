// Imports
import { Update, Header, State } from "./Header.styled";
/**
 * Component that displays header information of Traffic States
 * @returns {React.Component}
 */
const HeaderGraph = () => {
  return (
    <Header>
      <State>Traffic Stats</State>
      <Update>updating every hour</Update>
    </Header>
  );
};
export default HeaderGraph;
