import React  from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdContactPhone, MdEmail } from "react-icons/md";

export default  function Footer(){

    return (
      <div className="footer-section">
        <div className="left-container">
          <p>GET IN TOUCH</p>

          <p>
            <MdEmail /> &emsp;kr12@hotmail.com
          </p>

          <p>
            <MdContactPhone /> &emsp;717-555-1234
          </p>
        </div>
        <button className="text-uppercase">Contact Me</button>
        <div className="social-media">
          <FaLinkedin className="icon"/>
          <FaFacebookF className="icon"/>
          <FaTwitter className="icon"/>
          <p>Copyright@2019 KR</p>
        </div>
      </div>
    );
  }

