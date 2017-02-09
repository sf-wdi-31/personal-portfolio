import React, { Component } from "react";
import $ from "jquery";
import "./Nav.css";

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.menuHandler = this.menuHandler.bind(this);
		this.handleView = this.handleView.bind(this);
	}

	menuHandler = (e) => {
	 	e.stopPropagation();//so that it doesn't trigger click event on document

  	if (this.state.open === false) {
			$('#cn-wrapper').addClass('opened-nav');
			this.setState({open:true})
  	}
	 	else {
			$('#cn-wrapper').removeClass('opened-nav');
			this.setState({open:false});
	  }
	}

	handleView = (e) => {
		this.props.renderView(e.target.id);
		$('#cn-wrapper').removeClass('opened-nav');
		this.setState({open:false});
	}

	render = () => {
	  return (
			<div className="component">
				<button className="cn-button" id="cn-button" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></button>
				<div className="cn-wrapper" id="cn-wrapper">
				    <ul>
				      <li id="about" onClick={this.handleView}><a id="about"><span id="about"><i id="about" className="fa fa-user fa-2x" aria-hidden="true"></i></span></a></li>
				      <li id="home" onClick={this.handleView}><a id="home"><span id="home"><i id="home" className="fa fa-home fa-2x" aria-hidden="true"></i></span></a></li>
				      <li id="portfolio" onClick={this.handleView}><a id="portfolio"><span id="portfolio"><i id="portfolio" className="fa fa-code fa-2x" aria-hidden="true"></i></span></a></li>
				    </ul>
				</div>
			</div>
	  )
	}
}

export default Nav;
