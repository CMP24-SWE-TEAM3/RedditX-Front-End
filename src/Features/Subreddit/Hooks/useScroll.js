import { useState } from "react";

 const useScroll = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  window.addEventListener("scroll", handleScroll);

  return {scrollPosition};
};

export default useScroll;