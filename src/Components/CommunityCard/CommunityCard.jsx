import {CommunityContainer} from "./CommunityCard.styled";
import db from 'Data/db.json';
import CommunityCardItem from "Components/CommunityCardItem/CommunityCardItem";

/**
 * Component that links each  of community card item.
 *
 * @Component
 * @returns {React.Component}
 */
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
            {db.feedback && db.feedback.map(community => {
                return (
                    <CommunityCardItem key={community.id} community={community.name}/>
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