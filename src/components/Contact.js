import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {

	render = () => {
	  return (
			<div className="contactContainer">
				<a href="https://www.linkedin.com/in/williamnamen" target="_blank" className="hvr-grow"><i className="fa fa-linkedin 3x" aria-hidden="true"></i></a>
				<a href="https://www.angellist.com/william-namen" target="_blank" className="hvr-grow"><i className="fa fa-angellist 3x" aria-hidden="true"></i></a>
				<a href="https://github.com/wnamen" target="_blank" className="hvr-grow"><i className="fa fa-github 3x" aria-hidden="true"></i></a>
				<a href="mailto:williamjosephnamen@gmail.com" className="hvr-grow"><i className="fa fa-envelope 3x" aria-hidden="true"></i></a>
			</div>
	  )
	}
}

export default Contact;
