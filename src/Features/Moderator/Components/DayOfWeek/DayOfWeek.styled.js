import styled from "styled-components";
import Table from "react-bootstrap/Table";
export const TableContainer = styled(Table)`
  thead:first-child tr {
    background-color: ${({ theme }) => theme.lineColor.primary} !important;
    font-size: 10px !important;
    font-family: Noto Sans, Arial, sans-serif !important;
    font-weight: 700 !important;
  }
  tr {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px !important;
    font-weight: 400;
    line-height: 21px;
    align-items: center;
    background-color: ${({ theme }) => theme.btnColor.text} !important;
    color: ${({ theme }) => theme.categoryColor.text};
    height: 40px !important;
    width: 100% !important;
  }
  td {
    border-right: 1px solid #d6d6d6 !important;
    width: 135px !important;
    align-items: center !important;
    background-color: ${({ theme }) => theme.btnColor.text} !important ;
    border-bottom: 1px solid #d6d6d6 !important;
    height: 100% !important;
    padding-left: 16px !important;
  }
`;
export const HeadTable = styled.tr`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  align-items: center;
  background-color: red;
  height: 40px;
  width: 100%;
`;
