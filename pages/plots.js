import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import FooterStyleFour from "@/components/_App/FooterStyleFour";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const Plots = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Our Estates - Location"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Plots"
      />

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <PropertyCard
              description={"Kiwenda Degeya Estate"}
              size={"50ft * 100ft"}
              price={"10m and above"}
              image={"/images/banner/land-5.jpg"}
              rate={"4(20)"}
            />
            <PropertyCard
              description={"Mukono, Kalagi Estate for 15m"}
              size={"50ft * 100ft"}
              price={"15m"}
              image={"/images/banner/land-6.jpg"}
              rate={"5(50)"}
            />
            <PropertyCard
              description={"Gayaza Manyangwa Estate"}
              size={"50ft * 100ft"}
              price={"15m"}
              image={"/images/banner/land-8.jpg"}
              rate={"3(10)"}
            />
            <PropertyCard
              description={"Mukono, Bajo Estate - New"}
              size={"50ft * 100ft"}
              price={"30m"}
              image={"/images/banner/land-3.jpg"}
              rate={"5(50)"}
            />
            <PropertyCard
              description={"Mukono, Bukonyo Estate"}
              size={"50ft * 100ft"}
              price={"20m"}
              image={"/images/banner/land-4.jpg"}
              rate={"4(30)"}
            />
            <PropertyCard
              description={"Gayaza Kiwenda Upper Estate"}
              size={"50ft * 100ft"}
              price={"35m"}
              image={"/images/banner/land-2.jpeg"}
              rate={"2(10)"}
            />
          </div>
        </div>
      </div>

      <FooterStyleFour />
    </>
  );
};

export default Plots;
