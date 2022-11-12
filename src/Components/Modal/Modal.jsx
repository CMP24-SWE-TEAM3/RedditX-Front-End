import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {AlarmInput, ModalStyled} from "./Modal.styled";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"
import {BsFillPersonFill} from "react-icons/bs";
import {VscEye} from "react-icons/vsc";
import {HiLockClosed} from "react-icons/hi";
import {CgDanger} from "react-icons/cg";

/**
 * Component that has been showed after clicking on create community button in home page .
 *
 * @params {boolean,boolean}  create community button isLoggedIn is true if  loggedIn and false otherwise
 * @returns {Modal} returns a modal that shows the user's create community form
 */

const ModalCommunity = ({show, close}) => {
        /**
         * state of the community which tracks string is shown in input filed in modal
         */
        const [communityName, setCommunityName] = useState('');

        /**
         * function that controls length of string in modal's inputForm
         * @param event
         */
        const handlerChars = (event) => {
            setCommunityName(event.target.value);
        }

        /**
         * function that handle form after submitting modal's form
         * @param event
         */
        const handleSubmit = (event) => {
            event.preventDefault();
            alert(`The Community name you entered was: ${communityName}`);
        }
    const navigate = useNavigate();
        return (
            <ModalStyled show={show} onHide={close} id={'modal'}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a community</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Name</h6>
                    <p>Community names including capitalization cannot be changed. <span> <CgDanger/></span>
                    </p>
                    <Form id={'my-form'} method={'get'} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control id={'text-input'} value={communityName} onChange={handlerChars} aria-required type={'text'}
                                          maxlength="21"/>
                        </Form.Group>

                        <AlarmInput alarmValue={21 - communityName.length}> {21 - communityName.length} Characters
                            remaining</AlarmInput>

                    </Form>
                    <div className={'check-form'}>
                        <h6 className={'mb-4'}>
                            Community type
                        </h6>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                   id="flexRadioDisabled1"/>
                            <label className={'full-content'} for={'flexRadioDisabled1'}>
                                <div className={'ico'}><BsFillPersonFill/></div>
                                <label className="form-check-label" for={'flexRadioDisabled1'}>Public</label>
                                <div className={'div-content'}>
                                    Anyone can view, post, and comment to this community
                                </div>

                            </label>

                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" aria-label={'checked'} name="flexRadioDisabled"
                                   id="flexRadioCheckedDisabled2"/>
                            <label className={'full-content'} for={'flexRadioCheckedDisabled2'}>
                                <div className={'ico'}>
                                    <VscEye/>
                                </div>
                                <label className="form-check-label" for={'flexRadioCheckedDisabled2'}>
                                    Restricted
                                </label>
                                <div className={'div-content'}>
                                    Anyone can view this community, but only approved users can post
                                </div>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                   id="flexRadioCheckedDisabled3"/>
                            <label className={'full-content'} for={'flexRadioCheckedDisabled3'}>
                                <div className={'ico'}>
                                    <HiLockClosed/>
                                </div>
                                <label className="form-check-label" for={'flexRadioCheckedDisabled3'}>Private
                                </label>
                                <div className={'div-content'}>
                                    Anyone can view this community, but only approved users can post
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className={'adult'}>
                            Adult content
                        </div>
                        <label className="adult-check">
                            <input className="form-check-input w-5vm" type="checkbox" id={'checkbox'} value=""/>
                            <span>NSFW</span>
                            <label className="form-check-label" for={'checkbox'}>
                                18+ year old community
                            </label>
                        </label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button id={'close-button'} className={'close-but'} onClick={close}>
                        Close
                    </button>
                    <button id={'create-community-form'} type={'submit'} className={'create-but'} form={'my-form'}>
                        Create Community
                    </button>
                </Modal.Footer>
            </ModalStyled>
        );
    }
;

export default ModalCommunity;
