import React from "react";
import Link from "next/link";

const KeyFeatures = () => {
  return (
    <>
      <div className="features-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="features-content">
                <h2>Discover Your Perfect Property</h2>
                <p>
                  Discover a diverse range of land listings tailored to suit
                  various preferences and investment objectives. From sprawling
                  rural landscapes to strategically located urban parcels, our
                  curated selection of properties offers something for every
                  vision and budget. With in-depth market analysis, thorough due
                  diligence, and personalized guidance, we empower buyers to
                  make informed decisions and sellers to maximize the value of
                  their land assets. Let us be your trusted partner in
                  navigating the complexities of land transactions, turning your
                  land aspirations into reality.
                </p>

                <div className="btn-box">
                  <Link href="estates">
                    <a className="link-btn">See All Our Estates</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="features-lists">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="ri-eye-line"></i>
                    </div>
                    <h5>Buying and selling Land</h5>
                    <p></p>
                  </li>
                  <li>
                    <div className="icon bg5">
                      <i className="ri-cloud-line"></i>
                    </div>
                    <h5>Property management</h5>
                    <p></p>
                  </li>
                  <li>
                    <div className="icon bg3">
                      <i className="ri-leaf-line"></i>
                    </div>
                    <h5>Free land consultation</h5>
                    <p></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
