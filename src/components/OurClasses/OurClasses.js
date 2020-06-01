import React from 'react';
import './OurClasses.scss';

const OurClasses = () => {
    return (
        <div>
            <div className=" header-section">
                <div className="header">
                    <a href="#default" class="logo">POWER <span className="yellow">X</span></a>
                    <div class="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#contact">Services</a>
                        <a href="#about">Our Classes</a>
                        <a href="#about">About Us</a>
                        <a href="#about">Blog</a>
                        <a href="#about">Pricing</a>
                        <a href="#about">Contact Us</a>
                    </div>
                </div>
                <div className="justify-content-center align-items-center ourClass">
                    <h1>Our Classes</h1>
                </div>
            </div>
             <div className="container classCard">
                <div className="row">
                    <div className="col-md-6">
                        <img src="" alt=""/>
                        <a href=""></a></div>
                </div>
            </div>
        </div>
    );
};

export default OurClasses;