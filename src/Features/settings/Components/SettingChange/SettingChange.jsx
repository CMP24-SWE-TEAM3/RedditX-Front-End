import {
    ComponentDiv,
    LeftDiv,
    RightDiv,
    HeaderDiv,
    ComponentHeader,
    ComponentContent,
    ButtonDiv,
    Button,
} from "./SettingChange.styled";

import SettingModal from "../../Components/SettingModal/SettingModal";
import { useState } from "react";




const SettingsChange = ({header, content}) => {

    const[showModal, setShowModal] = useState(false); 
    const handleShow = () => setShowModal(true);

    return (
        <ComponentDiv>
            <LeftDiv>
                <HeaderDiv>
                    <ComponentHeader>{header}</ComponentHeader>
                </HeaderDiv>
                
                <ComponentContent>{content}</ComponentContent>
            </LeftDiv>

            <RightDiv>
                <ButtonDiv>
                    <Button onClick={handleShow}>Change</Button>
                </ButtonDiv>
            </RightDiv>

            
            <SettingModal showModal={showModal} setShowModal={setShowModal}/>
        </ComponentDiv>

        
    );


  };
  
  export default SettingsChange;