import { HeaderMarginDiv, HeaderDiv, HeaderH3, HeaderP } from "./Header.styled";


/**
 * Component that contains the header of the community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
export default function Header() {
  return (

    <HeaderMarginDiv>
      <HeaderDiv>
        <HeaderH3>Today's Top Growing Communities</HeaderH3>
        <HeaderP>
          Browse Reddit's top growing communities. Find the top communities in
          your favorite category.
        </HeaderP>
      </HeaderDiv>
    </HeaderMarginDiv>
  );
}
