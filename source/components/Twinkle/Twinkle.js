var React = require('react');
var cx = require('react-classset');

var Twinkle = React.createClass({

	propTypes: {
		isNavLoaded: React.PropTypes.bool.isRequired,
		isTwinkleLoaded: React.PropTypes.bool.isRequired
	},

	render: function () {
		var twinkleClasses = cx({
			loaded: this.props.isNavLoaded && !this.props.isTwinkleLoaded,
			visible: this.props.isTwinkleLoaded
		});	

		return (
			<div id="twinkle" className={twinkleClasses} />
		);
	}
});

module.exports = Twinkle;