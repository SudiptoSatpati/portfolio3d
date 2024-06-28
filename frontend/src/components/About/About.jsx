import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ abouts }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{abouts.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={abouts.avatar.url}
            alt={`${abouts.name} profile picture`}
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {abouts.name}
          </Typography>

          <Typography>{abouts.title}</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {abouts.subtitle}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {abouts.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
