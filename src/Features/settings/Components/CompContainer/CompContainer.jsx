import { Header } from "./CompContainer.styled";

/**
 * Component that wraps other components
 *
 * @Component
 * @param {string} headerTitle - Title of Header
 * @returns {React.Component}
 */
const CompContainer = ({children, headerTitle}) => {

  return (<div>
    <Header>{headerTitle}</Header>
    {children}
  </div>);
};

export default CompContainer;
