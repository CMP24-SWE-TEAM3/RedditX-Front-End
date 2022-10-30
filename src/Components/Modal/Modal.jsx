import React, {useState} from 'react';
import {ModalStyled} from "./Modal.styled";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"
import {BsFillPersonFill} from "react-icons/bs";
import {VscEye} from "react-icons/vsc";
import {HiLockClosed} from "react-icons/hi";

/**
 * Component that  Main Links component but in responsive form.
 *
 * @Component
 * @returns {Modal}
 */

const ModalCommunity = (props) => {
        const [communityName, setCommunityName] = useState('');
        const handlerChars = (event) => {
            setCommunityName(event.target.value);
        }
        return (
            <ModalStyled show={props.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a community</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Name</h6>
                    <p>Community names including capitalization cannot be changed. <span
                        className="glyphicon"> &#xe086;</span>
                    </p>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control value={communityName} onChange={handlerChars} aria-required type={'text'}
                                          id={'community-name'} name={'community-name'}
                                          maxlength="21"/></Form.Group>
                        <span id={'charcount'}>
                        <span id="remaining-chars" className="some-class">{21 - communityName.length}</span> Characters remaining
                            </span>
                    </Form>
                    <div className={'check-form'}>
                        <h6 className={'mb-4'}>
                            Community type
                        </h6>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                   id="flexRadioDisabled"/>
                            <div className={'full-content'}>
                                <div className={'ico'}><BsFillPersonFill/></div>
                                <label className="form-check-label">Public</label>
                                <div className={'div-content'}>
                                    Anyone can view, post, and comment to this community
                                </div>

                            </div>

                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                   id="flexRadioCheckedDisabled"/>
                            <div className={'full-content'}>
                                <div className={'ico'}>
                                    <VscEye/>
                                </div>
                                <label className="form-check-label">
                                    Restricted
                                </label>
                                <div className={'div-content'}>
                                    Anyone can view this community, but only approved users can post
                                </div>
                            </div>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                   id="flexRadioCheckedDisabled"/>
                            <div className={'full-content'}>
                                <div className={'ico'}>
                                    <HiLockClosed/>
                                </div>
                                <label className="form-check-label">Private
                                </label>
                                <div className={'div-content'}>
                                    Anyone can view this community, but only approved users can post
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={'adult'}>
                            Adult content
                        </div>
                        <div className="adult-check">
                            <input className="form-check-input w-5vm" type="checkbox" value=""/>
                            <span>NSFW</span>
                            <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                18+ year old community
                            </label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className={'close-but'} onClick={props.close}>
                        Close
                    </button>
                    <button className={'create-but'} onClick={props.close}>
                        Create Community
                    </button>
                </Modal.Footer>
            </ModalStyled>
        );
    }
;

export default ModalCommunity;
