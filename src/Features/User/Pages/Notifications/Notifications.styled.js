import styled from "styled-components";
export const ContainerNotifications = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px);
  height: 100vh;
  background-color: ${({ theme }) => theme.canvas};
`;
export const ContainerNotificationsInner = styled.div`
  /* z-index: 3; */
`;
