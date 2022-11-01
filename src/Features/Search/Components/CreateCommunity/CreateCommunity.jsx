import { ContainerCreateComm } from "./CreateCommunity.styled";
import BackgroundImage from "../../Assets/search-results-community-banner.png";
import logo from "../../Assets/snoo-thinking.png";

/**
 * Component that contains the CreateCommunity component.
 *
 * @Component
 * @returns {React.Component}
 */
const CreateCommunity = () => {
  return (
    <ContainerCreateComm>
      <div className="create">
        <div className="content">
          <img src={BackgroundImage} alt="" className="first" />
          <img src={logo} alt="" className="second" />
          <div className="txt">Have an idea for a new community?</div>
        </div>
        <div className="btn-create">
          <button>Create Community</button>
        </div>
      </div>
    </ContainerCreateComm>
  );
};

export default CreateCommunity;
