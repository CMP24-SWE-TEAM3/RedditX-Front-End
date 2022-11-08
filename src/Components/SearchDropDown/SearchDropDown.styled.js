import styled from "styled-components";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export const SearchDropDownStyled = styled(DropdownMenu)
    `
      position: fixed;
      z-index: 100;
      left: 480px;
      top: 44.5px;
      width: 440px;
      overflow: auto;
      border-top-width: 0;
      border-radius: 0 0 4px 4px;
      box-sizing: border-box;
      margin-top: -1px;
      max-height: 482px;
      right: 0;

      .dropdown-header {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: .5px;
        line-height: 12px;
        text-transform: uppercase;
        padding-bottom: 8px;
        padding-top: 16px;
      }

      .dropdown-item {
        text-decoration: none;
        :active{
          background:none;
        }

        a {
          justify-content: space-between !important;
          text-decoration: none;
          align-items: center !important;
          display: -ms-flexbox !important;
          display: flex !important;
          padding: 12px 16px;
          white-space: pre-wrap;
        }

        .arrow {
          font-size: 20px;
          font-weight: 400;
          height: 20px;
          padding-right: 9px;
          line-height: 20px;
          vertical-align: text-bottom;
          width: 20px;
          color: ${({theme}) => theme.color.secondary};
        }

        .header-name {
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          color: ${({theme}) => theme.color.primary};
        }

        .description {
          margin-left: 24px;
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          color: ${({theme}) => theme.color.muted};
          margin-bottom: 8px;
          margin-top: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
        }


        footer {
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          padding-right: 4px;
          display: inline-block;
          vertical-align: top;
          flex: none;
          margin-left: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: ${({theme}) => theme.color.muted};

          // img of link 
          img {
            border-radius: 9001px;
            border: none;
            box-sizing: border-box;
            display: inline-block;
            background-color: rgb(0 121 211);
            flex: none;
            font-size: 16px;
            height: 16px;
            line-height: 16px;
            margin-right: 4px;
            vertical-align: sub;
            width: 16px;

          }

        }

        aside {
          @media (min-width: 436px) {
            display: flex;
            flex: 0 0 96px;
            height: 72px;
          }
        }

        .link-side {
          border-radius: 4px;
          flex: 1;
          height: 100%;
          width: 100%;
          overflow: hidden;
          position: relative;
          vertical-align: bottom;

          div {
            transition: filter .5s;
            height: 72px;
            width: 96px;
            flex: 1;
            position: relative;
            box-sizing: border-box;
            border: none;
            vertical-align: middle;
            border-radius: 4px;

            span {
              font-size: 20px;
              font-weight: 400;
              height: 20px;
              line-height: 20px;
              vertical-align: middle;
              color:${({ theme }) => theme.color.secondary};
              width: 20px;
              position: absolute;
              padding-top: 3px;
              padding-left: 35px;
            }
          }
        }
      }

    `