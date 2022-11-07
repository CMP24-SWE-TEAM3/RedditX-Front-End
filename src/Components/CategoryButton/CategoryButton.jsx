import React from 'react';
import {Container} from "./CategoryButton.styled";
import Dropdown from "react-bootstrap/Dropdown";
import {MdOutlineStorage} from 'react-icons/md';
import {BsCardText} from 'react-icons/bs';
/**
 * Component that  shows dropdown list of categories
 *
 * @returns {React.Component}
 */
const CategoryButton = () => {
    return (
        <Container title={<span> <MdOutlineStorage/></span>}>
            <Dropdown.Item href='1'><span><BsCardText/></span>Card</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item href='2'><span><BsCardText/></span>Classic</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item href='3'><span><BsCardText/></span>Compact</Dropdown.Item>
        </Container>
    );
}
export default CategoryButton;