import CategoryContext from "Contexts/CategoryContext/Category-context";
import { useContext } from "react";
import { ContainerCat, ContainerCatText } from "./CategoryTitle.styled";

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
