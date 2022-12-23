import CategoryContext from "Contexts/CategoryContext/Category-context";
import { useContext } from "react";
import { ContainerCat, ContainerCatText } from "./CategoryTitle.styled";
/**
 * Component that contains the CommunityCardItem and manage the state of the button join.
 *
 * @Component
 * @param {boolean} isPosts - boolean that indicates if the component is used in posts or Communities.
 * @returns {React.Component}
 */

const CategoryTitle = ({ isPosts }) => {
  const ctx = useContext(CategoryContext);
  return (
    <ContainerCat>
      <ContainerCatText>
        {!isPosts && <p>Communities related to {ctx.Category}</p>}
        {isPosts && <p>Posts about {ctx.Category}</p>}
      </ContainerCatText>
    </ContainerCat>
  );
};

export default CategoryTitle;
