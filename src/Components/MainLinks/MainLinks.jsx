import { Container, Tab } from "./MainLinks.styled";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import CategoryContext from "Contexts/CategoryContext/Category-context";
const MainLinks = ({ setActive, Active }) => {
  const ctx = useContext(CategoryContext);

  return (
    <Container>
      <NavLink to={`/explore/posts/${ctx.Category}`}>
        <Tab
          onClick={() => {
            setActive("Posts");
          }}
        >
          Posts
        </Tab>
      </NavLink>
      <NavLink to={`/explore/Communities/${ctx.Category}`}>
        <Tab
          onClick={() => {
            setActive("Communities");
          }}
        >
          Communities
        </Tab>
      </NavLink>
    </Container>
  );
};

export default MainLinks;
