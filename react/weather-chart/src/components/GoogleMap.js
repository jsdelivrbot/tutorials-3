import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		//renders an embedded map into the first parameter - an html element
		// this method is usually how we use 3rd party libraries with react
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// this.refs.map will give a direct reference to this html element
		return <div ref="map" />;
	}
};

export default GoogleMap;
