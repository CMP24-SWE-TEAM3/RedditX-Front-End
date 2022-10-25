import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 58px;
  display: flex;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  vertical-align: baseline;
  position: relative;
  background-color: white;
  @media only screen and (max-width: 961px) {
    width: 90%;
  }
`