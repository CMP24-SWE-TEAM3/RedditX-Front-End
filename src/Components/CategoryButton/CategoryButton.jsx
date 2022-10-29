import React from 'react';
import {Container} from "./Category.styled";
import Dropdown from "react-bootstrap/Dropdown";
import {MdOutlineStorage} from 'react-icons/md';

const CategoryButton = () => {
    return (
        <Container title={<span> <MdOutlineStorage/></span>}>
            <Dropdown.Item href='1'>Card</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item href='2'>Classic</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item href='3'> Compact</Dropdown.Item>
        </Container>
    );
}
export default CategoryButton;