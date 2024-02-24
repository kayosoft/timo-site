import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
import Link from 'next/link'
 
const BlogGrid = () => {
    return (
        <>
            <NavbarStyleTwo /> 

            <PageBannerStyle2 
                pageTitle="Our Estates"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Our Estates"
            />

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="">
                                        <a className="d-block">
                                            <img src="/images/banner/land-5.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a className="tag">Kiwenda Degeya Estate</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i>2km from Tarmac
                                        </li>
                                        
                                    </ul>
                                    <h3>
                                        <Link href="">
                                            <a>We have plots ready from 3.5 – 12m</a>
                                        </Link>
                                    </h3>
                                    <p>For this estate you can make an innitial deposit of 30% and pay the rest amount in installments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="">
                                        <a className="d-block">
                                            <img src="/images/banner/land-6.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a className="tag">Mukono, Kalagi Estate</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            2km from Tarmac
                                        </li>
                                        
                                    </ul>
                                    <h3>
                                        <Link href="">
                                            <a>Our plots here range from 5m to 25m</a>
                                        </Link>
                                    </h3>
                                    <p>Get your self a plot with the best payment plans possible.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="">
                                        <a className="d-block">
                                            <img src="/images/banner/land-8.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a className="tag">Gayaza Kiwenda Estate</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            1.5km from Tarmac
                                        </li>
                                       
                                    </ul>
                                    <h3>
                                        <Link href="">
                                            <a>We have plots ready from 30 – 50m</a>
                                        </Link>
                                    </h3>
                                    <p>We have a flexible payment plan, make initial deposit of 50% and pay  the remaining amount in installments.</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
   
            <FooterStyleTwo />
        </>
    )
}

export default BlogGrid;