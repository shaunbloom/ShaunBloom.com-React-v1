var React = require('react');
var cx = require('react-classset');
var ArtThumbnail = require('./ArtThumbnail');
var artData = require('../../../../../data/art.json');

var ArtPage = React.createClass({

	propTypes: {
		handleCloseClicked: React.PropTypes.func.isRequired,
		handleArtThumbnailClicked: React.PropTypes.func.isRequired
	},

	render: function () {
		this.parseJsonData();
		var artThumbs = this.renderArtThumbnails();

		return (
			<div id="art-page">
            	<div id="close" onClick={this.closeArtPage}></div>
	            <h1>Art</h1>    
	            {artThumbs}
        	</div>
		);
	},

	parseJsonData: function () {

		for (var i = 0; i < artData.length; i++) {
			if (artData[i].purchase === "true" || artData[i].purchase === true) {
	        	artData[i].purchase = true;
	        } else {
	        	artData[i].purchase = false;
	        }
		}
	},

	closeArtPage: function (ev) {
		var that = this;
		ev.preventDefault();
		that.props.handleCloseClicked(ev);
		// setTimeout(function () {
		// 	that.props.handleCloseClicked(ev)}, 1000);
	},

	renderArtThumbnails: function () {
		var that = this;

		var artThumbs = artData.map(function (artData) {
			return <ArtThumbnail artData={artData} key={artData.id} handleArtThumbnailClicked={that.props.handleArtThumbnailClicked} />
		});

		return artThumbs;
	}
});

module.exports = ArtPage;
