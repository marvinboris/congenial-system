import React from 'react';
import { Col, Row } from 'reactstrap';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

export default ({ sideDrawerToggleHandler, children }) => <>
    <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
    <main className="Content container-fluid">
        <Row>
            <Col xs={12} className="p-0">{children}</Col>
        </Row>
    </main>
    <Footer />
</>;