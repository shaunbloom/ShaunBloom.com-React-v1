var React = require('react');

var ArtThumbnail = React.createClass({

	propTypes: {
		artData: React.PropTypes.object.isRequired,
		handleArtThumbnailClicked: React.PropTypes.func.isRequired
	},

	getPurchaseOptions: function (artData) {
		var qsp = artData.title + artData.year;
		qsp = qsp.toLowerCase();
		if (artData.purchase) {
			return (
				<a href={artData.smallpaper} className='purchase-link' target="_blank">{artData.linkText}</a>
				);
		} else {
			return (
				<span className="purchase-link-blank"><br /></span>
			);
			
		}
	},

	render: function () {
		var artData = this.props.artData;
	     
		return (
			<article>
				<a href="#" onClick={this.props.handleArtThumbnailClicked.bind(null, this.props.artData)}>
					<img name={artData.name} src={artData.thumbPath} />
					<footer>{artData.title} &#39;{artData.year}</footer>
				</a>
				<hr />
				{this.getPurchaseOptions(artData)}
			</article>
		);
	}
});

module.exports = ArtThumbnail;