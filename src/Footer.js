import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container2">
      <div className="retour">
        <p className="haut">Return to top</p>
      </div>
      <div className="liste">
        <div className="liste1">
          <h3>Get to Know us</h3>
          <ul>
            <li>Projects</li>
            <li>Portfolio</li>
            <li>Github</li>
            <li>templates</li>
            <li>About </li>
          </ul>
        </div>
        <div className="liste2">
          <h3>Make Money</h3>
          <ul>
            <li>sell products </li>
            <li>Sell under shopcan</li>
            <li>Handmade products</li>
            <li>Advertise</li>
            <li>Publish</li>
            <li>publish gift ideas</li>
            <li>Sell handwriteen books</li>
          </ul>
        </div>
        <div className="liste3">
          <h3>Payment Products</h3>
          <ul>
            <li>Rewards</li>
            <li>Shop with points</li>
            <li>Reload balance</li>
            <li>Giftcard</li>
            <li>Shopcan cash</li>
            <li>Currency converter</li>
          </ul>
        </div>
        <div className="liste4">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Covid-19 precautions</li>
            <li>Shipping rates</li>
            <li>Subscription</li>
            <li>Easy return</li>
            <li>Manage Your Device</li>
            <li>Manage content</li>
            <li>Language settings</li>
            <li>Change country</li>

            <li>Customer Service</li>
          </ul>
        </div>
      </div>
      <div className="bas">
        <ul className="listen">
          <li>Conditions of Use</li>
          <li>Privacy Notice</li>
          <li>interest-Based ads</li>
          <li>Ⓒ 2021, Shopcan.com,inc. or its affiliates</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
