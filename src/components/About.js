import React, { Component } from "react";
import "./About.css";

class About extends Component {

	render = () => {
	  return (
      <div className="aboutContainer">
        <h2>About</h2>
				<span className="down-arrow hvr-pulse"><i className="fa fa-angle-double-down"></i></span>
				<p>A <strong>self-taught</strong> Software Engineer. I take <strong>risks</strong> to turn my passions into reality. I use my skills to <strong>break</strong> tradition and <strong>build</strong> change. No <strong>challenge</strong> scares me. I <strong>love</strong> programming, collaboration, and seeing the smile of my teammates when we <strong>complete</strong> a project. My <strong>passions</strong> are Space Technology, Investments and Medicine. I have the ability to <strong>learn</strong> and apply new skills <strong>quickly</strong>.</p>
      </div>
	  )
	}
}

export default About;
