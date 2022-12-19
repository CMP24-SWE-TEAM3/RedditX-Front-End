import styled from "styled-components";

export const ProfileLogoStyled = styled.img`
  width: 100%;
  transform-origin: bottom center;
  display: block;
  height: 30px;
  border-radius: 999px;
  min-width: 30px;
  transform: scale(1.3);
`;
export const ProfileButtonStyled = styled.button`
  flex-basis: 38px;
  margin-right: 8px;
  border-radius: 50%;
  width: 38px;
  border: none;
  background-color: ${({ theme }) => theme.background.gray};
`;
export const CapContainer = styled.div`
  position: relative;
  height: 100%;
`;
export const Cover = styled.div`
  border-radius: 50%;
  width: 38px;
`;
export const LastContainer = styled.div`
  background: ${({ theme }) => theme.lineColor.primary};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const ProfileContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
