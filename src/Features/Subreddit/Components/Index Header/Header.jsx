import { useState } from "react";
import { HeaderMarginDiv, HeaderDiv, HeaderH3, Letters, LettersContainer } from "./Header.styled";


/**
 * Component that contains the header of the community leaderboard page
 * @Component
 * @returns {React.Component}
 */
 const IndexHeader = () => {
  const [items, setItems] = useState([]);
  
  
  const clickSingleA = (e) => {
      e.preventDefault();
      console.log(items);
      console.log(e.currentTarget)
      setItems(document.querySelectorAll('.active'));

      if(items) 
      {
        items[0].className = 'single';
        setItems(items.shift);
      }

      e.target.className = 'single active';
  }
  return (

    <HeaderMarginDiv>
      <HeaderDiv>
        <HeaderH3>Community Directory</HeaderH3>
        <LettersContainer>
                <><Letters to="/index-page/A">a</Letters></>
                <><Letters to="/index-page/B">b</Letters></>
                <><Letters to="/index-page/C">c</Letters></>
                <><Letters to="/index-page/D">d</Letters></>
                <><Letters to="/index-page/E">e</Letters></>
                <><Letters to="/index-page/F">f</Letters></>
                <><Letters to="/index-page/G">g</Letters></>
                <><Letters to="/index-page/H">h</Letters></>
                <><Letters to="/index-page/I">i</Letters></>
                <><Letters to="/index-page/J">j</Letters></>
                <><Letters to="/index-page/K">k</Letters></>
                <><Letters to="/index-page/L">l</Letters></>
                <><Letters to="/index-page/M">m</Letters></>
                <><Letters to="/index-page/N">n</Letters></>
                <><Letters to="/index-page/O">o</Letters></>
                <><Letters to="/index-page/P">p</Letters></>
                <><Letters to="/index-page/Q">q</Letters></>
                <><Letters to="/index-page/R">r</Letters></>
                <><Letters to="/index-page/S">s</Letters></>
                <><Letters to="/index-page/T">t</Letters></>
                <><Letters to="/index-page/U">u</Letters></>
                <><Letters to="/index-page/V">v</Letters></>
                <><Letters to="/index-page/W">w</Letters></>
                <><Letters to="/index-page/X">x</Letters></>
                <><Letters to="/index-page/Y">y</Letters></>
                <><Letters to="/index-page/Z">z</Letters></>
                <><Letters to="/index-page/Non Literal">#</Letters></>
        </LettersContainer>
      </HeaderDiv>
    </HeaderMarginDiv>
  );
}

export default IndexHeader;
