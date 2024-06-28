import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Sudipto Satpati. I am a Full-Stack Developer and
          currently persuing my B-Tech Degree, Looking for some good
          opportunities<b> Eat Sleep Develop & Repeat </b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/SudiptoSatpati/" target="black">
          <BsGithub />
        </a>
        <a
          href="https://youtube.com/@f2pbtw826?si=16lxuPqB3c4OvkqP"
          target="black"
        >
          <BsYoutube />
        </a>
        <a href="https://instagram.com/satpati_sudipto/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/sudiptosatpati/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
