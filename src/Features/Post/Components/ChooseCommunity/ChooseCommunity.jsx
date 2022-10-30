// Import hooks
import { useState } from "react";

// Import bootstrap components
import Dropdown from "react-bootstrap/Dropdown";

// Import styled components
import {
  Container,
  Choose,
  Menu,
  Input,
  GroupTitle,
  UserImage,
  ArrowIcon,
  DropdownItem,
  ItemsGroup,
  CreateButton,
  CreateCommunity,
} from "./ChooseCommunity.styled";

// Import icons
import { IoIosArrowDown } from "react-icons/io";
import { TbCircleDotted } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

// TODO: remove dummy image
// Import images
import Image from "Features/Post/Assets/Images/Post-guidelines.png";

/**
 *
 * @returns {React.Component} - ChooseCommunity component (The dropdown menu that contains the communities in the post form)
 */
const ChooseCommunity = () => {
  // State to control the dropdown menu appearance
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Dropdown show={showMenu}>
        <Choose>
          {!showMenu && <TbCircleDotted size={30} />}
          {showMenu && (
            <CiSearch size={30} onClick={() => setShowMenu(false)} />
          )}
          <Input
            type="text"
            placeholder={showMenu ? "Search communities" : "Choose a community"}
            onClick={() => setShowMenu(true)}
          />
          <ArrowIcon>
            <IoIosArrowDown onClick={() => setShowMenu(!showMenu)} />
          </ArrowIcon>
        </Choose>

        {showMenu && (
          <Menu>
            <GroupTitle>Your profile</GroupTitle>
            <ItemsGroup>
              <DropdownItem>
                <UserImage src={Image} alt="post guidelines" />
                u/Abdelrahman_Hamza
              </DropdownItem>
            </ItemsGroup>

            <CreateCommunity>
              <GroupTitle>Your communities</GroupTitle>
              {/* TODO: Add handler for create community button */}
              <CreateButton variant="light">Create New</CreateButton>
            </CreateCommunity>
            <ItemsGroup>
              <DropdownItem>
                <UserImage src={Image} alt="post guidelines" />
                r/Community
              </DropdownItem>
              <DropdownItem>
                <UserImage src={Image} alt="post guidelines" />
                r/Community
              </DropdownItem>
              <DropdownItem>
                <UserImage src={Image} alt="post guidelines" />
                r/Community
              </DropdownItem>
            </ItemsGroup>
          </Menu>
        )}
      </Dropdown>
    </Container>
  );
};

export default ChooseCommunity;
