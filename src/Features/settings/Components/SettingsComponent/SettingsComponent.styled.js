import styled from "styled-components";
import { StyledForm } from "Features/Subreddit/Components/CommunityOptions/CommunityOptions.styled";


export const ContainerSettings = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 32px;
  /* width: 688px; */
  /* height: 40px; */
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  max-width: 80%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  margin-bottom: 4px;
`;

export const Text = styled.p`
font-size: 12px;
line-height: 16px;
font-weight: 400;
color: ${({ theme }) => theme.color.muted};
`; 

export const SettingForm = styled(StyledForm)`
justify-content: flex-end;
`;