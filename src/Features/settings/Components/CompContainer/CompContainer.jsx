import { Header } from "./CompContainer.styled";

const CompContainer = ({children, headerTitle}) => {

  return (<div>
    <Header>{headerTitle}</Header>
    {children}
  </div>);
};

export default CompContainer;
