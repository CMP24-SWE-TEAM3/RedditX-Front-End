import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import {DropdownContainer} from "./DropDownItem.styled";
import CustomMenu from "Components/CustomMenu/CustomMenu";
import db from "Data/db.json"

/**
 * Component that displays a dropdown item in left-hand side corner of the home page
 * @return {React.Component}
 */
const DropDownItem = () => {
    return (
        <DropdownContainer as={CustomMenu}>
            <Dropdown.ItemText as={"title"}>your communities</Dropdown.ItemText>
            {db.Communities.map(community => {
                return (
                    <Dropdown.Item key={community.id} eventKey={community.id}>{`r/${community.name}`}</Dropdown.Item>
                )
            })}
            <Dropdown.ItemText as={'title'}>FEEDS</Dropdown.ItemText>
            {db.Feeds.map(feed => {
                return (
                    <Dropdown.Item key={feed.id} eventKey={feed.id}>{feed.name}</Dropdown.Item>
                )
            })}

            <Dropdown.ItemText as={'title'}>OTHERS</Dropdown.ItemText>
            {db.OTHERS.map(other => {
                return (
                    <Dropdown.Item key={other.id} eventKey={other.id}>{other.name}</Dropdown.Item>
                )
            })}
        </DropdownContainer>
    );
};
export default DropDownItem;

