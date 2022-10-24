import React from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import {BsCoin} from 'react-icons/bs';
import {CiSettings} from 'react-icons/ci';
import {DropdownButtonStyled, DropdownButtonIconStyled, DropdownCoainterStyled} from "./DropDownRight.styled";

const List_DummyData = [
    {
        id: '1',
        name: 'Coins'
    },
    {
        id: '2',
        name: 'Premium'
    },
    {
        id: '3',
        name: 'Talk'
    },
    {
        id: '4',
        name: 'Recent Communities'
    },
    {
        id: '5',
        name: 'Explore'
    },
    {
        id: '6',
        name: 'Settings'
    },
    {
        id: '7',
        name: 'Advanced on Reddit'
    },
    {
        id: '8',
        name: 'Support'
    },
    {
        id: '9',
        name: 'More'
    },
]

const DropDownRightButton = (props) => {
    return (
        <DropdownCoainterStyled>
            <DropdownButtonStyled title={<i><DropdownButtonIconStyled/> </i>}>
                <Dropdown.Item> <span className={"m-1"}><BsCoin/></span>Coins</Dropdown.Item>
                <Dropdown.Item>Talk</Dropdown.Item>
                <Dropdown.Item>Premium</Dropdown.Item>
                <Dropdown title="Recent Communities">
                    <Dropdown.Item>Icon1</Dropdown.Item>
                    <Dropdown.Item>Icon2</Dropdown.Item>
                </Dropdown>
                {/*<Dropdown.Divider/>*/}
                <Dropdown title="Explore">
                    <Dropdown title="Gaming">
                        <Dropdown.Item>MineCraft</Dropdown.Item>
                        <Dropdown.Item>Pokimane</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="Sports">
                        <Dropdown.Item>NBA</Dropdown.Item>
                        <Dropdown.Item>NFL</Dropdown.Item>
                        <Dropdown.Item>Item 4B</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="Television">
                        <Dropdown.Item>Wife Swap</Dropdown.Item>
                        <Dropdown.Item>Sister Wives</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="Celebrity">
                        <Dropdown.Item>Doja Cat</Dropdown.Item>
                        <Dropdown.Item>Anya Taylor-Joy</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="Business,Economics">
                        <Dropdown.Item>GameStop</Dropdown.Item>
                        <Dropdown.Item>Moderna</Dropdown.Item>
                    </Dropdown>
                </Dropdown>
                <Dropdown title={<span><CiSettings/> Settings</span>}>
                    <Dropdown.Item onClick={props.darkModeON}>Dark Mode</Dropdown.Item>
                </Dropdown>
                <Dropdown.Item>Advertise on Reddit</Dropdown.Item>
                <Dropdown.Item>Help Center</Dropdown.Item>
                <Dropdown title="More">
                    <Dropdown.Item>Dark Mode</Dropdown.Item>
                    <Dropdown.Item>Reddit IOS</Dropdown.Item>
                    <Dropdown.Item>Reddit Android</Dropdown.Item>
                    <Dropdown.Item>Rereddit</Dropdown.Item>
                </Dropdown>
            </DropdownButtonStyled>
        </DropdownCoainterStyled>
    );
};

export default DropDownRightButton;
