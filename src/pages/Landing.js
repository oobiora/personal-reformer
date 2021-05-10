import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed';
import {
    Link
  } from 'react-router-dom'

import { Zoom } from "react-awesome-reveal";


// Components
import NavBarComponent from '../Components/_navbar'

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = { sectiontitle: null, show: false}

    }

   

    componentDidMount() {
        const embedElement = document.getElementById('contact-typeform') // NOTE: `.target-dom-node` is the target DOM element from your website or web app
        typeformEmbed.createWidget(
            'https://form.typeform.com/to/ZJO9ALEM', // Typeform URL
            {
                container: embedElement,
                hideHeaders: true,
                hideFooter: true,
                opacity: 0,
                height: 300,
                onSubmit: function () {
                    console.log('Form successfully submitted')
                }
            }
        )
        
    }

    

    render() {
        const { show, sectiontitle } = this.state;
        return (
            

            <div className="Landing">
                
                <header id="home">
                <NavBarComponent />
                </header>

            <div className="utf-banner-area-block heading-only video-bg-live text-normal text-center solid-transparent text-light bg-fixed" style={{backgroundImage: "url(img/landing-preview.png)"}}>
                <div className="utf-box-table shadow dark">
                <div className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=3Kspz1_T-io',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:57, stopAt: 75, opacity:1, quality:'default'}"></div>
                    <div className="utf-box-cell">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="content">
                                <img id="utf-banner-logo-img" className="mb-40" src="img/logo-full-white.png" />
                                <h3>Pilates Reformer Workout<br /> Tailored <br /><span>Just To You</span></h3>
                                <br />
                                <Link to='/quiz' id="landing-cta-button" className="btn btn-theme effect btn-md">Customize your workout</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

                <div className="utf-steps-area bg-theme-green text-center default-padding bottom-less mb-60">
                <div className="container">
                    <div className="row">
                    <div className="utf-site-heading text-center">
                        <div className="col-md-8 col-md-offset-2">
                        <h2 style={{color:"#fff"}}>How it <span>Works</span></h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="utf-steps-items">
                        <div className="col-md-4 col-sm-6 equal-height">
                        <Zoom triggerOnce delay={300}>
                            <div id="landing-step-1-img" className="item mb-20">
                                <img src="img/step1.png" />
                            </div>
                        </Zoom>
                        <h4 className="steps-steps-h4">Step 1</h4>
                        <p className="steps-steps-p">Take the short quiz</p>
                        </div>
                        <div className="col-md-4 col-sm-6 equal-height">
                        <Zoom triggerOnce delay={600}>
                            <div id="landing-step-2-img" className="landing-step-2-img item mb-20">
                                <img src="img/step2.png" />
                            </div>
                        </Zoom>
                        <h4 className="steps-steps-h4">Step 2</h4>
                        <p className="steps-steps-p">Wait a few seconds</p>
                        </div>
                        <div className="col-md-4 col-sm-6 equal-height">
                        <Zoom triggerOnce delay={900}>
                            <div id="landing-step-3-img" className="item mb-20">
                                <img src="img/step3.png" />
                            </div>
                        </Zoom>
                        <h4 className="steps-steps-h4">Step 3</h4>
                        <p className="steps-steps-p">Enjoy your workout</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="utf-contact-area text-center">
                <div className="container">
                    <div className="row">
                    <div className="utf-site-heading text-center">
                        <div className="col-md-8 col-md-offset-2">
                            <h2>Join the <span>mailing list</span></h2>
                            <div id="contact-typeform"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <footer className="text-center bg-theme-green text-light">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 copyright text-left">
                        <p>Copyright © 2020 All Rights Reserved.</p>
                    </div>
                    <div className="col-md-4 utf-footer-social text-right">
                        <ul><li className="facebook"><a href="https://www.facebook.com/lighterliving" target="_blank"><i className="fab fa-facebook-f"></i></a></li></ul>
                    </div>
                    </div>
                </div>
                </footer>
                </div>
        );
    }
}



export default Landing;
