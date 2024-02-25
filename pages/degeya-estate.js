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
        pageTitle="Kiwenda, Degeya"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Kiwenda, Degeya"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src="/images/banner/degeya/land-1.jpeg"
                    alt="estate-details"
                  />
                  <Link href="/degeya-estate">
                    <a className="tag">UGX 10M</a>
                  </Link>
                </div>

                <div className="article-content">
                  <p>
                    Located 4km off Hoima Road in Kiwenda town, this is the
                    Kiwenda Degeya Estate, ideal for residential and farming
                    purposes. Electricity and water are readily available
                    on-site. Secure yourself a 50ft*100ft plot of land for 10
                    million with cash payment or 12 million in installment
                    payments. We offer a flexible payment program where clients
                    deposit only 50 percent of the plot price and are given up
                    to 2 years for installment payments. Upon completion of
                    payment, a land title and signed transfer forms will be
                    issued to you. Contact me to schedule a site visit at your
                    convenience to gain a clearer understanding of the estate.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img
                          src="/images/banner/degeya/land-2.jpeg"
                          alt="image"
                        />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img
                          src="/images/banner/degeya/land-3.jpeg"
                          alt="image"
                        />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img
                          src="/images/banner/degeya/land-5.jpeg"
                          alt="image"
                        />
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
