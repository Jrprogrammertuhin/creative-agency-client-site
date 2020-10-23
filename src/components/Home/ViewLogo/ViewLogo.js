import React from 'react';
import './ViewLogo.css';

import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import uber from '../../../images/logos/uber.png'
import slack from '../../../images/logos/slack.png'

const ViewLogo = () => {
    return (
        // <div className="logo container">
        //     <img src={airbnb} alt="#"/>
        //     <img src={google} alt="#"/>
        //     <img src={netflix} alt="#"/>
        //     <img src={uber} alt="#"/>
        //     <img src={slack} alt="#"/>
        // </div>
        <div className="container logo">
            <div className="row ">
            <div className="col-md-2 ">
            <img src={airbnb} alt="#"/>
            </div>
            <div className="col-md-2 ">
            <img src={google} alt="#"/>
            </div>
            <div className="col-md-2 ">
            <img src={netflix} alt="#"/>
            </div>
            <div className="col-md-2 ">
            <img src={uber} alt="#"/>
            </div>
            <div className="col-md-2 ">
            <img src={slack} alt="#"/>
            </div>
        </div>
        </div>
    );
};

export default ViewLogo;