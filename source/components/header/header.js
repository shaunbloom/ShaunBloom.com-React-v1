var React = require('react');
var cx = require('react-classset');

var Header = React.createClass({

	propTypes: {
		isBackgroundLoaded: React.PropTypes.bool.isRequired,
		handleArtClicked: React.PropTypes.func.isRequired,
		handleContactClicked: React.PropTypes.func.isRequired,
		handleResumeClicked: React.PropTypes.func.isRequired,
		handlePortfolioClicked: React.PropTypes.func.isRequired
	},

	render: function () {

		var headerClasses = cx({
			'loaded': this.props.isBackgroundLoaded
		});

		return (
			<header id="header-main" className={headerClasses}>
	            <nav>
	            	<ul>
	            		<li>
	            			<a href="#" id="art" onClick={this.props.handleArtClicked}>Art</a></li>
	            		<li>
	            			<a href="#" id="contact" onClick={this.props.handleContactClicked}>Contact</a></li>
	            		<li>
	            			<a href="#" id="resume" onClick={this.props.handleResumeClicked}>Resume</a></li>

	            		<li>
	            			<a href="#" id="portfolio" onClick={this.props.handlePortfolioClicked}>Portfolio</a></li>
	            		
	            	</ul>
	            </nav>
           </header>
		);
	}
});

module.exports = Header;


