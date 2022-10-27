// Import styled
import styled from "styled-components";

export const MediaContainer = styled.div``;

export const StyledMedia = styled.img`
  width: 100%;
  /*
    Fix an issue with Firefox rendering video controls
    with 'pre-wrap' white-space
  */
  white-space: initial;
  border-radius: 8px;
  &:hover {
    border: 3px solid ${({ theme }) => theme.color.secondary};
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  text-align: center;
  display: block;
  margin: 0 auto;
`;
