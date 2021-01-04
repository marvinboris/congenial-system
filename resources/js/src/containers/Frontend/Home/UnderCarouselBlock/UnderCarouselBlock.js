import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const underCarouselBlock = ({ children, title, icon, border, className }) =>
<Col sm={6} lg={3} className={'text-center text-white bg-green py-3 small px-4 m-0 ' + className + (border ? ' border-right border-black-20' : '')}>
    <h4 style={{ textShadow: '0 0 4px 2px black' }}>{title}</h4>
    <div className="text-yellow">
        <FontAwesomeIcon icon={icon} size="2x" />
    </div>
    <div className="text-300">
        {children}
    </div>
</Col>;

export default underCarouselBlock;
