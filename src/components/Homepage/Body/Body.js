import React from 'react';
import './Body.scss';

const Body = () => {
    return (
        <div class="container mt-4">
            <div class="row mid-card">
                <div className="col-md-4 card1">
                    <img src="https://i.ibb.co/qps8czz/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg" alt="Notebook" />
                    <div class="content">
                        <img src="https://i.ibb.co/fGbZPyY/Group-80.png" alt="icon1" />

                        <h2>progression</h2>
                        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur.</p>
                    </div>
                </div>

                <div className="col-md-4 card1">
                    <img src="https://i.ibb.co/qps8czz/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg" alt="Notebook" />
                    <div class="content">
                        <img src="https://i.ibb.co/Sy7M0h6/Group-81.png" alt="icon2" />
                        <h2>workout</h2>
                        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur.</p>
                    </div>
                </div>

                <div className="col-md-4 card1">
                    <img src="https://i.ibb.co/qps8czz/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg" alt="Notebook" />
                    <div class="content">
                        <img src="https://i.ibb.co/VgJ94Jc/Group-82.png" alt="icon3" />
                        <h2>nutrition</h2>
                        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur.</p>
                    </div>
                </div>
            </div>
            <div className="row about">
                <div className="col-md-6 about-img">
                    <img src="https://i.ibb.co/0D0pdYb/aboutUs.jpg" alt="about" />
                </div>
                <div className="col-md-6">
                    <h2><span className="gray">About Us </span><br /><span className='yellow'>We are here to dream</span> <br /> our team is here surve you</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <h2 className="trainHeader  mb-4">Traning <span className="yellow"> programs</span></h2>
                <div className="training mx-auto justify-content-center align-items-center">
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/FgSxMZ3/arthur-edelman-qfjuh4-OLdxw-unsplash.jpg" alt="training1" />
                    </div>
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/9WvrMmr/bruce-mars-g-Jt-Dg6-Wf-Ml-Q-unsplash.png" alt="training2" />
                    </div>
                </div>
            </div>
            <div className="row">
                <h2 className="whyHeader"><span className="yellow">Why</span> choose us</h2>
                <div className="whyUs">
                    <div className="col-md-4">
                        <div class="why-content">
                            <img src="https://i.ibb.co/Kz1bGCY/Group-87.png" alt="icon4" />
                            <h4>Free Fitness Training</h4>
                            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="why-content">
                            <img src="https://i.ibb.co/Dfs5B3W/Group-88.png" alt="icon4" />
                            <h4>tons of cardio & strength</h4>
                            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="why-content">
                            <img src="https://i.ibb.co/rFVmP4m/gift-2.png" alt="icon4" />
                            <h4>No commitment memberships</h4>
                            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;