var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Header = require('./Header/Header')
var Twinkle = require('./Twinkle/Twinkle');
var HomeContent = require('./HomeContent/HomeContent');
var ContactContent = require('./ContactContent/ContactContent');
var ResumePage = require('./Resume/Resume');
var PortfolioPage = require('./Portfolio/portfolio');
var ArtPage = require('./Art/ArtPage');
var ArtFull = require('./Art/ArtFull');
var cx = require('react-classset');

var viewConstants = {
	HOME: "HOME",
	CONTACT: "CONTACT",
	ART: "ART",
	ART_FULL: "ART_FULL",
	RESUME: "RESUME",
	PORTFOLIO: "PORTFOLIO"
}

var Application = React.createClass({

	getInitialState: function () {
		return {
			isPageLoaded: false,
			isBorderLoaded: false,
			isBackgroundLoaded: false,
			isNavLoaded: false,
			isTwinkleLoaded: false,
			currentView: viewConstants.HOME,
			currentArtData: {}
		};
	},

	addEventListeners: function () {
		var that = this;

		document.getElementById("content").addEventListener(this.getTransitionEvent(), function() {
			that.setState({
    			isBorderLoaded: true
	    	});	
	    });

	    document.getElementById("background").addEventListener(this.getTransitionEvent(), function() {
			that.setState({
	    		isBackgroundLoaded: true
	    	});	
		});

		document.getElementById("header-main").addEventListener(this.getTransitionEvent(), function() {
			setTimeout(function () {
				that.setState({
	    			isNavLoaded: true
	    		});	
			}, 1000);
		});

		document.getElementById("twinkle").addEventListener(this.getTransitionEvent(), function() {
			that.setState({
    			isTwinkleLoaded: true
    		});	
		});
	},

	componentDidMount: function() {
		this.addEventListeners();
		var that = this;
		setTimeout(function () {
			that.setState({
	    		isPageLoaded: true
	    	});	
		}, 200);
    	
  	},

	render: function () {

		var contentClasses = cx({
				'drop-shadow': true,
	     		'main-content': true,
	           	'loaded': this.state.isPageLoaded
    		});

		var backgroundClasses = cx({
			'background': true,
			'loaded': this.state.isBorderLoaded
		});

		var fullPage = this.getFullPage();

		var navClasses = cx({
			'framework-nav': true,
			'loaded': this.state.isBackgroundLoaded
		});

		return (
			<div>
				<nav className={navClasses}>
					<ul>
			            <li><a href="http://www.shaunbloom.com" title="Original site built with JQuery in '12">Jquery '12</a></li>
			            <li><a href="http://angular.shaunbloom.com" title="Rebuilt site in Angular to look and function exactly the same as the original JQuery version">Angular '15</a></li>
			            <li><a href="http://react.shaunbloom.com" className="selected" title="Original React (V 0.14) build out from 2015. Made to look and function exactly as the original JQuery version.">React '15</a></li>
			            <li><a href="http://reactv2.shaunbloom.com" title="Latest React build (V 16) using webpack, babel and es6. Made to look and function exactly as the original JQuery version.">React v2 '19</a></li>
			            <li><a href="http://vanillajs.shaunbloom.com" title="Latest build with Webpack, Babel and less using the latest vanilla ES6. Made to look and function exactly as the original JQuery version.">Vanilla '19</a></li>
			        </ul>
				</nav>
				<div id="wrapper">
					<section id="content" className={contentClasses}>
			            
			            <Header 
			            	isBackgroundLoaded={this.state.isBackgroundLoaded} 
			            	handleArtClicked={this.handleArtClicked}
			            	handleContactClicked={this.handleContactClicked}
			            	handleResumeClicked={this.handleResumeClicked}
			            	handlePortfolioClicked={this.handlePortfolioClicked} />    
			            
	            		<div id="background" className={backgroundClasses}>
	            			<Twinkle isNavLoaded={this.state.isNavLoaded} isTwinkleLoaded={this.state.isTwinkleLoaded}/>
	            			<HomeContent 
	            				isBorderLoaded={this.state.isBorderLoaded} 
	            				isNavLoaded={this.state.isNavLoaded} 
	            				isTwinkleLoaded={this.state.isTwinkleLoaded} 
	            				currentView={this.state.currentView} 
	            				viewConstants={viewConstants} />
	            			<ContactContent 
	            				handleHomeClicked={this.handleHomeClicked} 
	            				currentView={this.state.currentView}
	            				viewConstants={viewConstants} />
						</div>
			        </section>
			        <ReactCSSTransitionGroup transitionAppear={true} transitionName="cross-fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
	      				{fullPage}
	    		   	</ReactCSSTransitionGroup>
	    		</div>
	  		</div>
		);
	},

	getFullPage: function () {
		switch (this.state.currentView) {
			case viewConstants.RESUME :
				return <ResumePage 
		        		handleCloseClicked={this.handleCloseClicked}
		        		key="resume" />;

		    case viewConstants.ART :
			    return <ArtPage 
			        	handleCloseClicked={this.handleCloseClicked}
			        	handleArtThumbnailClicked={this.handleArtThumbnailClicked}
			        	key="art" />;

			case viewConstants.PORTFOLIO :
			    return <PortfolioPage 
			        	handleCloseClicked={this.handleCloseClicked}
			        	key="portfolio" />;

			case viewConstants.ART_FULL :
			    return <ArtFull 
			    		handleCloseClicked={this.handleArtClicked}
			    		artData={this.state.currentArtData} 
			    		key="artfull" />;

		    default:
		    	return;
		}
	},

	handleHomeClicked: function (ev) {
		ev.preventDefault();
		this.setState({
			currentView: viewConstants.HOME
		});
	},

	handleContactClicked: function (ev) {
		ev.preventDefault();
		this.setState({
			currentView: viewConstants.CONTACT
		});
	},

	handleResumeClicked: function (ev) {
		ev.preventDefault();
		this.setState({
			currentView: viewConstants.RESUME
		});
	},

	handlePortfolioClicked: function (ev) {
		ev.preventDefault();
		this.setState({
			currentView: viewConstants.PORTFOLIO
		});
	},

	handleArtClicked: function (ev) {
		ev.preventDefault();
		this.setState({
			currentArtData: {},
			currentView: viewConstants.ART
		});
	},
	
	handleArtThumbnailClicked: function (artData) {
		this.setState({
			currentArtData: artData,
			currentView: viewConstants.ART_FULL
		});
	},

	handleCloseClicked: function () {
		this.setState({
			currentView: viewConstants.HOME
		});
	},
	
	getTransitionEvent: function (elementName) {
	    var t;
	    var el = document.createElement('faleelement');
	    var transitions = {
	      'transition':'transitionend',
	      'OTransition':'oTransitionEnd',
	      'MozTransition':'transitionend',
	      'WebkitTransition':'webkitTransitionEnd'
	    }

	    for(t in transitions){
	        if( el.style[t] !== undefined ){
	            return transitions[t];
	        }
	    }
	}
});

module.exports = Application;