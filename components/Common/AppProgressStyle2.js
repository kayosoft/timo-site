import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const AppProgressStyle2 = () => {
    return (
        <>
            <div className="app-progress-area bg-black ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-animation-image">
                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInDown' duration={2}>
                                        {/* <img src="/images/app-progress/app-progress1.png" alt="app-progress" /> */}
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInRight' duration={2}>
                                        {/* <img src="/images/app-progress/app-progress2.png" alt="app-progress" /> */}
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInLeft' duration={2}>
                                        {/* <img src="/images/app-progress/app-progress3.png" alt="app-progress" /> */}
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInUp' duration={2}>
                                        <img src="/images/banner/land-1.jpeg" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img main-image">
                                    {/* <img src="/images/app-progress/progress-main.png" alt="app-progress" /> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-content text-white">
                                <h2>DON'T MISS AN OPPORTUNITY TO BECOME A LAND OWNER</h2>
                                <p>For our beloved brothers and sisters who are abroad, you too can become landowners, even from afar.</p>
                                <p>We also have a saving scheme that can help anyone who wants to acquire land. You can decide to deposit daily, weekly or monthly to get yourself a plot of land.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppProgressStyle2;