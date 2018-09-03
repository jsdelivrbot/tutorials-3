import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

const API_KEY = 'AIzaSyAPY4qXT7DnVwpwjKFMaqhK59D90Z7evJc';

// Create new component that produces some html
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term:term}, videos => {
			// can condense ({ videos: videos }) to:
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		// Takes function and returns a new one that can only be called once every 300ms
		// Only needed for previous version of app without a search button
		// const videoSearch = _.debounce((term) => {
		// 	this.videoSearch(term);
		// }, 300);

		return (
			<div>
				<SearchBar onSearchSubmit={(term) => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

// Take the component's generated html and add it to the DOM
// Wrap component in JSX tags to create an instance of it
ReactDOM.render(<App />, document.querySelector('.container'));
