
import {
    ComponentDiv,
    LeftDiv,
    HeaderDiv,
    ComponentContent,
    ComponentHeader,
} from "../SettingChange/SettingChange.styled"

import {
    SelectionSpan,
    Selection,
    Arrow,
} from "./CountrySetting.styled"

const CountryChange = ({header, content}) => {
    return(
        <ComponentDiv>
            <LeftDiv>
                <HeaderDiv>
                    <ComponentHeader>{header}</ComponentHeader>
                </HeaderDiv>
                <ComponentContent>{content}</ComponentContent>
            </LeftDiv>

            <ComponentDiv>
                <SelectionSpan>
                    <Selection/>
                    <Arrow />
                </SelectionSpan>
            </ComponentDiv>
        </ComponentDiv>
        
    );

}

export default CountryChange;