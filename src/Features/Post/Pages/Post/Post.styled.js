// import Components
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";

export const Container = styled(Modal)`
  height: 100%;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  will-change: transform;
  contain: layout style size;
  // styles of modal dialog body
  .modal-dialog {
    box-sizing: border-box;
    height: 48px;
    left: 0;
    margin: 0 auto;
    max-width: 1280px;
    position: -webkit-sticky;
    position: relative !important;
    right: 0;
    top: 0;
    transition: top 0.3s ease;
    width: calc(100% - 160px);
    z-index: 70;
    @media (max-width: 730px) {
      max-width: 100%;
      width: 100%;
    }
  }

  // styles of  modal content
  .modal-content {
    top: 48px;
    border-radius: 0;
    background-color: ${({ theme }) => theme.canvas};
  }

  // styles of modal header
  .modal-header {
    background: #030303;
    box-sizing: border-box;
    height: 48px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    left: 0;
    margin: 0 auto;
    max-width: 1280px;
    position: sticky;
    right: 0;
    top: 0;
    transition: top 0.3s ease;
    width: 100%;
    z-index: 70;
    @media (max-width: 730px) {
      max-width: 100%;
      width: 100%;
    }
    .modal {
      @media (max-width: 730px) {
        padding: 0 !important;
      }
    }
  }
`;
// styles of modal body element
export const ModalBodyContainer = styled(ModalBody)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  //padding-bottom: 32px;
  padding: 0;
  position: relative;
  width: calc(100% - 160px);
  @media (max-width: 730px) {
    max-width: 100%;
    width: 100%;
  }
`;
export const PostContent = styled.div`
  flex: 1;
  margin: 32px 12px 32px 32px;
  max-width: 100%;
  min-height: 100vh;
  min-width: 0;
  padding-bottom: 1px;
  width: 100%;
  word-break: break-word;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 4px;
`;
export const AsidePost = styled.div`
  margin: 32px 32px 32px 0;
  padding: 0;
  right: 0;
  top: 0;
  width: 312px;
  @media (max-width: 1120px) {
    display: none;
  }
`;
export const AsidePostChild = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 0;
  width: 312px;
`;

export const DraftEditorContainer = styled.div`
  margin: 0 40px 24px 48px;
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.color.link};
`;

export const UserNameContainer = styled.div`
  margin: 24px 40px 5px 48px;
  font-size: 12px;
`;

export const CommentsContainer = styled.div`
  margin: 16px 16px 0 10px;
  padding-bottom: 16px;
  padding-right: 16px;
`;
