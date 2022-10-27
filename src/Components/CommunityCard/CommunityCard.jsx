import {CommunityContainer} from "./CommunityCard.styled";
import CommunityCardItem from "Components/CommunityCardItem/CommunityCardItem";

const TopCommunities = () => {
    return (
        <CommunityContainer>
            <div className={'cover'}>
                <h2>
                    <a href={"https://www.reddit.com/subreddits/leaderboard/"}>Top
                        <span>&nbsp; Gaming &nbsp;</span>
                        Communities
                    </a>
                </h2>
            </div>
            <CommunityCardItem/>
            <CommunityCardItem/>
            <CommunityCardItem/>
            <CommunityCardItem/>
            <CommunityCardItem/>
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