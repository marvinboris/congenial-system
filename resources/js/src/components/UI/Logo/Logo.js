import React from 'react';

import './Logo.css';

import Image from '../../../assets/images/Logo-Hosamine-140pixels@2x.png';
import Dark from '../../../assets/images/Logo-Hosamine-140pixels@2x.png';

const logo = ({ big, dark }) => (
    <div className="Logo mb-0 text-white" >
        {dark ?
            <img src={Dark} style={big ? { height: 110 } : { height: 70 }} />
            :
            <img src={Image} style={big ? { height: 110 } : { height: 70 }} />
        }
    </div>
);

export default logo;