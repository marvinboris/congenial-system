import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Card, FormGroup, Label, Input, Button, Spinner } from 'reactstrap';

import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';
import Title from '../../../components/UI/Titles/Title/Title';
import PresentationalContainer from '../../../components/UI/PresentationalContainer/PresentationalContainer';

import * as actions from '../../../store/actions';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    render() {
        return (
            <Col xs={12} className="Contact p-0">
                <Breadcrumb main="Contact" />
                <PresentationalContainer>
                    <Title>Nous contacter</Title>
                    <Row>
                        <Col lg={7}>
                            <Card className="p-3 mb-3">
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Label for="firstname">Prénom <span className="text-danger">*</span></Label>
                                                <Input type="text" id="firstname" name="firstname" required />
                                            </FormGroup>
                                        </Col>
                                        <Col lg={6}>
                                            <FormGroup>
                                                <Label for="lastname">Nom <span className="text-danger">*</span></Label>
                                                <Input type="text" id="lastname" name="lastname" required />
                                            </FormGroup>
                                        </Col>
                                        <Col lg={12}>
                                            <FormGroup>
                                                <Label for="email">Adresse mail <span className="text-danger">*</span></Label>
                                                <Input type="email" id="email" name="email" required />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="subject">Sujet</Label>
                                                <Input type="text" id="subject" name="subject" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="message">Message</Label>
                                                <Input type="textarea" id="message" name="message" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Button block color="danger">
                                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-1" />Envoyer le message
                                                </Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </form>
                            </Card>
                        </Col>
                        <Col lg={5}>
                            <Card className="p-3 mb-3">
                                <h6 className="text-uppercase text-info">Douala</h6>
                                <p className="text-black-50">Voici notre emplacement à Douala</p>
                            </Card>
                            <Card className="p-3 mb-3">
                                <h6 className="text-uppercase text-info">Yaoundé</h6>
                                <p className="text-black-50">Voici notre emplacement à Yaoundé</p>
                            </Card>
                            <Card className="p-3 mb-3">
                                <h6 className="text-uppercase text-info">Buea</h6>
                                <p className="text-black-50">Voici notre emplacement à Buea</p>
                            </Card>
                        </Col>
                    </Row>
                </PresentationalContainer>
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Contact);