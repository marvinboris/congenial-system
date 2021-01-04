import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'reactstrap';
import { faCaretDown, faCircle, faDoorOpen, faEnvelope, faHeadset, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitterSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import NavigationItems from '../NavigationItems/NavigationItems';
import CenterButton from '../../UI/Button/CenterButton/CenterButton';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

import MenuBar from '../../../assets/images/menu-bar.svg';

export default ({ isAuth, name, drawerToggleClicked, logoutHandler, role, cartItemsNumber, notifications }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return <div className="Toolbar">
        <div className="fixed-top bg-white py-2 w-100 border-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <Logo />
                </div>

                <div>
                    <NavigationItems light isAuth={isAuth} name={name} logoutHandler={logoutHandler} notifications={notifications} cartItemsNumber={cartItemsNumber} role={role} />
                </div>
            </div>
        </div>

        <div className="d-lg-none">
            <Collapse isOpen={!collapsed} navbar>
                <NavigationItems font="secondary" toggleNavbar={toggleNavbar} />
            </Collapse>
        </div>
    </div>;
}