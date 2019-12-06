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
				<h1 className="pageTitle">Resume &mdash; <a href="//shaunbloom.com/download/Shaun_Bloom--Resume.docx">DOWNLOAD</a></h1>
				<p><strong>Objective:</strong> To use my experience and knowledge of web-based technologies, object oriented programming, and application development in a high tech solution based environment.<br/><br/></p>
				     
				<p><strong>Professional Experience:</strong></p>
				<div className="job-employer">
	                <article>
	                    <p><strong><em>Disney</em></strong> • Seattle, WA   Jan 2016 – Nov 2019</p>
	                    <p><strong>Senior Frontend Engineer</strong></p>
	                    <ul>
	                        <li>Maintained active support for all 8 ABC owned news stations including general maintenance, building out new features and functionality and working directly with the news stations to gather requirements and demoing new functionality. All sites were programmed with a mix of TEA, JQuery, JavaScript, CSS, and HTML. TEA is a proprietary language created by Disney combining a mix of HTML and locked down JavaScript wrappers.</li>
	                        <li>Lead the Google AMP project to build an engine in TEA that would process and deliver all of our news stories in the Google AMP format.</li>
	                        <li>Lead the frontend development for our Simple Post tool that allowed content writers in the field to create news stories through a simple mobile interface speeding up the initial story content creation process. Given the choice I chose React to complete the project with.</li>
	                        <li>Spent 6 months working with a large team of developers to migrate our 8 existing ABC news sites from TEA to React. I was also responsible for building out the AMP engine in React as well for the site migration.</li>
	                        <li>Proficient in writing Karma frontend unit test and Mocha data driven unit tests.</li>
	                        <li>Actively participated in sprint planning, daily scrums and adding documentation to our Confluence sites.</li>
	                        <li>Responsible for a week at a time to be on call for all of our stations to reach out to incase of site outages/problems or CMS issues.</li>
	                    </ul>
	                    <p><strong>Core Skills Required:</strong> HTML5, CSS3, JavaScript, Backbone, Bootstrap, ReactJS, LESS/SASS, Handlebars, JQuery, Moment, Jasmine, GIT, BrowserStack, XCode, Jenkins</p>
	                </article>
	            </div>
				<div className="job-employer">
				    <article>
				        <p><strong><em>Porch</em></strong> • Seattle, WA   Apr 2014 – Nov 2015</p>
				        <p><strong>Senior Frontend Engineer</strong></p>
				        <ul>
				            <li>Initial job responsibilities included making all updates to our existing Home Report which also included Google Visualization Charts as well as Highchart graphs. </li>
				            <li>Responsible for building out the new Timeline version of our Home Report using backbone, bootstrap and LESS.</li>
				            <li>Responsible for learning ReactJS to start rebuilding our sites from the ground up with the new technology stack.</li>
				            <li>Using ReactJs built out the entire new user experience for viewing your home report, creating and tracking projects, viewing your user feed (followed projects and pros), and the ability to view follow pros.</li>
				            <li>Setup all projects with Google Analytics to track customer usage, patterns and habits.</li>
				            <li>Created unit test for all projects to increase code coverage and stability.</li>
				            <li>All pages built with a responsive site design to maintain proper look and feel across any size resolution, including mobile.</li>
				        </ul>
				        <p><strong>Core Skills Required:</strong>HTML5, CSS3, JavaScript, Backbone, Bootstrap, ReactJS, LESS/SASS,  RequireJS, Handlebars, JQuery, Moment, Jasmine, GIT, BrowserStack, XCode, Jenkins</p>
				    </article>
				</div>

				 <div className="job-employer">
				    <article>
				        <p><strong><em>ACTIVE Network</em></strong> • Bothell, WA	Apr 2012 – Apr 2014</p>
				        <p><strong>Senior UI JavaScript Developer</strong></p>
				        <ul>
				            <li>Responsible for updating, maintaining, and building out new functionality for our enterprise level customer facing online registration management web applications</li>
				            <li>Over the last 1.5 years converted our existing Flex based web application into a single page JavaScript web application with a complete library of re-useable components and localization support</li>
				            <li>Learned how to work with Backbone, RequireJS, SASS, Handlebars, Moment and TimezoneJS to develop in the new application environments</li>
				            <li>Assisted in building out our new SSUI (Self Service User Interface) for customers to manage their accounts online, pay their bill and enroll in or manage automatic billing</li>
				            <li>Added mobile optimization for the entire SSUI application</li>
				            <li>Completed task in 3 week sprints divided amongst two development teams in a scrum based agile environment</li>
				            <li>Open bug log to work from as well as assigned bugs based off of project work</li>
				            <li>Wrote Jasmine unit test to maintain code stability</li>
				            <li>Involved in Pre-planning, backlog grooming and sprint planning meetings on a weekly basis</li>
				        </ul>
				        <p><strong>Core Skills Required:</strong> DHTML, HTML5, SASS, CSS,CSS3, Javascript, Backbone, RequireJS, Handlebars, JQuery, Moment, Jasmine, TortoiseSVN, Jira</p>
				    </article>
				</div>

				<div className="job-employer">
				    <article>
				        <p><strong><em>Clearwire</em></strong> • Kirkland, WA	Jan 2010 – Apr 2012</p>
				        <p><strong>UI Web Application Developer</strong></p>
				        <ul>
				            <li>Working in scrum based agile environment, created, developed, modified and maintained all aspects of the customer facing company sales web site, corporate site, and  mobile site. The site was built on the PHP Zend Framework and, set up to pull content from our CMS (Wordpress &amp; Concrete). All updates occurred through scheduled monthly iterations with weekly releases.</li>
				            <li>Part of the team that designed, built, and launched our mobile CLEAR.com web site.</li>
				            <li>Designed and created a template based, CMS driven, city and state landing page engine that allowed for rapid deployment of new markets launching on a weekly basis. </li>
				            <li>Created a new dynamic support FAQ section completely driven from CMS for easy drag and drop regrouping of FAQs and easy addition and deletion.</li>
				            <li>Worked at reducing load time for site pages by creating sprite images for numerous pages as well as implemented a CDN. Consolidated all JavaScript files and CSS files to reduce the server hits on page load.</li>
				            <li>Gained an extensive working knowledge of Wordpress and Concrete5 which CLEAR uses as a CMS systems for both the clear.com and clearwire.com web sites.</li>
				            <li>Worked in a completely source controlled environment using Tortoise SVN. Jira was used as bug tracking, and project management tool.</li>
				        </ul>
				        <p><strong>Core Skills Required:</strong> DHTML, HTML, CSS, JQuery, Javascript, PHP, Zend MVC, Photoshop &amp; Fireworks CS4, TortoiseSVN, Putty, Bugzilla, and Jira</p>
				    </article>
				</div>

				<div className="job-employer">
				    <article>
				        <p><strong><em>Microsoft</em></strong> • Redmond, WA	Nov 2008 – Dec 2009</p>
				        <p><strong>UI Web Application Developer</strong></p>
				        <ul>
				            <li>Maintained site updates, feature additions, globalization &amp; localization efforts, and bug fixes for the Microsoft Pinpoint website. The site was aimed at connecting customers with business all over the world.</li>
				            <li>Worked closely with the design team on details over how the UI should function in text overflow situations due to the expansion of localized text. A lot of this work was working out creative ways to contain and control how localized text displayed without it breaking the page layout.</li>
				            <li>Prepared content from our in house CMS (Slater) system V2.0 to the new V3.0. This consisted of combing the content and header tags for any in-line styles that might have been used in early content releases of the site. Once the content was scrubbed in V2.0 it was able to be moved into the new V3.0.</li>
				            <li>Gained extensive knowledge of Microsoft business practices, team structuring, and how to work effectively in a very distracting environment.</li>
				        </ul>
				    </article>
				</div>

				<div className="job-employer">
				    <p><strong><em>Nokia – (Twango.com)</em></strong> • Bellevue, WA	Nov 2007 – Aug 2008</p>
				    <p><strong>UI Web Application Developer</strong></p>
				    <ul>
				        <li>Worked closely with a team of designers in the UK (AKQA) to redesign the look and feel of the old Twango site, and get it more in line with Nokia’s ovi.com theme.  This involved rebuilding, and re-skinning most of the sites .net controls, as well as building a new top bridge navigation bar, and a new main navigation bar. All of these UI enhancements completed the wrap-up of “sprint3”, and gave the site a look that matched the current direction that Nokia was going for with the ovi.com.</li>
				        <li>Built localized control prototypes, to do proof of concept for a lot of the Globalization and localization that would be implemented in further releases. These prototypes required a lot of researching methods and best practices to insure we built the site as robust as possible to handle any localized string scenario. </li>
				        <li>As part of a three person development team, we worked daily to develop a new web site framework that was fluid, flexible, globalized, and most of all robust across all browser clients, on both PC and MAC. The new framework was developed using a mixture of YUI(yahoo) and BluePrint (google), in a .net environment. Using the Scriptaculous JavaScript library we created a great set of user controls for the new site, that allowed for easier customer understanding, as well as visually impressive.</li>
				        <li>I was responsible for rebuilding the current bridge and main navigation. The idea was to make them flexible and fluid to fit the new design. I also took the liberty of converting this code into actual controls to simplify the master page, and reduce the amount of physical code on the page.</li>
				        <li>Led the design and development work on a new administration moderation tool. With our site giving open access to upload images and video, we needed a way to have media flagged and then the ability to have a 3rd party company go through the flagged media using this new admin moderation web tool.</li>
				        <li>Created, and updated functional specs for many of the tools we were building throughout our releases.</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>Infilearn.com</em></strong> • Bellevue, WA	Oct 2007 – Nov 2007</p>
				    <p><strong>Senior Web Application Developer</strong></p>
				    <ul>
				        <li>My top requirement for this company was to insure that all of the ASP.NET/C# and AJAX controls, looked and functioned the same across all browsers. I was challenged with the task of finding creative workarounds for layout and inconsistency issues with these control objects when used in all browsers and OS(s).</li>
				        <li>Responsible for creating a seamless visual experience across all browsers and operating systems for users on the Infilearn web based software platform. Cross browser compatibility was a top concern as the web product was used worldwide. The idea behind the cross browser visual aspect of the product was the need for a consistency of identical  look and feel as to that of  a standalone executable application, but have it web based for the ability to grow and expand the product on a regular basis.</li>
				        <li>Worked towards a master page layout across the entire site for ease of updating and expanding. Being that the site was constructed off shore by a third party, and handed over to Infilearn, most of the functionality was in place, but the look in feel of the site was very scattered. Cleaned up and unified all pages and sections of the site to compliment the overall look and design of the product as a whole.</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>ChannelReady</em></strong> • Bellevue, WA	Feb 2005 – Oct 2007</p>
				    <p><strong>Senior Web Application Developer</strong></p>
				    <ul>
				        <li>Designed and developed a web based framework (Fluid) as a starting point platform for all web and portal sites produced by ChannelReady.</li>
				        <li>Responsible for updating the fluid framework into a Dreamweaver template based coding structure allowing full compatibility with the client side web authoring tool Contribute.</li>
				        <li>Created a number of drop in ASP and JavaScript modules allowing quick and easy robust functionality across all sites and portals.</li>
				        <li>Developed user admin tools for sites requiring access level administration, username and password creation, site permission authoring, and maintenance support.</li>
				        <li>Worked with the design team to create a documented and sensible naming convention system for the ability of drop in graphic replacements for our packaged web and portal frame works. </li>
				        <li>Built an Auto Sizing and centering mechanism to correctly adjust the page height, and centering of page, regardless of resolution or window size.</li>
				        <li>Constructed a tight table bound code format for opt in email campaigns. The table based structure insured identical visual display across all email clients and web based mail systems while allowing an easy template to construct new campaigns using Constant Contact.</li>
				        </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>Impliment.com</em></strong> • Bellevue, WA	Oct 2004 – Nov 2004</p>
				    <p><strong>Web Application Developer (Independent Contractor)</strong></p>
				    <ul>
				        <li>Responsible for creating new portal sites for the WMSS group at Microsoft. These portals included the ability to download and upgrade services and applications related directly to your windows smart phone or Windows based Pocket PC. Portals were constructed in an ASP.net environment and were coded in C#, html, DHTML, CSS, and JavaScript.</li>
				        <li>Constructed portals with a compiled code base using resources files and .NET controls to create .dll files that controlled functionality and content of sites.</li>
				        <li>Worked to upgrade portal functionality, look &amp; feel, and ease of consumer use through multiple updates and fixes across all portal sites within the WMSS group. This meant updating all current portals with fixes and upgrades to insure that all portals were running against the same codebase.</li>
				        <li>Tracked &amp; implemented fixes for bugs from discovery to resolution .</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>PhotoWorks</em></strong> • Seattle, WA	Aug 2004 – Oct 2004</p>
				    <p><strong>Web Application Developer (Independent Contractor)</strong></p>
				    <ul>
				        <li>Responsible for adding, updating, and implementing new features and changes to the new Photoworks.com site launching 10/08/04. Using HTML, DHTML, JavaScript, and JSP.</li>
				        <li>Maintained accurate spreadsheet of on going issues as well as bug tracking from start to resolution in web base tracking software.</li>
				        <li>Created graphics for use in site tool bars and navigation. </li>
				        <li>Assisted in solving complicated layout issues resulting from highly dynamic driven web pages.</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>Safeco</em></strong> • Seattle, WA	Jan 2004 – Aug 2004</p>
				    <p><strong>Web &amp; Software Developer (Independent Contractor)</strong></p>
				    <ul>
				        <li>Designed and developed new sales agent training site that linked to Safeco applications with context sensitive help functionality. Site designed using HTML, DHTML, JavaScript, and ASP.</li>
				        <li>Designed and completed a core codebase platform to build new and updateable web training applications.</li>
				        <li>Updated and propagated changes and feature additions to existing ASP/XML data websites. </li>
				        <li>Installed and administered VSS database for entire project base.</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>MediaPro Inc</em></strong> • Bothell, WA	Apr 2003 – Jan 2004</p>
				    <p><strong>Web &amp; Software Developer (Independent Contractor)</strong></p>
				    <ul>
				        <li>Developed, documented, and implemented new core code base to run and build all e-learning courseware in. Code base was programmed using HTML, DHTML, &amp; JavaScript, to allow for use directly off CD or through learning management systems.</li>
				        <li>Designed new page level tracking system for code base using cookies and JavaScript, to track users’ progress through courseware. </li>
				        <li>Maintained upkeep of ClientNet, an internal ASP client communication application. Upkeep included redesigning, and adding functionality based off client and PM feedback.</li>
				        <li>Wrote custom JavaScript functions in courseware to mimic dynamic web experience in a static environment. </li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>CyBook Inc</em></strong> • Ballard, WA	Feb 2003 – Mar 2003</p>
				    <p><strong>Web Developer (Independent Contractor)</strong></p>
				    <ul>
				        <li>Developed key Microsoft marketing Web sites about Office 11 products. Sites designed using FrontPage 11 beta v2.0 and built on SharePoint Portal Server v2.0 as SharePoint Team Services websites. </li>
				        <li>All sites constructed using HTML, DHTML, and JavaScript.</li>
				    </ul>
				</div>
				<div className="job-employer">
				    <p><strong><em>Fluke Networks</em></strong> • Everett, WA	Sept 2002 – Oct 2002</p>
				    <p><strong>Software Engineer (contract assignment)</strong></p>
				    <ul>
				        <li>Built multi-lingual ASP product registration site displayable in 7 languages. Site used to activate and support Fluke products sold worldwide.</li>
				        <li>Created custom ASP error handler for registration site that logged all unreported errors to a database. </li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>Xchange Inc</em></strong> • Boston, MA	Oct 1999 – Apr 2002</p>
				    <p><strong>Software Engineer</strong></p>
				    <ul>
				        <li>Constructed online intranet knowledge base using HTML, DHML, JavaScript, VB Script, ASP, and SQL. </li>
				        <li>Coded Real Time Messaging System. Consisting of an ASP linking site and engine —product was required to plug into our existing CRM  software.</li>
				        <li>Served as Lead ASP/DHTML/HTML developer for a 2.2 DBCS CRM software package upgrade—managed a Technical Writer and SQL Developer, as well as assigned and managed bug triage.</li>
				        <li>Implemented and maintained multi-language support, including the querying of content and online reporting within the database-driven ASP based eMessaging CRM Website software.</li>
				        <li>Developed a stand-alone Administration Publishing Tool in Java. Tool interfaced with existing product; significantly reduced bugs and product limitations.</li>
				        <li>Wrote and updated functional and product specifications.</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>xSides Corporation</em></strong> • Seattle, WA Aug 1998 – Sept 1999</p>
				    <p><strong>Web Developer</strong></p>
				    <ul>
				        <li>Maintained working knowledge of HTML, ASP, JavaScript, VB Script, SQL, ADO, and other Web-based tools through the implementation and construction of Web-based products and Web sites. Worked closely with design team to help develop ideas around the limitations of HTML.</li>
				        <li>Developed online tracking tool that recorded and accounted for all billable activity through any Web site—helped to design the UI and functionality for the product. </li>
				        <li>Learned and used proprietary language for our logger tracking tool.</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>Internet Entertainment Group</em></strong> • Seattle, WA	Apr 1997 – Aug 1998</p>
				    <p><strong>Customer Service Tech Supervisor</strong></p>
				    <ul>
				        <li>Pinpointed and resolved problems with a subscriber-based site; provided online and phone tech support.</li>
				        <li>Tested Web sites maintaining active log of HTML and script bugs, tracking from identification to resolution.</li>
				        <li>Responsible for validating and maintaining server uptime for over 50 web based clients.</li>
				        <li>Promoted to shift supervisory position after six months.</li>
				    </ul>
				</div>

				<div className="job-employer">
				    <p><strong><em>Nintendo of America</em></strong> • Redmond, WA Jul 1989 – Apr 1997</p>
				    <p><strong>Level V Consumer Service Representative</strong></p>
				    <ul>
				        <li>Redesigned and maintained Nintendo’s America Online Game Club Forum.</li>
				        <li>Updated and tested Nintendo’s AOL download Web site (using proprietary language Rainmansys).</li>
				        <li>Tested software for bugs prior to release; maintained active log of software bugs.</li>
				        <li>Taught consumer service and technical training classes for new-hires and ongoing employees.</li>
				        <li>Traveled around USA (3 months) as spokesperson/counselor for 1990 World Powerfest.</li>
				    </ul>
				</div>


				<p><strong><em>Skills:</em></strong></p>
				<p><strong>Software Apps:</strong> Photoshop CS4, Dreamweaver CS4, Fireworks CS4, Contribute 3, Wordpress, Concrete5, Office 14,  Windows 7, OS X, Putty, SVN, Zend Framework</p>
				<p><strong>Languages:</strong> HTML, DHTML, ASP, PHP, CSS, JavaScript, SQL, XML, Java, VB Script, ADO, CDO, MySQL</p>
				<p><strong>Familiar with:</strong> Zend Framework, Developing on mobile devices, Mobile emulators, Ajax, ASP.NET, C#, Flash</p>
				<p><strong>Personal:</strong>  Enjoy working in a team environment or on my own. Self-starter, quick learner, driven to succeed, 
				have managed teams of people and key projects. Have an excellent understanding of the industry. I am also   currently working with AJAX to expand my skill set.</p>
			</div>
		);
	}
});

module.exports = ResumePage;