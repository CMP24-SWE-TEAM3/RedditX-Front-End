import {
    ComponentDiv,
    LeftDiv,
    RightDiv,
    HeaderDiv,
    ComponentHeader,
    ComponentContent,
    ButtonDiv,
    Button,
} from "./PasswordChange.styled";
import { useState } from "react";
import PasswordModal from "../PasswordModal/PasswordModal";




const PasswordChange = ({header, content}) => {

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

            
            <PasswordModal showModal={showModal} setShowModal={setShowModal}/>
        </ComponentDiv>

        
    );


  };
  
  export default PasswordChange;