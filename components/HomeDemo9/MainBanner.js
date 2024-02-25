import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll'

const MainBanner = () => {
    return (
		<>
			<div className="new-app-main-banner-gradient-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="new-app-main-banner-gradient-content">
                                
                                <h1>Own your land today</h1>
                                <p>We have the best payment plans.</p>
                                
                            </div>
                        </div> 
                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true} initiallyVisible={true}>
                                <div className="new-app-main-banner-gradient-image">
                                    <img 
                                        src="/images/banner/mukono/land-3.jpeg" 
                                        alt="image" 
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default MainBanner;