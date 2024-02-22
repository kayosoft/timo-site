import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
import AppProgressStyle4 from '@/components/Common/AppProgressStyle4'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import FunfactStyleTwo from '@/components/Common/FunfactStyleTwo'
import ClientFeedbackStyle5 from '@/components/Feedbacks/ClientFeedbackStyle5'
import IntroVideo from '@/components/Common/IntroVideo'
import TeamMemberStyle2 from '@/components/Common/TeamMemberStyle2'
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutModern = () => {
    return (
        <>
            <NavbarStyleTwo /> 

            <PageBannerStyle2 
                pageTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT US</span>
                                <p>We are a team of dedicated land specialists with a deep understanding of the unique opportunities and challenges within the land market. With years of experience in the industry, we bring expertise, integrity, and personalized service to every transaction.</p>
                                

                                <div className="features-text">
                                    <h6>Our Mission</h6>
                                    <p>Our mission is to facilitate seamless land transactions while prioritizing our clients' visions and objectives. Whether you're seeking to purchase, sell, or invest in land, we're committed to providing unparalleled guidance and support tailored to your needs.</p>
                                </div>

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img src="/images/about/land-3.jpg" alt="about" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <AppProgressStyle4 /> */}

            {/* <AppDownloadStyle1 /> */}

            {/* <FunfactStyleTwo /> */}

            {/* <ClientFeedbackStyle5 /> */}

            {/* <div className="pt-100">
                <IntroVideo />
            </div> */}

            {/* <TeamMemberStyle2 /> */}

            {/* <PartnerStyle3 /> */}

            {/* <SoftwareIntegrations /> */}

            <FooterStyleTwo />
        </>
    )
}

export default AboutModern;