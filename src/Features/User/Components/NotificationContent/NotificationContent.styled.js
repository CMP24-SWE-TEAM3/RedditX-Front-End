import styled from "styled-components";
export const ContainerContent = styled.div`
  max-width: 1248px;
  margin: 10px;

  padding: 20px 24px;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  /* -ms-flex-pack: center; */
  justify-content: center;
  margin: 0 auto;
`;
export const ContainerContentOuter = styled.div`
  min-width: 0;
  width: 100%;
`;
export const ContainerWalid = styled.div`
  @media (min-width: 960px) {
    max-width: 740px;
  }
  @media (min-width: 960px) {
    width: 640px;
  }
  flex: 1 1 100%;
`;
export const ContainerContentInner = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  margin: 0 auto;
  max-width: 648px;
  margin: 0 auto 16px;
`;
export const TextMain = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.color.primary};
  display: block;
  padding: 8px 16px;
`;
