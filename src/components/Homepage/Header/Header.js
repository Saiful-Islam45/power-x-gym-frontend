import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header-section">
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
            <div className="row">
                <div className="col-md-6 whiteText body-left">
                    <h1>The best Fitness <br /> studio in town</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="btn">Join us</button>
                </div>
                <div className="col-md-6">
                    <video width="640" height="360" poster = "../../../images/computer-icons-button-pause.jpg" controls>
                        <source src="../../../images/video.mp4" type="video/mp4"/>
                    </video>
                            
                </div>
            </div>
                </div>
    );
};

export default Header;