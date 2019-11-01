var React = require('react');
var cx = require('react-classset');

var HomeContent = React.createClass({
	
	propTypes: {
		isBorderLoaded: React.PropTypes.bool.isRequired,
		isNavLoaded: React.PropTypes.bool.isRequired,
		currentView: React.PropTypes.string.isRequired,
		viewConstants: React.PropTypes.object.isRequired
	},

	render: function () {
		var cv = this.props.currentView;
		var vc = this.props.viewConstants;

		var homeClasses = cx({
			'loaded': this.props.isBorderLoaded,
			'fade-in': cv === vc.HOME
		});

		return (
			<article id="home-content" className={homeClasses}>
				<table>
			    	<tbody>
			    	<tr>
			        	<td className="name">Name:</td> 
			        	<td className="value">Shaun Bloom</td>
			        </tr>
			        <tr>
				        <td className="name">Age:</td> 
			    	    <td className="value">Wise</td>
			        </tr>
			        <tr>
				        <td className="name">Location:</td> 
			    	    <td className="value">Duvall, WA</td>    
			        </tr>
			        <tr>
				        <td className="name">Occupation:</td> 
			    	    <td className="value">Web Developer</td>  
			        </tr>
			        <tr>
				        <td className="name">Motto:</td>
			    	    <td className="value pad">Don't cry over spilled milk, cry over David Lee Roth's hair now!</td>
			        </tr>
			        <tr>
				        <td className="name">Objective:</td>
			    	    <td className="value pad">Make it through life without going too crazy, raise my kids to the best of my ability, and conquer the web one day at a time. God only knows how much info is out there to learn!!</td>
			        </tr>
			    	</tbody>
			    </table>
			</article>
		);
	}
});

module.exports = HomeContent;