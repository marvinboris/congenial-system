import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Input, Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom, faEnvelope, faHandSparkles, faHome, faPhone, faSoap } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

import BannerImg from '../../../assets/images/Mask Group 1@2x.png';

import CleanAndNeat from "../../../assets/images/how-to-clean-a-sofa.jpg";
import CleaningService from "../../../assets/images/stage-l-easy-to-clean-in-a-convinient-way.jpg";

import ResidentialCleaning2 from "../../../assets/images/cleaning_spray_closeup.jpg";
import CommerialCleaning2 from "../../../assets/images/1_s5ejvyOX5SIAXaZT7P9eSQ.jpeg";
import WindowCleaning from "../../../assets/images/Window-cleaner-Melbourne-washing-glass-800x534.jpg";
import BuildingCleaning from "../../../assets/images/Building-Window-Cleaning-1.jpg";

import BestCleaningServices from "../../../assets/images/indoor-window-cleaning.jpg";

import Biodegradable1 from "../../../assets/images/Artboard_64-512.png";
import Biodegradable2 from "../../../assets/images/2029349.png";
import Biodegradable3 from "../../../assets/images/bioplastic_logo_2.png";

import Staff1 from "../../../assets/images/house_cleaning_x1.jpg";
import Staff2 from "../../../assets/images/Top-Brass-piece-.jpg";
import Staff3 from "../../../assets/images/0010d303-1600.jpg";
import Staff4 from "../../../assets/images/Housecleaning-Hacks-for-People-Who-Hate-Cleaning-.jpeg";

const Block = ({ children, icon, img, large, title }) => <Col sm={6} lg={large ? 6 : 4} className="pb-4">
    <Card className="shadow">
        <div className="rounded-top embed-responsive embed-responsive-16by9" style={{ backgroundImage: `url("${img}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />

        <CardBody className="text-center p-5">
            {large ? <div className="mx-auto embed-responsive embed-responsive-1by1 d-flex justify-content-center align-items-center rounded-circle bg-green-20" style={{ width: 100 }}>
                <FontAwesomeIcon icon={icon} fixedWidth size="4x" className="text-green" />
            </div> :
                <FontAwesomeIcon icon={icon} fixedWidth size="4x" className="text-green" />}


            <div className="py-4 text-large text-500">{title}</div>

            <div className="text-secondary">{children}</div>
        </CardBody>
    </Card>
</Col>;


const Biodegradable = ({ children, img, title }) => <Col lg={4} className="text-center">
    <img src={img} width={120} height={120} />

    <div className="py-4 text-x-large text-500">{title}</div>

    <div className="text-secondary">{children}</div>
</Col>;

const Staff = ({ children, img, title, links = {} }) => <Col lg={6} className="pb-5">
    <div className="rounded embed-responsive embed-responsive-16by9 mb-5" style={{ backgroundImage: `url("${img}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />

    <div className="px-lg-5 px-3 text-left">
        <div className="text-x-large mb-2">{title}</div>

        <div className="text-secondary mb-3">{children}</div>

        <div>
            <a className="text-decoration-none text-reset" href={links.facebook}><FontAwesomeIcon icon={faFacebook} size="lg" fixedWidth className="mr-2" /></a>
            <a className="text-decoration-none text-reset" href={links.twitter}><FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth className="mr-2" /></a>
            <a className="text-decoration-none text-reset" href={links.instagram}><FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth /></a>
        </div>
    </div>
</Col>;


class Home extends Component {
    render() {
        return (
            <Col xs={12} className="Home p-0">
                <div className="position-relative vh-100" style={{ background: `url("${BannerImg}") no-repeat center`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                    <Container className="vh-100 d-flex flex-column justify-content-center">
                        <Row className="text-white">
                            <Col xl={4} lg={6}>
                                <div className="text-500 text-large mb-4">Need a clean space?</div>

                                <div className="text-700 text-xx-large mb-4">
                                    Meet the professional
                                    commercial cleaning you
                                    deserve
                                </div>

                                <div className="text-300 text-large mb-4">
                                    Aenean eu leo quam. Pellentesque ornare sem lacinia
                                    quam venenatis vestibulum
                                </div>

                                <div className="mb-5">
                                    <Button size="lg" className="text-small text-700" color="yellow">Book appointment</Button>
                                </div>
                            </Col>

                            <Col lg={12}>
                                <div className="d-flex">
                                    <div className="pr-4 d-flex">
                                        <div className="pr-3"><FontAwesomeIcon icon={faCalendar} size="3x" /></div>

                                        <div>
                                            <div className="text-700">Monday - Saturday</div>

                                            <div>7.am – 8.pm</div>
                                        </div>
                                    </div>

                                    <div className="pr-4 d-flex">
                                        <div className="pr-3"><FontAwesomeIcon icon={faPhone} size="3x" /></div>

                                        <div>
                                            <div className="text-700">+237.671.62.62.62</div>

                                            <div>contact@hosamine.net</div>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <div className="pr-3"><FontAwesomeIcon icon={faHome} size="3x" /></div>

                                        <div>
                                            <div className="text-700">1428 Callison Lane</div>

                                            <div>Virginia, VA 22902</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="bg-white">
                    <Container>
                        <div className="py-5">
                            <Row>
                                <Block img={OnlyTheBestProducts} icon={faPumpSoap} title="Only the best products">Amet mauris, pretium proin enim nibh maecenas egestas. Lectus aliquam consectetur.</Block>
                                <Block img={ResidentialCleaning} icon={faHome} title="Residential cleaning">Aliquam faucibus habitasse duis ullamcorper vel egestas quis in nunc. Non tempus pellentesque.</Block>
                                <Block img={CarpetAndFloorCleaning} icon={faBroom} title="Carpet & floor cleaning">In nulla odio nec turpis in. Ut morbi pretium eget enim. Lacus dolor proin placerat cras.</Block>
                            </Row>
                        </div>

                        <div className="py-5 text-center">
                            <div className="text-xx-large text-500 pb-5">
                                We provide the best cleaning services for<br />
                                our customers worldwide.
                            </div>

                            <div className="text-large text-secondary pb-5">
                                With over 25 years of experience cleaning everything from houses to offices, you can trust us<br />
                                with your health and safety.
                            </div>

                            <Row>
                                <Service img={CommercialCleaning} title="Commercial cleaning">Consequat ultricies mauris proin risus sapien, orci amet felis. Nulla sit varius enim velit. Proin ullamcorper arcu, ante sit.</Service>
                                <Service img={UsingTheBestProducts} title="Using the best products">Vestibulum ante ipsum primis in faucibus orci luctus et ultricies posuere cubilia curae donec velit neque, auctor sit.</Service>
                            </Row>
                        </div>
                    </Container>

                    <div className="py-5">
                        <Row className="position-relative">
                            <Col lg={6} className="embed-responsive embed-responsive-4by3" style={{ backgroundImage: `url("${CleanAndNeat}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                            <Col lg={6} className="embed-responsive embed-responsive-4by3" />

                            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                                <Container className="h-100">
                                    <Row className="align-items-center h-100">
                                        <Col lg={6} className="ml-auto">
                                            <div className="pl-5">
                                                <div className="text-xx-large text-500 mb-4">Our staff will make your place clean & neat</div>

                                                <div className="text-secondary text-large mb-4">
                                                    Ullamcorper scelerisque congue purus qenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero.
                                            </div>

                                                <div>
                                                    <Button size="lg" color="blue">View our services</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Row>

                        <Row className="position-relative">
                            <Col lg={6} className="embed-responsive embed-responsive-4by3" />
                            <Col lg={6} className="embed-responsive embed-responsive-4by3" style={{ backgroundImage: `url("${CleaningService}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />

                            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                                <Container className="h-100">
                                    <Row className="align-items-center h-100">
                                        <Col lg={6}>
                                            <div className="pr-5">
                                                <div className="text-xx-large text-500 mb-4">Let us take care of all your cleaning service needs.</div>

                                                <div className="text-secondary text-large mb-4">
                                                    Ullamcorper scelerisque congue purus qenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero.
                                            </div>

                                                <div>
                                                    <Button size="lg" color="blue">View our services</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Row>
                    </div>

                    <Container>
                        <div className="py-5 mb-5 border-bottom border-4 border-green-20">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <div className="text-xx-large text-500">Take a look at the variety of services we offer</div>
                                </Col>

                                <Col lg={6} className="text-secondary">
                                    <p>
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla porttitor accumsan tincidunt donec.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div className="py-5">
                            <Row>
                                <Block large img={ResidentialCleaning2} icon={faHome} title="Residential cleaning">Amet mauris, pretium proin enim nibh maecenas egestas. Lectus aliquam consectetur.</Block>
                                <Block large img={CommerialCleaning2} icon={faBroom} title="Commercial cleaning">Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.</Block>
                                <Block large img={WindowCleaning} icon={faHandSparkles} title="Window cleaning">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi pellentesque in ipsum.</Block>
                                <Block large img={BuildingCleaning} icon={faSoap} title="Building cleaning">Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus, convallis a pellentesque.</Block>
                            </Row>
                        </div>
                    </Container>

                    <div className="py-5 my-5" style={{ backgroundImage: `linear-gradient(rgba(4, 157, 39, .2), rgba(4, 157, 39, .2)), url("${BestCleaningServices}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        <Container>
                            <div className="py-5 my-5 text-center text-white">
                                <div className="display-4 text-500 mb-5">
                                    Best cleaning services helping customers worldwide.
                                </div>

                                <div className="text-large">
                                    With over 25 years of experience cleaning everything from houses to offices, you can trust us with your health and safety.
                                </div>
                            </div>
                        </Container>
                    </div>

                    <Container>
                        <div className="py-5 mb-5 border-bottom border-4 border-green-20">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <div className="text-xx-large text-500">Meet our team of expert cleaning staff</div>
                                </Col>

                                <Col lg={6} className="text-secondary">
                                    <p>
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div className="py-5">
                            <Row>
                                <Staff img={Staff1} title="Ella Tucker">Consequat ultricies mauris proin risus sapien, orci amet felis. Nulla sit varius enim velit. Proin ullamcorper arcu, ante sit.</Staff>
                                <Staff img={Staff2} title="Shannon Garcia">Vestibulum ante ipsum primis in faucibus orci luctus et ultricies posuere cubilia curae donec velit neque, auctor sit.</Staff>
                                <Staff img={Staff3} title="Christopher Jenkins">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et.</Staff>
                                <Staff img={Staff4} title="Lillian Kennedy">Vestibulum ante ipsum primis in faucibus orci luctus et ultricies posuere cubilia Curae; Donec velit neque, auctor sit</Staff>
                            </Row>
                        </div>
                    </Container>

                    <div className="py-5 my-5 bg-green-10">
                        <Container>
                            <Row>
                                <Biodegradable img={Biodegradable1} title="100% biodegradable">Vestibulum ante ipsum primis in faucibus orci luctus et ultricies.</Biodegradable>
                                <Biodegradable img={Biodegradable2} title="Good for your health">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</Biodegradable>
                                <Biodegradable img={Biodegradable3} title="Only the best products">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</Biodegradable>
                            </Row>
                        </Container>
                    </div>

                    <div className="py-5 mb-5">
                        <Container>
                            <div className="display-4 mb-4 text-500">Contact us</div>

                            <div className="text-secondary text-large mb-4 pb-5 border-bottom border-green-20 border-4 w-50">
                                Curabitur non nulla sit amet nisl tempus convallis quis ac
                                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                at sem. Cras ultricies ligula sed magna dictum porta.
                            </div>

                            <div className="text-blue text-large text-500 mb-5">
                                <div className="mb-2"><FontAwesomeIcon icon={faPhone} fixedWidth className="mr-2" />+237.671.62.62.62</div>
                                <div><FontAwesomeIcon icon={faEnvelope} fixedWidth className="mr-2" />contact@hosamine.net</div>
                            </div>

                            <Form className="p-4 shadow-lg rounded bg-white row w-70">
                                <FormGroup className="col-lg-6">
                                    <Input name="name" placeholder="Name*" required />
                                </FormGroup>
                                <FormGroup className="col-lg-6">
                                    <Input type="tel" name="phone" placeholder="Phone*" required />
                                </FormGroup>
                                <FormGroup className="col-12">
                                    <Input type="textarea" name="comment" placeholder="Comment" style={{ height: 150 }} />
                                </FormGroup>
                                <FormGroup className="col-12">
                                    <Button block color="green" size="lg">Request a quote</Button>
                                </FormGroup>
                            </Form>
                        </Container>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Home;
