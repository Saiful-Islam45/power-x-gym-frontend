import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Power <span className="yellow">X</span></h4>
                    </div>
                    <div className="col-md-2">
                        <h5>Need Help?</h5>
                        <p>Help Center</p>
                        <p>Email Support</p>
                        <p>Live Chat</p>
                        <p>Gift Certificate</p>
                        <p>Send us Feedback</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Digital Resources</h5>
                        <p>Articles</p>
                        <p>E-books</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Contact with Us</h5>
                        <div className="social">
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                        <p>Forum</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Join Our Newsletter</h5>
                        <p>Get Exclusive features, and updates from the Shredder Weight Loss Academy.</p>
                    </div>
                </div>
            </div>
            <div className="row copy">
                    <p className="mx-auto"><small>&copy; 2020 Programming Hero. All Rights Reserved</small></p>
            </div>
        </div>
    );
};

export default Footer;