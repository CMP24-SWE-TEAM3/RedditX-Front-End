
// import Components
import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
import { ModalBody } from "react-bootstrap";

export const Container = styled(Modal)
  `
      height: 100%;
      overflow-y: auto;
      //position: relative;
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
        position: sticky;
        right: 0;
        top: 0;
        transition: top .3s ease;
        width: calc(100% - 160px);
        z-index: 70;
      }

      // styles of  modal content
      .modal-content {
        top: 48px;
        border-radius: 0;
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
        transition: top .3s ease;
        width: 100%;
        z-index: 70;
      }
    `
// styles of modal body element
export const ModalBodyContainer = styled(ModalBody)
  `
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      max-width: 1280px;
      padding-bottom: 32px;
      position: relative;
      width: calc(100% - 160px);
    `