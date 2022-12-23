import {
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./QueuesControls.styled";

// Import react bootstrap components
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

/**
 * Posts and comments Queues controls
 *
 * @param {Boolean} postsOnly is the queue posts only
 * @returns
 */
const QueuesControls = ({ postsOnly }) => {
  const [sort, setSort] = useState("Newest First");
  const [filter, setFilter] = useState("Posts And Comments");
  return (
    <Container>
      <Dropdown>
        <DropdownToggle variant="white">{sort}</DropdownToggle>

        <DropdownMenu variant="white">
          <DropdownItem
            selected={sort === "Newest First"}
            onClick={() => setSort("Newest First")}
          >
            Newest First
          </DropdownItem>
          <DropdownItem
            selected={sort === "Oldest First"}
            onClick={() => setSort("Oldest First")}
          >
            Oldest First
          </DropdownItem>
          <DropdownItem
            selected={sort === "Mod Reported First"}
            onClick={() => setSort("Mod Reported First")}
          >
            Mod Reported First
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {!postsOnly && (
        <Dropdown>
          <DropdownToggle variant="white">{filter}</DropdownToggle>

          <DropdownMenu variant="white">
            <DropdownItem
              selected={filter === "Posts And Comments"}
              onClick={() => setFilter("Posts And Comments")}
            >
              Posts And Comments
            </DropdownItem>
            <DropdownItem
              selected={filter === "Posts"}
              onClick={() => setFilter("Posts")}
            >
              Posts
            </DropdownItem>
            <DropdownItem
              selected={filter === "Comments"}
              onClick={() => setFilter("Comments")}
            >
              Comments
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </Container>
  );
};

export default QueuesControls;
