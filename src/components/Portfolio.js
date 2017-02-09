import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {

	render = () => {
	  return (
      <div className="portfolioContainer">
        <h2>Portfolio</h2>
					<span className="down-arrow hvr-pulse"><i className="fa fa-angle-double-down"></i></span>
					<section id="cd-timeline" className="cd-container">
						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-building" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Legion Analytics</h2>
								<div className="portfolio-img">
									<a href="https://www.legionanalytics.com" target="_blank"><img src="/imgs/legionanalytics.png" /></a>
								</div>
								<p>Single-handily rebooted Legion Analytics front-end framework and user experience for their main website and CRM utilizing ReactJs, Babel, Webpack, and Python on Django.</p>
								<a href="https://www.legionanalytics.com" target="_blank" className="cd-read-more">Check it out</a>
								<span className="cd-date">Feb 2017</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-building" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>{`Kylie.ai`}</h2>
								<div className="portfolio-img">
									<a href="https://www.kylie.ai" target="_blank"><img src="/imgs/kylie.png" /></a>
								</div>
								<p>Single-handily built the front-end framework and user experience for Legion Analytics’ new Sales Lead Machine Learning Bot, Kylie, utilizing JavaScript/jQuery, HTML, and CSS and other frameworks.</p>
								<a href="https://www.kylie.ai" className="cd-read-more">Check it out</a>
								<span className="cd-date">Dec 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-book" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Completed General Assembly</h2>
								<div className="portfolio-img">
									<a href="https://generalassemb.ly/education/web-development-immersive" target="_blank"><img src="/imgs/generalassembly.png" /></a>
								</div>
								<p>Built fully functional applications utilizing Ruby, Rails, JavaScript/jQuery, HTML, and CSS with working knowledge in many other languages, frameworks and web development processes.</p>
								<a href="https://generalassemb.ly/education/web-development-immersive" className="cd-read-more">Check it out</a>
								<span className="cd-date">Nov 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-code" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>impactWatch</h2>
								<div className="portfolio-img">
									<a href="https://impactwatch.herokuapp.com" target="_blank"><img src="/imgs/impactwatch.png" /></a>
								</div>
								<p>impactWatch captures NASA's Meteorite Landings API and renders the data into a dynamic 3D model of the Earth. The model allows researchers to visualize any impact(s) on the Earth and share that data through CSV files.</p>
								<a href="https://impactwatch.herokuapp.com" className="cd-read-more">Check it out</a>
								<span className="cd-date">Oct 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-code" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Ede-Men</h2>
								<div className="portfolio-img">
									<a href="https://ede-men.herokuapp.com" target="_blank"><img src="/imgs/edemen.png" /></a>
								</div>
								<p>A full stack app that connects humanitarians with local Haitian NGOs that have a track record of success and transparency. As the team Full Stack Developer, I built the User/Admin functionalities and structure, I researched data and built the data visualization, and debugged the front end.</p>
								<a href="https://ede-men.herokuapp.com" className="cd-read-more">Check it out</a>
								<span className="cd-date">Oct 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-code" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Wander</h2>
								<div className="portfolio-img">
									<a href="https://wanderwithme.herokuapp.com" target="_blank"><img src="/imgs/wander.png" /></a>
								</div>
								<p>A full stack travel app that targets modern travelers who are seeking exciting destinations through a community of experiences. I led the team as a Project Lead and Lead Backend Developer. I built the structure and routes, and debugged all code.</p>
								<a href="https://wanderwithme.herokuapp.com" className="cd-read-more">Check it out</a>
								<span className="cd-date">Sep 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-code" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Clarity</h2>
								<div className="portfolio-img">
									<a href="https://marketclarity.herokuapp.com" target="_blank"><img src="/imgs/clarity.png" /></a>
								</div>
								<p>A simple, clean alternative to tracking the stock market. This app incorporates real-time market data from bigchart.com’s API coupled with data visualization using D3.</p>
								<a href="https://marketclarity.herokuapp.com" className="cd-read-more">Check it out</a>
								<span className="cd-date">Sep 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-code" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Foodify</h2>
								<div className="portfolio-img">
									<a href="https://foodifyme.herokuapp.com" target="_blank"><img src="/imgs/foodify.png" /></a>
								</div>
								<p>A full-stack CRUD app that looks to optimize the ingredients in your own pantry and prevent waste. Led the team as the Project Lead and Backend Developer. I created wire framing and user stories, and built the back-end structure with API requests.</p>
								<a href="https://foodifyme.herokuapp.com" className="cd-read-more">Check it out</a>
								<span className="cd-date">Aug 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-code" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Mastermind</h2>
								<div className="portfolio-img">
									<a href="https://williamnamen.com/mastermind" target="_blank"><img src="/imgs/mastermind.png" /></a>
								</div>
								<p>A remake of the classic code-breaking game. This is a front-end app that utilizes JavaScript for the logic and JQuery for rendering the view.</p>
								<a href="http://williamnamen.com/mastermind" className="cd-read-more">Check it out</a>
								<span className="cd-date">Aug 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-book" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Began General Assembly</h2>
								<div className="portfolio-img">
									<a href="https://generalassemb.ly/education/web-development-immersive" target="_blank"><img src="/imgs/generalassembly.png" /></a>
								</div>
								<p>General Assembly is a pioneer in education and career transformation, specializing in today’s most in-demand skills. The leading source for training, staffing, and career transitions, we foster a flourishing community of professionals pursuing careers they love.</p>
								<a href="https://generalassemb.ly/education/web-development-immersive" className="cd-read-more">Check it out</a>
								<span className="cd-date">Aug 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-building" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Exited Fisher Investments</h2>
								<div className="portfolio-img">
									<a href="https://www.fisherinvestments.com/" target="_blank"><img src="/imgs/fisher.png" /></a>
								</div>
								<p>I officially exited the finance industry in pursuit of passions in tech.</p>
								<a href="https://www.fisherinvestments.com/" className="cd-read-more">Check it out</a>
								<span className="cd-date">Jul 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-book" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Compeleted App Academy Prep</h2>
								<div className="portfolio-img">
									<a href="https://www.appacademy.io/bootcamp-prep/live" target="_blank"><img src="/imgs/appacademy.png" /></a>
								</div>
								<p>Bootcamp Prep is a 4-week, part-time course, guaranteed to get you accepted at the most selective coding schools or your money back. The program will teach you up to an advanced level of JavaScript, and instructors provide you with 1-on-1 mock interviews as well as assist with your individual bootcamp applications.</p>
								<a href="https://www.appacademy.io/bootcamp-prep/live" className="cd-read-more">Check it out</a>
								<span className="cd-date">May 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-book" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Began App Academy Prep</h2>
								<div className="portfolio-img">
									<a href="https://www.appacademy.io/bootcamp-prep/live" target="_blank"><img src="/imgs/appacademy.png" /></a>
								</div>
								<p>Bootcamp Prep is a 4-week, part-time course, guaranteed to get you accepted at the most selective coding schools or your money back. The program will teach you up to an advanced level of JavaScript, and instructors provide you with 1-on-1 mock interviews as well as assist with your individual bootcamp applications.</p>
								<a href="https://www.appacademy.io/bootcamp-prep/live" className="cd-read-more">Check it out</a>
								<span className="cd-date">April 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-book" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Compeleted Codecademy Online Courses</h2>
								<div className="portfolio-img">
									<a href="https://www.codecademy.com/" target="_blank"><img src="/imgs/codeacademy.png" /></a>
								</div>
								<p></p>
								<a href="https://www.codecademy.com/" className="cd-read-more">Check it out</a>
								<span className="cd-date">March 2016</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-book" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Began Codecademy Online Courses</h2>
								<div className="portfolio-img">
									<a href="https://www.codecademy.com/" target="_blank"><img src="/imgs/codeacademy.png" /></a>
								</div>
								<p></p>
								<a href="https://www.codecademy.com/" className="cd-read-more">Check it out</a>
								<span className="cd-date">October 2015</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-building" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Began Career at Fisher Investments</h2>
								<div className="portfolio-img">
									<a href="https://www.fisherinvestments.com/" target="_blank"><img src="/imgs/fisher.png" /></a>
								</div>
								<p>I continued my career in the finance industry as an Investment Associate. I worked as a liaison between clients, brokers, and internal departments to process daily investment transactions and service requests.</p>
								<a href="https://www.fisherinvestments.com/" className="cd-read-more">Check it out</a>
								<span className="cd-date">August 2015</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-map-marker" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Moved to San Francisco</h2>
								<div className="portfolio-img">
									<a target="_blank"><img src="/imgs/sanfrancisco.jpg" /></a>
								</div>
								<p></p>
								<span className="cd-date">August 2015</span>
							</div>
						</div>

						<div className="cd-timeline-block">
							<div className="cd-timeline-img">
								<i className="fa fa-book" aria-hidden="true"></i>
							</div>

							<div className="cd-timeline-content">
								<h2>Graduated from the University of North Florida</h2>
								<div className="portfolio-img">
									<a href="http://www.unf.edu/" target="_blank"><img src="/imgs/unf.jpg" /></a>
								</div>
								<p>I completed my studies and graduated with a Bachelor's in Finance and a minor in Economics.</p>
								<a href="http://www.unf.edu/" className="cd-read-more">Check it out</a>
								<span className="cd-date">August 2015</span>
							</div>
						</div>
					</section>
      </div>
	  )
	}
}

export default Portfolio;
