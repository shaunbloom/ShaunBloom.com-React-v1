var  React = require('react');
var cx = require('react-classset');

var ResumePage = React.createClass({

	propTypes: {
		handleCloseClicked: React.PropTypes.func.isRequired
	},
	
	render: function () {

		return (
			<div id="resume-page">
				<div id="close" onClick={this.props.handleCloseClicked}></div>
	            <h1 className="title">Resume <a className="download-link" href="download/Shaun_Bloom--Resume.docx">DOWNLOAD</a></h1>
	            
	            <header>SHAUN BLOOM <span className="sub-text">conquering the web one day at a time</span></header>
	            <div className="contact-info">
	                <i className="fa fa-home"></i>
	                <span className="contact-info-text">Duvall, WA</span>
	                <i className="fa fa-phone"></i>
	                <span className="contact-info-text">425.802.1358</span>
	                <i className="fa fa-envelope"></i>
	                <span className="contact-info-text"><a href="mailto:shaunbloom@gmail.com?subject=Resume Contact">shaunbloom@gmail.com</a></span>
	                <i className="fa fa-linkedin"></i>
	                <span className="contact-info-text"><a href="">LinkedIn</a></span>
	                <i className="fa fa-github-square"></i>
	                <span className="contact-info-text"><a href="">GitHub</a></span>
	                <i className="fa fa-user"></i>
	                <span className="contact-info-text"><a href="">www.shaunbloom.com</a></span>
	            </div>
	            <div className="resume-body">
	                <div className="summary">
	                    <div className="column-a">
	                        <h2>SENIOR WEB DEVELOPER</h2>
	                        <div className="summary-text">
	                            <strong>Creative, highly-accomplished Senior Engineer</strong> with 20+ years of broad achievement in web-based technologies, application development, and high-profile projects. 
	                        </div>
	                        <div className="summary-text">
	                            Expert ability to develop and deploy new features, add functionality to products, stabilize performance, and elevate overall user experience.  
	                        </div>
	                        <div className="summary-text">
	                            Natural leader and collaborative team player able to oversee high-stakes, large-scale products, plan Agile sprints, diagnose/troubleshoot issues, and partner with cross-functional teams.
	                        </div>
	                    </div>
	                    <div className="column-b">
	                        <h2>CORE STRENGTHS</h2>
	                        <ul>
	                            <li>React Development</li>
	                            <li>Agile Methodologies</li>
	                            <li>Requirements Gathering</li>
	                            <li>Project Management</li>
	                            <li>Migrations & Integrations</li>
	                            <li>Documentation</li>
	                            <li>User Experience (UX)</li>
	                            <li>Unit Testing</li>
	                            <li>Communication Facilitation</li>
	                        </ul>
	                    </div>
	                </div>

	                <div className="professional-experience">
	                    <h2>PROFESSIONAL EXPERIENCE</h2>
	                    <div className="job">
	                        <div className="company">
	                            <span className="company-name">The Walt Disney Company</span>
	                            <span className="company-date">2015-2019</span>
	                        </div>
	                        <div className="title">SENIOR FRONTEND ENGINEER</div>
	                        <div className="frameworks-tools">Frameworks/Tools: React, JavaScript, HTML5, CSS3, JQuery, GIT, Jira, Xcode, FishEye, Photoshop, Return Path, Karma, Mocha, Endzyme</div>
	                        <div className="responsibilities">
	                            <ul>
	                                <li>Created new features, added functionality, gathered requirements, and supported eight ABC-owned news stations.</li>
	                                <li>Programmed sites with TEA (a Disney proprietary language), JQuery, JavaScript, CSS, and HTML.</li>
	                                <li>Directed the Google AMP project building an engine processing and delivering all news stories in a Google AMP format. </li>
	                                <li>Led development of a Simple Post tool using React to enable content writers in the field to publish news stories through a mobile interface.</li>
	                                <li>Partnered with developers to migrate eight ABC news sites from TEA to React and built out the AMP engine for site migration.</li>
	                                <li>Built HTML and CSS-based emails and used Return Path to assess look-and-feel across different browsers, operating systems, and devices.</li>
	                                <li>Wrote Karma frontend unit tests and Mocha data-driven unit tests.</li>
	                                <li>Facilitated sprint planning and scrum sessions for Confluence sites.</li>
	                            </ul>
	                        </div>
	                    </div>

	                    <div className="job">
	                        <div className="company">
	                            <span className="company-name">Porch</span>
	                            <span className="company-date">2014-2015</span>
	                        </div>
	                        <div className="title">SENIOR FRONTEND ENGINEER</div>
	                        <div className="frameworks-tools">Frameworks/Tools: React, JavaScript, HTML5, CSS3, LESS/SASS, Backbone, JQuery, Bootstrap, Handlebars, Moment, Jasmine, GIT, BrowserStack, XCode, Jenkins, Pie Charts, Google Analytics</div>
	                        <div className="responsibilities">
	                            <ul>
	                                <li>Updated the existing Home Report to incorporate Google Visualization Charts.</li>
	                                <li>Architected a new Timeline version of the Home Report using Backbone, Bootstrap, and LESS, and rebuilt sites from scratch using a new technology stack including React.</li>
	                                <li>Delivered a new user experience using React to view home report, create and track projects, and view the user feed.</li>
	                                <li>Improved code coverage, quality, and stability by creating unit tests for all projects.</li>
	                                <li>Enabled insights into customer usage, patterns, and habits by embedding Google Analytics into all projects.</li>
	                            </ul>
	                        </div>
	                    </div>

	                    <div className="job">
	                        <div className="company">
	                            <span className="company-name">ACTIVE Network</span>
	                            <span className="company-date">2012-2014</span>
	                        </div>
	                        <div className="title">SENIOR UI JAVASCRIPT DEVELOPER</div>
	                        <div className="frameworks-tools">Frameworks/Tools: HTML5, SASS, CSS3, JavaScript, Backbone, Handlebars, Moment, Jasmine, TortoiseSVN, Jira</div>
	                        <div className="responsibilities">
	                            <ul>
	                                <li>Added new functionality for the enterprise-level, customer-facing online registration management web application.</li>
	                                <li>Converted the existing Flex-based web application to a single page JavaScript solution with a library of reusable components and localization support.</li>
	                                <li>Developed a new self-service UI for customers to manage their accounts online and added mobile optimization for the entire application.</li>
	                            </ul>
	                        </div>
	                    </div>

	                    <div className="job">
	                        <div className="company">
	                            <span className="company-name">Clearwire</span>
	                            <span className="company-date">2009-2012</span>
	                        </div>
	                        <div className="title">UI WEB APPLICATION DEVELOPER</div>
	                        <div className="frameworks-tools">Frameworks/Tools: JavaScript, PHP, Zend MVC, HTML5, CSS3, JQuery, Photoshop & Fireworks CS4, TortoiseSVN, Putty, Bugzilla, Jira</div>
	                        <div className="responsibilities">
	                            <ul>
	                                <li>Thrived in a Scrum/Agile environment creating, improving, and managing all facets of the customer-facing sales, corporate, and mobile websites built on a PHP Zend framework.</li>
	                                <li>Developed most of the new mobile website and designed a template-based, CMS-driven city/state landing page engine enabling rapid deployment of new markets.</li>
	                                <li>Reduced site page load times by implementing a CDN and consolidating JavaScript and CSS files.</li>
	                            </ul>
	                        </div>
	                    </div>

	                    <div className="job">
	                        <div className="company">
	                            <span className="company-name">Microsoft</span>
	                            <span className="company-date">2008-2009</span>
	                        </div>
	                        <div className="title">UI WEB APPLICATION DEVELOPER</div>
	                        <div className="frameworks-tools">Frameworks/Tools: JavaScript, ASP, HTML, CSS, JQuery, Visual Studio, Source Safe, Bugzilla</div>
	                        <div className="responsibilities">
	                            <ul>
	                                <li>Executed site updates, added features, and drove globalization/localization efforts for the Microsoft Pinpoint website designed to engage customers with global business solutions.</li>
	                                <li>Teamed with designers to optimize UI functionality in text overflow situations.</li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>

	                <div className="additional-engagements">
	                    <strong>Additional engagements include:</strong> <span className="title">UI WEB APPLICATION DEVELOPER</span> at Nokia, <span className="title">WEB APPLICATION DEVELOPER</span> at Infilearn.com, <span className="title">SOFTWARE ENGINEER</span> at Xchange, Inc., and <span className="title">LEVEL V CUSTOMER SERVICE REPRESENTATIVE</span> at Nintendo of America
	                </div>

	                <div className="special-projects">
	                    <h2>SPECIAL PROJECTS</h2>
	                    <div className="project">
	                        <strong>Personal website</strong>: <a href="http://www.shaunbloom.com" target="_blank">www.shaunbloom.com</a> translated a heavily-animated original JQuery website into Angular v1, React v0, React v16, and vanilla ES6 JavaScript. All expected to look and function exactly as the original.
	                    </div>
	                </div>

	                <div className="ongoing-recent">
	                    <h2>ONGOING/RECENT TRAINING</h2>
	                    <div className="training">
	                        <strong>React</strong>: <i>The Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)</i>
	                    </div>
	                    <div className="training">
	                        <strong>JavaScript</strong>: <i>The Complete JavaScript Course 2020 (w/ ES6+, OOP, AJAX, Webpack)</i>
	                    </div>
	                </div>
	            </div>
			</div>
		);
	}
});

module.exports = ResumePage;