// Import hooks
import { useState, useEffect } from "react";

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

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";
import useFetchFunction from "Hooks/useFetchFunction";

// Import api services
import getCommunitiesList from "Features/Post/Services/getCommunitiesList";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import ModalCommunity from "Components/ModalCommunity/ModalCommunity";

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

  // State to control the community modal appearance
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  // Fetch communities
  // const [communityList, error, isLoading, reload] = useFetch({
  //   axiosInstance: axios,
  //   method: "GET",
  //   url: "/communities/",
  //   requestConfig: {
  //     headers: {
  //       "Content-Language": "en-US",
  //     },
  //   },
  // });

  // Fetch communities
  let [communityList, error, isLoading, fetchData] = useFetchFunction();
  // TODO: remove this statement
  communityList = {
    communities: [
      {
        icon: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        _id: "t5_imagepro",
        description: "This is a community description",
        name: "go 1",
        category: "Gaming",
        coverImg:
          "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        title: "Final post test",
        isJoined: true,
        stats: {
          members: 100,
          online: 100,
        },
        rankChange: 0,
      },
      {
        icon: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        _id: "t5_imagepro1",
        description: "This is a community description",
        name: "Gaming 2",
        category: "Gaming",
        coverImg:
          "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        title: "Final post test",
        isJoined: true,
        stats: {
          members: 100,
          online: 100,
        },
        rankChange: 0,
      },
      {
        icon: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        _id: "t5_imagepro2",
        description: "This is a community description",
        name: "Hello 3",
        category: "Gaming",
        coverImg:
          "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        title: "Final post test",
        isJoined: true,
        stats: {
          members: 100,
          online: 100,
        },
        rankChange: 0,
      },
    ],
  };
  const auth = useAuth();
  useEffect(() => {
    getCommunitiesList(fetchData, auth);
  }, []);
  return (
    <Container>
      <ModalCommunity
        show={showCommunityModal}
        close={() => setShowCommunityModal(false)}
      />
      <Dropdown show={showMenu}>
        <Choose id="choose-community">
          {!showMenu && !submitDestination && <TbCircleDotted size={30} />}
          {showMenu && (
            <CiSearch
              data-testid="search-icon"
              size={30}
              onClick={() => setShowMenu(false)}
            />
          )}
          {!showMenu && submitDestination && (
            <UserImage
              data-testid="user-image"
              src={submitDestination.icon}
              alt={submitDestination._id}
            />
          )}
          <Input
            type="text"
            id="search-communities"
            data-testid="search-communities"
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
          <Menu data-testid="communities-drop-down" id="communities-drop-down">
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
              <CreateButton
                variant="light"
                onClick={() => setShowCommunityModal(true)}
              >
                Create New
              </CreateButton>
            </CreateCommunity>
            {error && <Alert variant="danger">{error}</Alert>}
            {!isLoading && (
              <ItemsGroup>
                {communityList.communities &&
                  communityList.communities
                    .filter(
                      (community) =>
                        community._id
                          .toLowerCase()
                          .search(searchText.toLowerCase()) !== -1
                    )
                    .map((community) => (
                      <DropdownItem
                        key={community._id}
                        onClick={() => {
                          setSubmitDestination(community);
                          setSearchText(community._id);
                          setShowMenu(false);
                        }}
                      >
                        <UserImage src={community.icon} alt={community._id} />
                        {community._id}
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
