import styled from "styled-components";

export const ItemContainer = styled.span`
  display: block;
  text-align: left;
`;
export const SearchItem = styled.div`
  z-index: 1;

  //.bTvxAB{
  //  position: initial;
  //}
  width: 500px;
  @media (min-width: 1286px) {
    min-width: 516px;
  }
  @media (max-width:992px){
    .bTvxAB{
      width: 300px;
    }
  }
  color: ${({ theme }) => theme.color.primary};

  .wrapper {
    background-color: ${({ theme }) => theme.background.post_background};
    min-height: 40px !important;
    box-shadow: none;
    border-radius: 20px;
    font-size: 14px;
    
    :active,
    :hover,
    :focus {
      border-color: ${({ theme }) => theme.color.secondary};
      outline: none;
    }

    ::placeholder {
      font-size: 14px;
      color: ${({ theme }) => theme.lineColor.secondary};
    }

    :focus-within {
      box-shadow: 0 0 !important;
    }
  }
`;
