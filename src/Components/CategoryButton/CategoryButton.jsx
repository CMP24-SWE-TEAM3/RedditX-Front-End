import React from 'react';
import {Container} from "./Category.styled";
import Dropdown from "react-bootstrap/Dropdown";
import {MdOutlineStorage} from 'react-icons/md';
import {BsCardText} from 'react-icons/bs';
/**
 * Component that  Main Links component but in responsive form.
 *
 * @Component
 * @returns {CategoryButton}
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