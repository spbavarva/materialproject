import React, { Fragment } from "react";
import "./footer.css";
import { Button } from "@material-ui/core";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <div className="containerr">
          <div className="leftFooter">
            <h4>About Us</h4>
            <p>
              sum odor amet, consectetuer adipiscing elit. Ac purus in massa
              egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
              parturient habitant pharetra rutrum gravida porttitor eros
              feugiat. Mollis elit sodales taciti duis praesent id. Consequat
              urna vitae morbi nunc congue.
            </p>
          </div>

          <div className="midFooter">
            <h1>MATERIAL</h1>
            <p>Source of knowledge</p>
          </div>

          <div className="rightFooter">
            <h4>Contact Us</h4>
            <a href="https://www.instagram.com/sp_bavarva/">
              &#8226; Instagram
            </a>
            <a href="snehbavarva@gmail.com">&#8226; snehbavarva@gmail.com</a>
          </div>
        </div>
        <hr />
        <div className="fifth">
          <p>Copyrights 2022 &copy; material&#38;Com. All rights reserved</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
