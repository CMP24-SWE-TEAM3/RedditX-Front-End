import {CommunityContainer} from "./CommunityCard.styled";
import CommunityCardItem from "Components/CommunityCardItem/CommunityCardItem";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import {Link} from "react-router-dom";

/**
 * Component that links each  of community card item.
 *
 * @Component
 * @returns {React.Component}
 */
const TopCommunities = () => {

    // Fetch communities
    const [communityList, error, loading, reload] = useFetch({
        axiosInstance: axios,
        method: "GET",
        //  /api/random-category/
        url: "/feedback/",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });
    return (
        <CommunityContainer>
            <div className={'cover'}>
                <div className={'filter'}>

                    <h2>
                        <Link href={"https://www.reddit.com/subreddits/leaderboard/"}>Top
                            <span>&nbsp;Gaming&nbsp;</span>
                            Communities
                        </Link>
                    </h2>
                </div>
            </div>
            {!loading && communityList.map(community => {
                return (
                    <CommunityCardItem key={community.id} community={community.name} communityId={community.id}/>
                )
            })}

            <button className={'view-all'}>View All</button>
            <div className={'row-but'}>
                <button className={'sub-but'}>New You</button>
                <button className={'sub-but'}>Gaming</button>
                <button className={'sub-but'}>News</button>
                <button className={'sub-but'}>Aww</button>
            </div>
        </CommunityContainer>
    );
};

export default TopCommunities;