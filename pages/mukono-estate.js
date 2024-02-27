import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import RelatedPost from "@/components/Blog/RelatedPost";
import FooterStyleTwo from "@/components/_App/FooterStyleTwo";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Mukono, Kalagi Estate"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Mukono, Kalagi Estate"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src="/images/banner/mukono/land-4.jpeg" alt="estate-details" />
                </div>

                <div className="article-content">
                  

                  
                  <p>
                    Located 2km from Kalagi Town in Mukono district, the estate is suitable for
                    residential and farm use. electricity and water are
                    available on site, get your self a 50ft* 100ft plot of land
                    at 15 million cash payment and 18 million in installment
                    payments, we have a flexible paymet program where a client
                    deposits only 50 percent of plot price and you are given upto
                    2 years of installment payment upon which a land title is
                    given to you together with signed transfer forms. Contact us
                    to schedule a site visit at any of the sites and you get a
                    better understanding of the estate.
                  </p>
                  
                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/banner/mukono/land-2.jpeg" alt="image" />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/banner/mukono/land-3.jpeg" alt="image" />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/banner/mukono/land-1.jpeg" alt="image" />
                      </figure>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterStyleTwo />
    </>
  );
};

export default BlogGrid;
