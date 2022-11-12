// Import hooks
import { useState } from "react";

// Import bootstrap components
import Dropdown from "react-bootstrap/Dropdown";
import { Alert } from "react-bootstrap";

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

// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";

/**
 *
 * @returns {React.Component} - ChooseCommunity component (The dropdown menu that contains the communities in the post form)
 */
const ChooseCommunity = () => {
  // State to control the dropdown menu appearance
  const [showMenu, setShowMenu] = useState(false);

  // State to control the search input value
  const [searchText, setSearchText] = useState("");

  // Context for selected submit destination
  const { submitDestination, setSubmitDestination } = useSubmitDestination();

  // Fetch communities
  const [communityList, error, isLoading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/communities/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  return (
    <Container>
      <Dropdown show={showMenu}>
        <Choose id="choose-community">
          {!showMenu && !submitDestination && <TbCircleDotted size={30} />}
          {showMenu && (
            <CiSearch size={30} onClick={() => setShowMenu(false)} />
          )}
          {!showMenu && submitDestination && (
            <UserImage
              src={submitDestination.srIcon}
              alt={submitDestination.name}
            />
          )}
          <Input
            type="text"
            id="search-communities"
            placeholder={showMenu ? "Search communities" : "Choose a community"}
            onClick={() => setShowMenu(true)}
            value={searchText}
            onChange={(e) => {
              setSubmitDestination(null);
              setSearchText(e.target.value);
            }}
          />
          <ArrowIcon>
            <IoIosArrowDown onClick={() => setShowMenu(!showMenu)} />
          </ArrowIcon>
        </Choose>

        {showMenu && (
          <Menu id="communities-drop-down">
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
            {error && <Alert variant="danger">{error}</Alert>}
            {!isLoading && (
              <ItemsGroup>
                {communityList
                  .filter(
                    (community) =>
                      community.name
                        .toLowerCase()
                        .search(searchText.toLowerCase()) !== -1
                  )
                  .map((community) => (
                    <DropdownItem
                      key={community.communityID}
                      onClick={() => {
                        setSubmitDestination(community);
                        setSearchText(community.name);
                        setShowMenu(false);
                      }}
                    >
                      <UserImage src={community.srIcon} alt={community.name} />
                      {community.name}
                    </DropdownItem>
                  ))}
              </ItemsGroup>
            )}
          </Menu>
        )}
      </Dropdown>
    </Container>
  );
};

export default ChooseCommunity;
