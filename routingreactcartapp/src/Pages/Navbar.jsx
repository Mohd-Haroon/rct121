import React from "react";
import { Navbars, Banner } from "../StylesComponent/Navbarstled";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
      <Navbars>
        <>
          <Link to="product" style={{ textDecoration: "none", color: "white" }}>
            Products
          </Link>
          <Link to="about-us" style={{ textDecoration: "none", color: "white" }}>
            About us
          </Link>
          <Link to="faq" style={{ textDecoration: "none", color: "white" }}>
            FAQ
          </Link>
          <Link to="contact-us" style={{ textDecoration: "none", color: "white" }}>
            Contact Us
          </Link>
          <Link to="login" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <BsCart2 />
          </Link>
          
        </>
        <>
          <input type="text" placeholder="Search" />
        </>
      </Navbars>
      
      <div
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/shop-banner-2x-f294790c930b6174905a6df88b1dbb27475fba74a4e9292937305b7e36ecf1a2.jpg)",
          height: "200px",
        }}
      >
        Hellow world
      </div>
    </>
  );
};
