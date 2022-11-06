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

// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

/**
 *
 * @returns {React.Component} - ChooseCommunity component (The dropdown menu that contains the communities in the post form)
 */
const ChooseCommunity = () => {
  // State to control the dropdown menu appearance
  const [showMenu, setShowMenu] = useState(false);

  // State to control the search input value
  const [searchText, setSearchText] = useState("");
  // Fetch communities
  /*TODO: const*/ let [communityList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/subreddits/mine/subscriber?page=4&count=10&limit=50",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  communityList = [
    {
      srIcon: Image,
      communityID: "t5_imagepro",
      description: "This is a community description",
      name: "go 1",
      category: "Gaming",
    },
    {
      srIcon: Image,
      communityID: "t5_imagepro1",
      description: "This is a community description",
      name: "Gaming 2",
      category: "Gaming",
    },
    {
      srIcon: Image,
      communityID: "t5_imagepro2",
      description: "This is a community description",
      name: "Hello 3",
      category: "Gaming",
    },
  ];
  // console.log("communityList = ", communityList);
  // console.log("error = ", error);
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
              {communityList
                .filter(
                  (community) =>
                    community.name
                      .toLowerCase()
                      .search(searchText.toLowerCase()) !== -1
                )
                .map((community) => (
                  <DropdownItem key={community.communityID}>
                    <UserImage src={community.srIcon} alt={community.name} />
                    {community.name}
                  </DropdownItem>
                ))}
            </ItemsGroup>
          </Menu>
        )}
      </Dropdown>
    </Container>
  );
};

export default ChooseCommunity;
