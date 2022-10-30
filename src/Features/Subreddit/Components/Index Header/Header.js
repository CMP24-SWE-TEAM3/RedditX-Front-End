import { useState } from "react";
import { HeaderMarginDiv, HeaderDiv, HeaderH3, HeaderP, Letters, LettersContainer } from "./HeaderStyle";


/**
 * Component that contains the header of the community leaderboard page
 *
 * @returns {React.Component}
 */
export default function Header() {
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
                <Letters href="#" onClick={clickSingleA} className= 'single'>a</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>b</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>c</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>d</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>e</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>f</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>g</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>h</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>i</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>j</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>k</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>l</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>m</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>n</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>o</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>p</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>q</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>r</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>s</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>t</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>u</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>v</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>w</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>x</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>y</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>z</Letters>
                <Letters href="#" onClick={clickSingleA} className= 'single'>#</Letters>
        </LettersContainer>
      </HeaderDiv>
    </HeaderMarginDiv>
  );
}
