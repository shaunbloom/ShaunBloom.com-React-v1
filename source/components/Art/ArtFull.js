var React = require('react');
var cx = require('react-classset');

var ArtFull = React.createClass({

	propTypes: {
		handleCloseClicked: React.PropTypes.func.isRequired,
		artData: React.PropTypes.object.isRequired
	},

	getThumbnail: function () {
		var artData = this.props.artData;

		if (artData.originalThumbPath) {
			return (<img id="thumb-image" src={artData.originalThumbPath}></img>);
		}
	},

	render: function () {

		var artData = this.props.artData;

		return (
			<div id="artFull">
				<div id="original-thumb">
					{this.getThumbnail()}
				</div>
				<div id="close" onClick={this.props.handleCloseClicked}></div>
				<img id="full-image" src={artData.imagePath}></img>
			</div>
		);
	}
});

module.exports = ArtFull;