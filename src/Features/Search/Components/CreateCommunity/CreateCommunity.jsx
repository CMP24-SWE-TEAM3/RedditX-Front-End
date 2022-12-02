import { ContainerCreateComm } from "./CreateCommunity.styled";
import BackgroundImage from "../../Assets/search-results-community-banner.png";
import logo from "../../Assets/snoo-thinking.png";
import ModalCommunity from "Components/ModalCommunity/ModalCommunity";
import { useState } from "react";
/**
 * Component that contains the CreateCommunity component.
 *
 * @Component
 * @returns {React.Component}
 */
const CreateCommunity = () => {
  const [show, setShow] = useState(false);
  return (
    <ContainerCreateComm>
      <div className="create">
        <div className="content">
          <img src={BackgroundImage} alt="" className="first" />
          <img src={logo} alt="" className="second" />
          <div className="txt">Have an idea for a new community?</div>
        </div>
        <div className="btn-create">
          <button onClick={() => setShow(true)}>Create Community</button>
        </div>
      </div>
      <ModalCommunity show={show} close={() => setShow(false)} />
    </ContainerCreateComm>
  );
};

export default CreateCommunity;
