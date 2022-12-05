import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DeleteAccountButton = styled.button`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 19px;
  text-transform: uppercase;
  color: #ff585b;
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: initial;

  span.icon {
    margin-right: 4px;
    width: 20px;
    font-size: 17px;
    line-height: 1px;
  }
`;
