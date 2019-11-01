var React = require('react');
var cx = require('react-classset');

var ContactContent = React.createClass({

	propTypes: {
		handleHomeClicked: React.PropTypes.func.isRequired,
		currentView: React.PropTypes.string.isRequired,
		viewConstants: React.PropTypes.object.isRequired
	},

	render: function () {
		var cv = this.props.currentView;
		var vc = this.props.viewConstants;

		var contactClasses = cx({
			'fade-in': cv === vc.CONTACT
		});

		return (
			<article id="contact-content" className={contactClasses}>
				<nav>
				    <ul>
				        <li><a id="home-link" href="#" onClick={this.props.handleHomeClicked}>Home</a></li>
				    </ul>
				</nav>
				<header className="contact-header"><h1>Contact Me</h1></header>
				<table>
					<tbody>
					    <tr>
					        <td className="name">Email:</td> 
					        <td className="value">&nbsp;&nbsp;S h a u n B l o o m @ gmail . com</td>
					    </tr>
					    <tr>
					        <td className="name">Address:</td> 
					        <td className="value pad">&nbsp;&nbsp;XXXXX NE xxxth pl,<br />&nbsp;&nbsp;Duvall, WA 98019</td>
					    </tr>
					    <tr>
					        <td className="name">Phone:</td> 
					        <td className="value">&nbsp;&nbsp;Call me and I will tell you.</td>
					    </tr>
					    <tr>
					        <td className="name">Facebook:</td> 
					        <td className="value">&nbsp;&nbsp;<a href="http://www.facebook.com/shaun.bloom" target="_blank">www.facebook.com/shaun.bloom</a></td>    
					    </tr>
					    <tr>
					        <td className="name">Github:</td> 
					        <td className="value">&nbsp;&nbsp;<a href="https://github.com/shaunbloom" target="_blank">www.github.com/shaunbloom/</a></td>    
					    </tr>
				    </tbody>
				</table>
			</article>
		);
	}
});

module.exports = ContactContent;