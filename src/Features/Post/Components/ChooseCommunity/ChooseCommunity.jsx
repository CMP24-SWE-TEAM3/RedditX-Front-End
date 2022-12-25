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
import { BASE_URL } from "API/axios";
import { useParams } from "react-router-dom";
import getUser from "Features/Post/Services/getUser";

/**
 * A dropdown menu that contains the communities in the post form
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
  let [communityList, error, isLoading, fetchData] = useFetchFunction();

  const [userInfo, errorInfo, isLoadingInfo, fetchDataInfo] =
    useFetchFunction();
  const { destinationId } = useParams();
  const auth = useAuth();
  useEffect(() => {
    getCommunitiesList(fetchData, auth);
    getUser(fetchDataInfo, auth.getUserName(), auth);
    if (destinationId === "me") {
      setSubmitDestination({
        _id: auth.getUserName(),
        icon: Image,
        type: "user",
      });
      setSearchText(auth.getUserName().substring(3));
    }
  }, []);
  console.log("userInfo", userInfo);
  useEffect(() => {
    if (communityList && communityList.communities && destinationId !== "me") {
      const community = communityList.communities.find(
        (community) => community._id === destinationId
      );
      if (community) {
        setSubmitDestination({ ...community, type: "subreddit" });
        setSearchText(community._id.substring(3));
      }
    }
  }, [communityList]);
  return (
    <Container>
      <ModalCommunity
        showModal={showCommunityModal}
        setShowModal={setShowCommunityModal}
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
              crossOrigin="anonymous"
              src={`${BASE_URL}${
                submitDestination.type === "user"
                  ? "/users/files/"
                  : "/subreddits/files/"
              }${submitDestination.icon}`}
              alt={submitDestination._id}
              as={`${submitDestination.icon ? "img" : "div"}`}
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
              <DropdownItem
                onClick={() => {
                  setSubmitDestination({
                    _id: auth.getUserName(),
                    icon: `${userInfo?.about?.user?.avatar}`,
                    type: "user",
                  });
                  setSearchText(auth.getUserName().substring(3));
                  setShowMenu(false);
                }}
              >
                <UserImage
                  crossOrigin="anonymous"
                  src={`${BASE_URL}/users/files/${userInfo?.about?.user?.avatar}`}
                  alt="post guidelines"
                />
                u/{auth.getUserName().substring(3)}
              </DropdownItem>
            </ItemsGroup>

            <CreateCommunity>
              <GroupTitle>Your communities</GroupTitle>
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
                          setSubmitDestination({
                            ...community,
                            type: "subreddit",
                          });
                          setSearchText(community._id.substring(3));
                          setShowMenu(false);
                        }}
                      >
                        <UserImage
                          crossOrigin="anonymous"
                          src={`${BASE_URL}/subreddits/files/${community.icon}`}
                          alt={community._id}
                          as={community.icon ? "img" : "div"}
                        />

                        {community._id.substring(3)}
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
