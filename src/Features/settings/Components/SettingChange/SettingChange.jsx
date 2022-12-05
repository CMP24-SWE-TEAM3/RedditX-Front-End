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


const SettingsChange = ({header, content}) => {

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
                    <Button>Change</Button>
                </ButtonDiv>
            </RightDiv>
        </ComponentDiv>
    );


  };
  
  export default SettingsChange;