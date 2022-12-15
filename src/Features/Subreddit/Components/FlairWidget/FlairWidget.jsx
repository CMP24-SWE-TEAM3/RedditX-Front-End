import WidgetContainer from "../WidgetContainer/WidgetContainer";
import { useRef, useState, useEffect } from "react";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import {
  FlairContainer,
  ListItem,
  SeeMoreBtn,
  StyledLink,
  UList,
} from "./FlairWidget.styled";
/**
 * Show all post flairs
 *
 * @returns {React.Component})
 */
const FlairWidget = () => {
  const [flairList, setFlairList] = useState([]);
  const [btnText, setBtnText] = useState("See more");
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState();
  const list = useRef();
  // console.log(list);

  useEffect(() => {
    setHeight(list.current.clientHeight);
    // setHeight(list.current.offsetHeight);
    // console.log(list);
  });

  const { community } = useSubReddit();

  useEffect(() => {
    community && community.flairList && setFlairList(community.flairList);
  }, [community]);

  /**
   * handler on click show more
   */
  function clickHandler() {
    setBtnText((prev) => (prev === "See more" ? "See less" : "See more"));
    setToggle((prev) => !prev);
    // console.log(height);
  }

  // const flairList = [
  //   {
  //     text: "No problem",
  //     backgroundColor: "green",
  //     color: "#fff",
  //   },
  //   {
  //     text: "fundamentals",
  //     backgroundColor: "yellow",
  //     color: "#fff",
  //   },
  //   {
  //     text: "its fine",
  //     backgroundColor: "blue",
  //     color: "#fff",
  //   },
  //   {
  //     text: "bye bye",
  //     backgroundColor: "black",
  //     color: "#fff",
  //   },
  //   {
  //     text: "search",
  //     backgroundColor: "cyan",
  //     color: "black",
  //   },
  //   {
  //     text: "good morning",
  //     backgroundColor: "white",
  //     color: "#000",
  //   },
  //   {
  //     text: "How are you",
  //     backgroundColor: "green",
  //     color: "#000",
  //   },
  //   {
  //     text: "lets talk",
  //     backgroundColor: "#cc8b00",
  //     color: "#000",
  //   },
  //   {
  //     text: "Announcement",
  //     backgroundColor: "red",
  //     color: "#fff",
  //   },
  // ];

  return (
    <WidgetContainer headerText="Filter by flair">
      <FlairContainer
        style={{
          maxHeight: !toggle ? "129px" : height > 129 ? height : "129px",
        }}
      >
        <UList ref={list}>
          {flairList.map((flair, i) => {
            return (
              <ListItem key={i}>
                <StyledLink
                  to="#"
                  style={{
                    color: flair.flairTextColor,
                    backgroundColor: flair.flairBackGround,
                  }}
                >
                  {flair.flairTextColor}
                </StyledLink>
              </ListItem>
            );
          })}
        </UList>
      </FlairContainer>
      {height > 129 && (
        <SeeMoreBtn onClick={clickHandler}>{btnText}</SeeMoreBtn>
      )}
    </WidgetContainer>
  );
};

export default FlairWidget;
