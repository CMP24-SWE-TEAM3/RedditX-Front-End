import {
  Banner,
  HeaderContainer,
  HeaderContent,
  HeaderDetails,
  Info,
} from "./SubRedditHeader.styled";
import profile from "Features/Subreddit/Assets/index.jpeg";
import Button from "Features/Subreddit/Components/Button/Button";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useEffect, useState } from "react";

/**
 *
 * @param {Object} banner - picture or color of header banner
 * @param {Object} info - object contain info of subreddit
 * @param {boolean} isJoined - boolean if user joined subreddit
 * @param {function} onJoin - function handler on click join
 * @returns
 */
const SubRedditHeader = ({ banner, info, isJoined, onJoin }) => {

  const [name, setName] = useState('');

  /**
   * on click join handler
   *
   * @param {Event} e -event
   */
  function joinHandler(e) {
    onJoin(e);
  }


  const {community} = useSubReddit();

  useEffect(()=>{
   setName(community[0].name);
   console.log(name);
  },[community])

  // let [replay, error, loading, reload] = useFetch({
  //   axiosInstance: axios,
  //   method: "POST",
  //   url: "/api/subscribe",
  //   requestConfig: {
  //     data: {
  //       action: `${isJoined ? "sub" : "unsub"}`,
  //       sr_name: `${info.name}`,
  //     },
  //     // headers: {
  //     //   "Content-Language": "en-US",
  //     // },
  //   },
  // });
  // console.log(replay);

  // const {Community} = useSubReddit();
  // const {name} = Community[0];

  return (
    <HeaderContainer>
      <Banner banner={banner} />
      <HeaderContent>
          <HeaderDetails>
            <div className="content">
              <img src={profile} alt="" />
              <Info>
                <div className="title-info">
                  {name && <h1 className="title">{name}</h1>}
                  {name && <h2 className="subtitle">{`r/${name}`}</h2>}
                </div>
                <Button isJoined={isJoined} onJoin={joinHandler} />
              </Info>
            </div>
          </HeaderDetails>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default SubRedditHeader;
